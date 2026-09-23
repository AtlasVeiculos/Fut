# Carreira — Jogo de Futebol

Simulação de carreira de futebol, da escolinha aos 10 anos até a biografia final — baseada no
[documento de design completo](DESIGN.md) (GDD) construído antes deste código.

Este repositório implementa o **ciclo de vida inteiro**: fase de base (Sub-11 a Sub-20), fase
profissional (com contrato, transferências, vestiário/técnico/torcida, lesões, declínio físico,
títulos e prêmios) e pós-aposentadoria (técnico, comentarista, empresário, dirigente, ou vida
tranquila), terminando numa tela de biografia. Testado de ponta a ponta com Playwright — uma
carreira completa roda sem erros de JavaScript, da criação do personagem ao epílogo.

## Como rodar

Sem build, sem dependências. HTML/CSS/JS puro (Parte 16 do GDD).

```bash
npx serve .
# ou
python3 -m http.server 8000
```
Abra a porta indicada no navegador. Não funciona com duplo clique no `index.html` (`file://`) —
módulos ES precisam de um servidor HTTP, mesmo que local.

**Publicando no GitHub Pages:** suba o repositório, ative *Settings → Pages*, branch `main`,
pasta raiz. Pronto.

## Estrutura

```
index.html, css/styles.css     → shell da aplicação e tema visual "painel de dados"
js/main.js                      → controlador central: estado do jogo, roteamento de telas,
                                   orquestra as três fases
js/save.js                      → localStorage + exportar/importar save em JSON

js/core/
  random.js, attributes.js, bars.js, phases.js, character.js   → base do sistema (Partes 3, 4, 10)
  events.js, formulas.js, season.js                             → motor da fase de base (Partes 5, 6, 9)

  proBars.js, proFormulas.js, proEvents.js, proCareer.js        → motor da fase profissional
                                                                    (Parte 7 inteira: 7.1-7.17)
  retirement.js                                                  → fechamento de carreira, Score
                                                                    de Legado, requisitos de
                                                                    pós-carreira (Parte 8.1-8.2)
  postCareer.js, postCareerEvents.js                             → os 4 caminhos + vida tranquila,
                                                                    progressão por nível, Vazio
                                                                    Existencial (Partes 8.3-8.12)
  oldAge.js                                                      → saúde física na velhice (8.13)
  biography.js                                                   → compila o epílogo final,
                                                                    incluindo arquétipo heurístico
                                                                    (Parte 13.2, arquétipos 7.2)

js/data/
  leagues.js      → as 30+ maiores ligas reais do mundo (Parte 14.3, catálogo de referência)
  clubsBR.js       → 20 clubes brasileiros reais, jogáveis (Parte 14.2)

js/ui/screens/     → uma tela por arquivo; cada uma chama de volta o controlador (main.js) via
                     os métodos do objeto `app` (startSeasonFlow, confirmProSeasonPlan, etc.)
```

Cada módulo de `core/` tem, no topo, qual Parte do GDD ele implementa — isso é intencional,
pra facilitar voltar ao documento de design se algo precisar de ajuste.

## O que está implementado e jogável

- **Base completa** (Sub-11 a Sub-20): criação de personagem com potencial oculto e curva de
  maturação, peneiras, eventos por fase, evolução de atributos, risco de lesão, risco de dispensa
- **Transição para o profissional**, incluindo um fallback automático de clube se o jogador
  terminar a base sem contrato
- **Fase profissional completa**: contrato (salário, duração, renovação), mercado de transferência
  quando dispensado, química de vestiário/confiança do técnico/reputação com a torcida, audiência
  e patrocínio, patrimônio com imposto e estilo de vida, títulos e prêmios individuais, declínio
  físico a partir dos ~28 anos, risco de lesão, rivalidade/escândalo/família como eventos
- **Aposentadoria**: Score de Legado, Qualidade da Despedida, avaliação dos requisitos de cada
  caminho de pós-carreira (8.2)
- **Pós-carreira com 4 caminhos** (Técnico, Comentarista, Empresário, Dirigente/Dono de clube) +
  opção de "vida tranquila fora do futebol" — cada caminho com atributos, progressão por nível
  (promoção/demissão) e nota de temporada calculada pela fórmula do GDD
- **Vazio Existencial** (crise de identidade pós-carreira) e **Saúde Física na Velhice**,
  ativada a partir dos 65 anos
- **Biografia final** (epílogo): compila títulos, prêmios, Score de Legado, um arquétipo
  heurístico (ex: "O Ídolo de um Clube Só", "A Promessa que Não Vingou") e a linha do tempo
  completa da carreira
- Salvamento automático em `localStorage`, exportar save em `.json`, reset de carreira

## Limitações desta entrega (honestas, de propósito)

- **Elencos e jogadores reais não estão incluídos.** A licença cobre nomes reais (Parte 14.1 do
  GDD), mas montar e manter essa base de dados é um trabalho de curadoria separado (Parte 14.7),
  fora do escopo de programação. Hoje "colegas de elenco" são só o contexto do clube.
- **Só clubes do Brasil são jogáveis.** `data/leagues.js` lista as 30+ maiores ligas do mundo
  como catálogo de referência (Parte 14.3), mas não há transferência internacional real
  implementada — toda a carreira, incluindo a profissional, acontece nos 20 clubes brasileiros
  de `clubsBR.js`. Isso é a maior simplificação desta entrega.
- **Muitas fórmulas foram simplificadas para caber em código.** O GDD descreve dezenas de
  variáveis por sistema (ex: Parte 7.9 a 7.17 têm facilmente 40+ variáveis somadas); o código usa
  uma versão enxuta de cada fórmula, mantendo a lógica e os pesos relativos do documento, mas sem
  toda a granularidade descrita (ex: não há tipos diferentes de lesão, Parte 7.11.1, só uma chance
  agregada de lesão).
- **Sem trigger automático de reta final.** A pós-carreira e a velhice não têm um teto de idade
  natural — o jogo deixa o jogador envelhecer indefinidamente se ele nunca clicar em "Encerrar a
  história" (disponível a partir dos 60 anos). Isso é intencional (modo "carreira infinita" da
  Parte 8.9), mas seria saudável, numa próxima iteração, sugerir o encerramento perto dos 85-90
  anos, como a Parte 13.1 do GDD descreve.
- **Balanceamento é uma primeira passada**, testada em dezenas de simulações automatizadas
  (Node) e em pelo menos um ciclo de vida completo via navegador (Playwright), mas não
  extensivamente jogada por uma pessoa.

## Testes realizados

- Sintaxe de todos os arquivos JS validada (`node --check`)
- Validação estática de que todo `import` corresponde a um `export` real (script Python neste
  histórico de desenvolvimento, não incluído no repositório)
- Lógica pura (`core/*`) testada isoladamente em Node, simulando dezenas de carreiras
- **Ciclo de vida completo testado num navegador real via Playwright**: criação → base → transição
  para o profissional → mais de 15 temporadas profissionais (incluindo dispensa, mercado de
  transferência e renovação de contrato) → aposentadoria → escolha de caminho pós-carreira →
  mais de 20 anos de pós-carreira → epílogo — sem nenhum erro de JavaScript
- Salvamento, recarregamento de página, exportação de save e reset testados e funcionando

## Roteiro sugerido para continuar

1. Curadoria de dados reais de elenco e expansão para ligas internacionais (Parte 14.3, 14.7)
2. Detalhar tipos de lesão (7.11.1) em vez da chance agregada atual
3. Adicionar sugestão automática de encerramento da história perto dos 85-90 anos (13.1)
4. Expandir os pools de eventos (hoje há uma amostra de cada tipo, não a lista exaustiva do GDD)
5. Ajustar balanceamento com mais sessões de jogo reais

## Licenciamento de dados reais

Este repositório assume que a licença de uso de nomes reais de clubes, ligas e seleções (Parte
14.1 do GDD) já está garantida pelo responsável pelo projeto. Qualquer uso comercial deve
confirmar separadamente a cobertura da licença para escudos, jogadores individuais e identidade
visual.
