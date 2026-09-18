/* ==========================================================================
   FUTCAREER — motor do jogo
   Toda a logica de simulacao fica aqui. A tela (app.js) so le o estado
   e chama estas funcoes; nao ha calculo de jogo dentro da UI.
   ========================================================================== */

const SAVE_KEY = "futcareer_save_v1";

function clamp(v, min, max) { return Math.max(min, Math.min(max, v)); }
function rnd(min, max) { return Math.random() * (max - min) + min; }
function rndInt(min, max) { return Math.floor(rnd(min, max + 1)); }
function pick(arr) { return arr[rndInt(0, arr.length - 1)]; }

/* ---------- Construcao do clube (runtime) ---------------------------- */

function buildClub(base, leagueId, leagueNivel) {
  return {
    nome: base.nome,
    ligaId: leagueId,
    nivel: leagueNivel,
    reputacao: base.reputacao,
    orcamento: Math.round(base.reputacao * rnd(0.8, 1.3) * 1_000_000),
    pontos: 0, jogos: 0, vitorias: 0, empates: 0, derrotas: 0,
    golsPro: 0, golsContra: 0,
  };
}

function novoMundo() {
  const clubes = [];
  for (const liga of LEAGUES) {
    for (const base of liga.clubes) {
      clubes.push(buildClub(base, liga.id, liga.nivel));
    }
  }
  return clubes;
}

function resetarTabela(clubes) {
  for (const c of clubes) {
    c.pontos = 0; c.jogos = 0; c.vitorias = 0; c.empates = 0; c.derrotas = 0;
    c.golsPro = 0; c.golsContra = 0;
  }
}

function clubesDaLiga(clubes, ligaId) {
  return clubes.filter(c => c.ligaId === ligaId);
}

/* ---------- Criacao do jogador ----------------------------------------- */

function criarJogador({ nome, nacionalidade, posicao, estiloId }) {
  const estilo = ESTILOS.find(e => e.id === estiloId) || ESTILOS[0];
  const base = { atq: 40, dri: 40, pas: 40, def: 40, fis: 40, vel: 40 };
  for (const k in base) base[k] += rndInt(-4, 4);
  for (const k in estilo.bonus) base[k] += estilo.bonus[k];
  for (const k in base) base[k] = clamp(base[k], 20, 80);

  const potencial = clamp(rndInt(65, 95), 65, 99);

  // Clube inicial: um time pequeno/medio da base do futebol nacional do jogador
  const ligaInicial = LEAGUES.find(l => l.pais === nacionalidade) || LEAGUES[1];

  return {
    nome, nacionalidade, posicao, estiloId,
    idade: 17,
    atributos: base,
    potencial,
    clubeNome: null, // definido na primeira janela
    ligaIdPreferida: ligaInicial.id,
    contratoAte: null,
    salario: 0,
    valorDeMercado: 0,
    moral: 70,
    aposentado: false,
    estatisticasTemporada: statsVazias(),
    estatisticasCarreira: statsVazias(),
    historicoClubes: [],
    titulos: [],
  };
}

function statsVazias() {
  return { jogos: 0, gols: 0, assistencias: 0, notaSoma: 0, jogosComNota: 0, clSheets: 0 };
}

function overall(jogador) {
  const pesos = POSICOES[jogador.posicao].pesos;
  let total = 0;
  for (const attr in pesos) total += jogador.atributos[attr] * pesos[attr];
  return Math.round(clamp(total, 1, 99));
}

function poderDoJogador(jogador) {
  // Combina OVR atual com uma fracao do potencial para calcular interesse de clubes
  return Math.round(overall(jogador) * 0.75 + jogador.potencial * 0.25);
}

function atualizarValorDeMercado(jogador) {
  const ovr = overall(jogador);
  const fatorIdade = jogador.idade <= 23 ? 1.4 : jogador.idade <= 29 ? 1.0 : jogador.idade <= 33 ? 0.6 : 0.3;
  const base = Math.pow(1.18, ovr - 40) * 150000 * fatorIdade;
  jogador.valorDeMercado = Math.round(base / 10000) * 10000;
}

/* ---------- Mercado de transferencias ----------------------------------- */

function clubeAtual(estado) {
  return estado.clubes.find(c => c.nome === estado.jogador.clubeNome);
}

function clubesInteressados(estado, incluirAtual = false) {
  const jogador = estado.jogador;
  const poder = poderDoJogador(jogador);
  const atual = clubeAtual(estado);
  return estado.clubes
    .filter(c => (incluirAtual ? true : c.nome !== (atual && atual.nome)))
    .map(c => ({ clube: c, gap: Math.abs(c.reputacao - poder) }))
    .filter(x => x.gap <= 22 || x.clube.reputacao <= poder + 6)
    .sort((a, b) => a.gap - b.gap)
    .slice(0, 6)
    .map(x => x.clube);
}

function calcularSalarioOferta(clube, jogador) {
  const ovr = overall(jogador);
  const base = (clube.reputacao * 900) + (ovr * 700) + (jogador.potencial * 200);
  return Math.round(base / 50) * 50;
}

function assinarComClube(estado, clube) {
  const jogador = estado.jogador;
  if (jogador.clubeNome) {
    jogador.historicoClubes.push({
      clube: jogador.clubeNome,
      de: estado.temporadaInicioNoClube || estado.ano,
      ate: estado.ano,
    });
  }
  jogador.clubeNome = clube.nome;
  jogador.ligaIdAtual = clube.ligaId;
  jogador.salario = calcularSalarioOferta(clube, jogador);
  jogador.contratoAte = estado.ano + rndInt(2, 4);
  estado.temporadaInicioNoClube = estado.ano;
}

/* ---------- Simulacao de partidas --------------------------------------- */

function forcaClube(clube) {
  return clube.reputacao + rnd(-6, 6);
}

function simularPlacar(forcaA, forcaB) {
  const diff = (forcaA - forcaB) / 12;
  const mediaA = clamp(1.35 + diff * 0.35, 0.3, 3.6);
  const mediaB = clamp(1.35 - diff * 0.35, 0.3, 3.6);
  return [poisson(mediaA), poisson(mediaB)];
}

function poisson(lambda) {
  // Aproximacao simples e rapida (nao precisa ser estatisticamente perfeita)
  let L = Math.exp(-lambda), k = 0, p = 1;
  do { k++; p *= Math.random(); } while (p > L && k < 9);
  return k - 1;
}

function registrarResultado(clube, golsPro, golsContra) {
  clube.jogos++; clube.golsPro += golsPro; clube.golsContra += golsContra;
  if (golsPro > golsContra) { clube.vitorias++; clube.pontos += 3; }
  else if (golsPro === golsContra) { clube.empates++; clube.pontos += 1; }
  else { clube.derrotas++; }
}

function gerarRodadas(clubes) {
  // Round-robin simples (todos contra todos, uma vez) via algoritmo do circulo
  const lista = [...clubes];
  if (lista.length % 2 !== 0) lista.push(null); // bye
  const n = lista.length;
  const rodadas = [];
  for (let r = 0; r < n - 1; r++) {
    const jogosRodada = [];
    for (let i = 0; i < n / 2; i++) {
      const a = lista[i], b = lista[n - 1 - i];
      if (a && b) jogosRodada.push([a, b]);
    }
    rodadas.push(jogosRodada);
    lista.splice(1, 0, lista.pop());
  }
  return rodadas;
}

function simularParticipacaoJogador(estado, foiCasa, golsTime, golsAdversario) {
  const jogador = estado.jogador;
  const ovr = overall(jogador);
  const clube = clubeAtual(estado);
  const forcaMedia = clube.reputacao;

  const chanceTitular = clamp(0.35 + (ovr - forcaMedia) / 90, 0.08, 0.97);
  const titular = Math.random() < chanceTitular;
  const stats = jogador.estatisticasTemporada;

  if (!titular) return;

  stats.jogos++;
  estado.jogador.estatisticasCarreira.jogos++;

  let nota = 6.0 + rnd(-0.6, 0.6);

  if (["ATA", "MEI"].includes(jogador.posicao) && golsTime > 0) {
    const chanceGolPorGolTime = jogador.atributos.atq / 260;
    let golsMarcados = 0;
    for (let i = 0; i < golsTime; i++) if (Math.random() < chanceGolPorGolTime) golsMarcados++;
    if (golsMarcados > 0) {
      stats.gols += golsMarcados;
      jogador.estatisticasCarreira.gols += golsMarcados;
      nota += golsMarcados * 0.5;
    }
    if (Math.random() < jogador.atributos.pas / 320 && golsTime > golsMarcados) {
      stats.assistencias += 1;
      jogador.estatisticasCarreira.assistencias += 1;
      nota += 0.3;
    }
  }

  if (["GOL", "ZAG", "LAT", "VOL"].includes(jogador.posicao) && golsAdversario === 0) {
    stats.clSheets++;
    jogador.estatisticasCarreira.clSheets++;
    nota += 0.4;
  }
  if (["GOL", "ZAG", "LAT", "VOL"].includes(jogador.posicao)) {
    nota -= golsAdversario * 0.15;
  }

  nota = clamp(nota, 3.0, 10.0);
  stats.notaSoma += nota; stats.jogosComNota++;
  jogador.estatisticasCarreira.notaSoma += nota;
  jogador.estatisticasCarreira.jogosComNota++;
}

function simularMeiaTemporada(estado) {
  const liga = clubesDaLiga(estado.clubes, estado.jogador.ligaIdAtual || estado.jogador.ligaIdPreferida);
  const rodadas = gerarRodadas(liga);
  const nomeClubeJogador = estado.jogador.clubeNome;

  for (const rodada of rodadas) {
    for (const [a, b] of rodada) {
      const [golsA, golsB] = simularPlacar(forcaClube(a), forcaClube(b));
      registrarResultado(a, golsA, golsB);
      registrarResultado(b, golsB, golsA);
      if (a.nome === nomeClubeJogador) simularParticipacaoJogador(estado, true, golsA, golsB);
      if (b.nome === nomeClubeJogador) simularParticipacaoJogador(estado, false, golsB, golsA);
    }
  }

  // Chance pequena de lesao (so afeta o relato, ja simplificado nas partidas acima)
  const lesionou = Math.random() < 0.08;

  crescerAtributos(estado.jogador);
  atualizarValorDeMercado(estado.jogador);

  return { lesionou };
}

function crescerAtributos(jogador) {
  const stats = jogador.estatisticasTemporada;
  const desempenho = stats.jogosComNota > 0 ? stats.notaSoma / stats.jogosComNota : 6.0;
  let delta = 0;
  if (jogador.idade <= 20) delta = rnd(1.0, 2.6);
  else if (jogador.idade <= 23) delta = rnd(0.4, 1.6);
  else if (jogador.idade <= 29) delta = rnd(-0.2, 0.6);
  else if (jogador.idade <= 32) delta = rnd(-1.0, 0.1);
  else delta = rnd(-2.2, -0.6);

  if (desempenho >= 7.0) delta += 0.4;
  if (desempenho <= 5.6 && stats.jogosComNota > 0) delta -= 0.3;

  const tetoPotencial = jogador.potencial;
  for (const k in jogador.atributos) {
    const alvo = jogador.atributos[k] + delta * rnd(0.6, 1.2);
    jogador.atributos[k] = clamp(alvo, 15, Math.min(99, tetoPotencial + 8));
  }
}

function tabelaOrdenada(clubes, ligaId) {
  return clubesDaLiga(clubes, ligaId)
    .slice()
    .sort((a, b) => (b.pontos - a.pontos) || ((b.golsPro - b.golsContra) - (a.golsPro - a.golsContra)));
}

/* ---------- Ciclo de temporada ------------------------------------------- */

function avancarParaProximaJanela(estado) {
  const jogador = estado.jogador;
  jogador.estatisticasTemporada = statsVazias();

  if (estado.turno === 1) {
    estado.turno = 2; // vira o returno, mesma temporada
  } else {
    // fim de temporada: definir campeao, atualizar idade, resetar tabela
    const tabela = tabelaOrdenada(estado.clubes, jogador.ligaIdAtual || jogador.ligaIdPreferida);
    const campeao = tabela[0];
    estado.ultimoCampeao = campeao ? campeao.nome : null;
    if (campeao && campeao.nome === jogador.clubeNome) {
      jogador.titulos.push(`${estado.ano} — Campeao (${LEAGUES.find(l => l.id === (jogador.ligaIdAtual || jogador.ligaIdPreferida)).nome})`);
    }
    resetarTabela(estado.clubes);
    estado.ano += 1;
    estado.turno = 1;
    jogador.idade += 1;
  }
}

function jogadorDeveConsiderarAposentadoria(jogador) {
  return jogador.idade >= 33;
}

function aposentar(jogador) {
  jogador.aposentado = true;
}

/* ---------- Salvar / carregar --------------------------------------------- */

function salvarEstado(estado) {
  try {
    localStorage.setItem(SAVE_KEY, JSON.stringify(estado));
    return true;
  } catch (e) { return false; }
}

function carregarEstado() {
  try {
    const raw = localStorage.getItem(SAVE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch (e) { return null; }
}

function apagarEstado() {
  try { localStorage.removeItem(SAVE_KEY); } catch (e) { /* noop */ }
}
