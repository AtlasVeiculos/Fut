# FUTCAREER — Modo Carreira

Jogo de navegador, leve e 100% front-end (HTML + CSS + JavaScript puro, sem
frameworks e sem dependências externas). Você cria um jogador, escolhe seu
clube a cada janela de transferências (a cada 6 meses) e acompanha a
simulação da liga até se aposentar.

## Como jogar

1. Crie seu jogador: nome, nacionalidade, posição e um estilo de jogo
   (define os atributos iniciais).
2. Assine seu primeiro contrato entre os clubes interessados.
3. No painel principal, clique em **Simular temporada** para jogar o turno
   (meia temporada). Você vê o resultado (jogos, gols, assistências, nota
   média) e a tabela da liga.
4. Depois de cada turno abre a **janela de transferências**: você pode
   permanecer no clube atual ou assinar com outro clube interessado.
   A cada 2 janelas (1 ano) a tabela fecha, um campeão é definido e a
   temporada seguinte começa.
5. A partir dos 33 anos você pode encerrar a carreira quando quiser (aos 38
   isso passa a ser o caminho natural). No fim, veja o resumo completo:
   jogos, gols, assistências, títulos e histórico de clubes.

O progresso é salvo automaticamente no navegador (`localStorage`), então
você pode fechar a aba e continuar depois pelo botão **Continuar carreira
salva**.

## Como colocar no ar (GitHub Pages)

1. Crie um repositório novo no GitHub (pode ser público ou privado, desde
   que o GitHub Pages esteja disponível no seu plano).
2. Suba estes arquivos mantendo a mesma estrutura de pastas:
   ```
   index.html
   css/style.css
   js/data.js
   js/engine.js
   js/app.js
   ```
3. No repositório, vá em **Settings → Pages**.
4. Em **Source**, selecione a branch `main` (ou `master`) e a pasta `/root`.
5. Salve. Em alguns minutos o GitHub mostra o link público, algo como:
   `https://seu-usuario.github.io/nome-do-repositorio/`.

Nenhum passo de build é necessário — é um site estático simples.

## Estrutura do código

- `js/data.js` — base de dados: ligas, clubes (com reputação, usada para
  calcular força e salário), nacionalidades, posições e estilos de jogo.
- `js/engine.js` — todo o "motor" do jogo: criação de jogador, cálculo de
  overall, simulação de partidas e da tabela, mercado de transferências,
  evolução de atributos por idade/desempenho, salvar/carregar.
- `js/app.js` — camada de tela: monta o HTML de cada tela (criação,
  escolha de clube, painel, resultado do turno, mercado, resumo de
  carreira) e liga os cliques às funções do `engine.js`.
- `css/style.css` — identidade visual (gramado à noite sob holofotes),
  responsiva e com foco visível para acessibilidade.

## Personalizar / expandir

Tudo foi feito de propósito simples para rodar rápido e ser fácil de
editar:

- **Adicionar ligas/clubes:** edite o array `LEAGUES` em `js/data.js`.
- **Ajustar dificuldade do mercado:** mude o `gap` (diferença de
  reputação aceita) em `clubesInteressados()` no `engine.js`.
- **Deixar a simulação mais detalhada:** hoje cada turno simula um
  returno simples (todos contra todos, uma vez) com placares por
  distribuição de Poisson simplificada — dá para trocar por uma lógica
  de partida por partida se quiser mais profundidade (vai deixar o jogo
  mais pesado).

## Limitações conhecidas (de propósito, para manter leve)

- A simulação de partidas é simplificada (não é minuto a minuto).
- Só a liga em que o jogador está atualmente tem tabela e resultados
  calculados a cada turno.
- Elenco do clube não é modelado jogador a jogador — só o seu jogador é
  simulado individualmente dentro do time.
