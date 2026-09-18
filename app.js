/* ==========================================================================
   FUTCAREER — camada de interface
   Le e escreve no objeto `estado` e chama as funcoes de js/engine.js.
   Nao ha nenhuma logica de simulacao aqui, so montagem de tela.
   ========================================================================== */

let estado = null;
const app = document.getElementById("app");

function nomeLiga(id) { return (LEAGUES.find(l => l.id === id) || {}).nome || "—"; }

function iniciarTela() {
  const salvo = carregarEstado();
  app.innerHTML = `
    <section class="tela tela-abertura">
      <div class="abertura-marca">
        <span class="abertura-numero">10</span>
        <h1>FUTCAREER</h1>
        <p class="subt">Monte a carreira do seu jogador, temporada a temporada.</p>
      </div>
      <div class="abertura-acoes">
        <button class="btn btn-primario" id="btn-nova-carreira">Nova carreira</button>
        ${salvo ? `<button class="btn btn-secundario" id="btn-continuar">Continuar carreira salva</button>` : ""}
      </div>
    </section>
  `;
  document.getElementById("btn-nova-carreira").addEventListener("click", telaCriacao);
  const btnContinuar = document.getElementById("btn-continuar");
  if (btnContinuar) btnContinuar.addEventListener("click", () => {
    estado = salvo;
    if (!estado.jogador.clubeNome) telaEscolhaClube(); else telaDashboard();
  });
}

function telaCriacao() {
  const opcoesPosicao = Object.entries(POSICOES)
    .map(([id, p]) => `<option value="${id}">${p.label}</option>`).join("");
  const opcoesNacionalidade = NACIONALIDADES
    .map(n => `<option value="${n}">${n}</option>`).join("");
  const cardsEstilo = ESTILOS.map(e => `
    <label class="cartao-estilo">
      <input type="radio" name="estilo" value="${e.id}" ${e.id === "finalizador" ? "checked" : ""}>
      <span class="cartao-estilo-titulo">${e.nome}</span>
      <span class="cartao-estilo-desc">${e.descricao}</span>
    </label>
  `).join("");

  app.innerHTML = `
    <section class="tela tela-criacao">
      <h2>Crie seu jogador</h2>
      <div class="campo">
        <label for="input-nome">Nome</label>
        <input id="input-nome" type="text" maxlength="24" placeholder="Ex: Bruno Andrade">
      </div>
      <div class="campo-linha">
        <div class="campo">
          <label for="select-nacionalidade">Nacionalidade</label>
          <select id="select-nacionalidade">${opcoesNacionalidade}</select>
        </div>
        <div class="campo">
          <label for="select-posicao">Posicao</label>
          <select id="select-posicao">${opcoesPosicao}</select>
        </div>
      </div>
      <div class="campo">
        <label>Estilo de jogo</label>
        <div class="grade-estilos">${cardsEstilo}</div>
      </div>
      <button class="btn btn-primario" id="btn-confirmar-criacao">Comecar carreira</button>
    </section>
  `;

  document.getElementById("btn-confirmar-criacao").addEventListener("click", () => {
    const nome = document.getElementById("input-nome").value.trim() || "Jogador Sem Nome";
    const nacionalidade = document.getElementById("select-nacionalidade").value;
    const posicao = document.getElementById("select-posicao").value;
    const estiloId = document.querySelector('input[name="estilo"]:checked').value;

    const jogador = criarJogador({ nome, nacionalidade, posicao, estiloId });
    estado = {
      jogador,
      clubes: novoMundo(),
      ano: new Date().getFullYear(),
      turno: 1,
      ultimoCampeao: null,
    };
    telaEscolhaClube();
  });
}

function telaEscolhaClube() {
  const candidatos = clubesInteressados(estado, true)
    .filter(c => c.nivel >= 2 || c.reputacao <= 65)
    .slice(0, 5);
  const lista = (candidatos.length ? candidatos : estado.clubes.filter(c => c.nivel === 2).slice(0, 5))
    .map((c, i) => `
      <div class="cartao-clube">
        <div class="cartao-clube-topo">
          <strong>${c.nome}</strong>
          <span class="tag">${nomeLiga(c.ligaId)}</span>
        </div>
        <div class="cartao-clube-info">
          <span>Reputacao: ${c.reputacao}</span>
          <span>Salario estimado: R$ ${calcularSalarioOferta(c, estado.jogador).toLocaleString("pt-BR")}/mes</span>
        </div>
        <button class="btn btn-secundario" data-clube="${c.nome}">Assinar contrato</button>
      </div>
    `).join("");

  app.innerHTML = `
    <section class="tela tela-mercado">
      <h2>Primeiro contrato profissional</h2>
      <p class="texto-apoio">Clubes dispostos a te dar uma chance no time principal:</p>
      <div class="lista-clubes">${lista}</div>
    </section>
  `;

  document.querySelectorAll("[data-clube]").forEach(btn => {
    btn.addEventListener("click", () => {
      const clube = estado.clubes.find(c => c.nome === btn.dataset.clube);
      assinarComClube(estado, clube);
      salvarEstado(estado);
      telaDashboard();
    });
  });
}

function cartaoJogadorHTML() {
  const j = estado.jogador;
  const ovr = overall(j);
  return `
    <div class="cartao-jogador">
      <div class="cartao-jogador-ovr">${ovr}</div>
      <div class="cartao-jogador-dados">
        <h3>${j.nome}</h3>
        <p>${POSICOES[j.posicao].label} · ${j.idade} anos · ${j.nacionalidade}</p>
        <p class="destaque">${j.clubeNome || "Sem clube"} (${nomeLiga(j.ligaIdAtual || j.ligaIdPreferida)})</p>
        <p class="texto-apoio">Potencial: ${j.potencial} · Valor de mercado: R$ ${j.valorDeMercado.toLocaleString("pt-BR")}</p>
      </div>
    </div>
  `;
}

function tabelaHTML() {
  const j = estado.jogador;
  const ligaId = j.ligaIdAtual || j.ligaIdPreferida;
  const linhas = tabelaOrdenada(estado.clubes, ligaId).map((c, i) => `
    <tr class="${c.nome === j.clubeNome ? "linha-destaque" : ""}">
      <td>${i + 1}</td><td>${c.nome}</td><td>${c.pontos}</td><td>${c.jogos}</td>
      <td>${c.vitorias}</td><td>${c.empates}</td><td>${c.derrotas}</td>
      <td>${c.golsPro}</td><td>${c.golsContra}</td>
    </tr>
  `).join("");
  return `
    <table class="tabela-liga">
      <caption>${nomeLiga(ligaId)} — ${estado.ano} · ${estado.turno === 1 ? "1º turno" : "2º turno"}</caption>
      <thead><tr><th>#</th><th>Clube</th><th>Pts</th><th>J</th><th>V</th><th>E</th><th>D</th><th>GP</th><th>GC</th></tr></thead>
      <tbody>${linhas || "<tr><td colspan='9'>Sem jogos ainda.</td></tr>"}</tbody>
    </table>
  `;
}

function telaDashboard() {
  const j = estado.jogador;
  const podeAposentar = jogadorDeveConsiderarAposentadoria(j);
  app.innerHTML = `
    <section class="tela tela-dashboard">
      <header class="barra-topo">
        <span class="marca">FUTCAREER</span>
        <span>${estado.ano} · ${estado.turno === 1 ? "1º turno" : "2º turno"}</span>
      </header>
      ${cartaoJogadorHTML()}
      ${tabelaHTML()}
      <div class="acoes">
        <button class="btn btn-primario" id="btn-simular">Simular temporada</button>
        <button class="btn btn-secundario" id="btn-carreira">Ver estatisticas de carreira</button>
        ${podeAposentar ? `<button class="btn btn-perigo" id="btn-aposentar">Encerrar carreira</button>` : ""}
      </div>
    </section>
  `;
  document.getElementById("btn-simular").addEventListener("click", () => {
    const resultado = simularMeiaTemporada(estado);
    salvarEstado(estado);
    telaResultado(resultado);
  });
  document.getElementById("btn-carreira").addEventListener("click", telaResumoCarreira);
  const btnAposentar = document.getElementById("btn-aposentar");
  if (btnAposentar) btnAposentar.addEventListener("click", () => {
    aposentar(j);
    salvarEstado(estado);
    telaResumoCarreira();
  });
}

function telaResultado(resultado) {
  const j = estado.jogador;
  const stats = j.estatisticasTemporada;
  const media = stats.jogosComNota ? (stats.notaSoma / stats.jogosComNota).toFixed(1) : "—";
  app.innerHTML = `
    <section class="tela tela-resultado">
      <h2>Fim do ${estado.turno === 1 ? "1º" : "2º"} turno — ${estado.ano}</h2>
      <div class="grade-stats">
        <div><span class="numero">${stats.jogos}</span><span>Jogos</span></div>
        <div><span class="numero">${stats.gols}</span><span>Gols</span></div>
        <div><span class="numero">${stats.assistencias}</span><span>Assistencias</span></div>
        <div><span class="numero">${media}</span><span>Nota media</span></div>
      </div>
      ${resultado.lesionou ? `<p class="aviso">Voce sofreu uma lesao ao longo do turno e desfalcou o time em algumas partidas.</p>` : ""}
      ${tabelaHTML()}
      <button class="btn btn-primario" id="btn-para-mercado">Ir para a janela de transferencias</button>
    </section>
  `;
  document.getElementById("btn-para-mercado").addEventListener("click", () => {
    const anoAntes = estado.ano;
    avancarParaProximaJanela(estado);
    salvarEstado(estado);
    telaMercado(anoAntes !== estado.ano);
  });
}

function telaMercado(temporadaVirou) {
  const j = estado.jogador;
  const atual = clubeAtual(estado);
  const opcoes = clubesInteressados(estado, false);
  const cartoes = opcoes.map(c => `
    <div class="cartao-clube">
      <div class="cartao-clube-topo">
        <strong>${c.nome}</strong>
        <span class="tag">${nomeLiga(c.ligaId)}</span>
      </div>
      <div class="cartao-clube-info">
        <span>Reputacao: ${c.reputacao}</span>
        <span>Salario estimado: R$ ${calcularSalarioOferta(c, j).toLocaleString("pt-BR")}/mes</span>
      </div>
      <button class="btn btn-secundario" data-clube="${c.nome}">Assinar</button>
    </div>
  `).join("");

  app.innerHTML = `
    <section class="tela tela-mercado">
      ${temporadaVirou && estado.ultimoCampeao ? `<p class="aviso aviso-campeao">Campeao de ${estado.ano - 1}: <strong>${estado.ultimoCampeao}</strong>${estado.ultimoCampeao === (atual && atual.nome) ? " — parabens, voce e campeao!" : ""}</p>` : ""}
      <h2>Janela de transferencias</h2>
      <p class="texto-apoio">Clube atual: <strong>${atual ? atual.nome : "—"}</strong> · Contrato ate ${j.contratoAte}</p>
      <div class="lista-clubes">
        ${cartoes || "<p class='texto-apoio'>Nenhum clube com interesse forte no momento.</p>"}
      </div>
      <button class="btn btn-primario" id="btn-permanecer">Permanecer no clube atual</button>
    </section>
  `;

  document.querySelectorAll("[data-clube]").forEach(btn => {
    btn.addEventListener("click", () => {
      const clube = estado.clubes.find(c => c.nome === btn.dataset.clube);
      assinarComClube(estado, clube);
      salvarEstado(estado);
      telaDashboard();
    });
  });
  document.getElementById("btn-permanecer").addEventListener("click", () => {
    salvarEstado(estado);
    telaDashboard();
  });
}

function telaResumoCarreira() {
  const j = estado.jogador;
  const c = j.estatisticasCarreira;
  const media = c.jogosComNota ? (c.notaSoma / c.jogosComNota).toFixed(1) : "—";
  const historico = [...j.historicoClubes, j.clubeNome ? { clube: j.clubeNome, de: estado.temporadaInicioNoClube, ate: estado.ano } : null]
    .filter(Boolean)
    .map(h => `<li>${h.clube} (${h.de}–${j.aposentado ? estado.ano : "atual"})</li>`).join("");
  const titulos = j.titulos.length ? `<ul>${j.titulos.map(t => `<li>${t}</li>`).join("")}</ul>` : "<p class='texto-apoio'>Nenhum titulo ainda.</p>";

  app.innerHTML = `
    <section class="tela tela-resumo">
      <h2>${j.aposentado ? "Carreira encerrada" : "Estatisticas de carreira"}</h2>
      ${cartaoJogadorHTML()}
      <div class="grade-stats">
        <div><span class="numero">${c.jogos}</span><span>Jogos</span></div>
        <div><span class="numero">${c.gols}</span><span>Gols</span></div>
        <div><span class="numero">${c.assistencias}</span><span>Assistencias</span></div>
        <div><span class="numero">${media}</span><span>Nota media</span></div>
      </div>
      <h3>Titulos</h3>
      ${titulos}
      <h3>Clubes</h3>
      <ul>${historico}</ul>
      <div class="acoes">
        ${j.aposentado
          ? `<button class="btn btn-primario" id="btn-nova-vida">Comecar nova carreira</button>`
          : `<button class="btn btn-secundario" id="btn-voltar">Voltar</button>`}
      </div>
    </section>
  `;

  const btnVoltar = document.getElementById("btn-voltar");
  if (btnVoltar) btnVoltar.addEventListener("click", telaDashboard);
  const btnNovaVida = document.getElementById("btn-nova-vida");
  if (btnNovaVida) btnNovaVida.addEventListener("click", () => { apagarEstado(); iniciarTela(); });
}

iniciarTela();
