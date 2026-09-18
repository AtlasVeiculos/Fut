/* ==========================================================================
   FUTCAREER — base de dados de ligas, clubes e nacionalidades
   Todos os valores de "reputacao" vao de 1 a 100 e definem, de forma
   simplificada, a forca media do elenco, o orcamento e o salario-base
   que o clube consegue pagar. Isso NAO e uma copia de nenhum jogo — sao
   apenas nomes de clubes e ligas reais usados como referencia de realismo.
   ========================================================================== */

const LEAGUES = [
  {
    id: "BRA1",
    nome: "Brasileirao Serie A",
    pais: "Brasil",
    nivel: 1,
    clubes: [
      { nome: "Flamengo",      reputacao: 88 },
      { nome: "Palmeiras",     reputacao: 89 },
      { nome: "Sao Paulo",     reputacao: 82 },
      { nome: "Corinthians",   reputacao: 83 },
      { nome: "Gremio",        reputacao: 79 },
      { nome: "Internacional", reputacao: 78 },
      { nome: "Atletico-MG",   reputacao: 80 },
      { nome: "Fluminense",    reputacao: 77 },
    ],
  },
  {
    id: "BRA2",
    nome: "Brasileirao Serie B",
    pais: "Brasil",
    nivel: 2,
    clubes: [
      { nome: "Vasco da Gama", reputacao: 62 },
      { nome: "Sport Recife",  reputacao: 55 },
      { nome: "Ceara",         reputacao: 54 },
      { nome: "Guarani",       reputacao: 48 },
      { nome: "Coritiba",      reputacao: 50 },
      { nome: "Novorizontino", reputacao: 44 },
    ],
  },
  {
    id: "ENG1",
    nome: "Premier League",
    pais: "Inglaterra",
    nivel: 1,
    clubes: [
      { nome: "Manchester City",  reputacao: 95 },
      { nome: "Arsenal",          reputacao: 90 },
      { nome: "Liverpool",        reputacao: 92 },
      { nome: "Chelsea",          reputacao: 86 },
      { nome: "Manchester United", reputacao: 85 },
      { nome: "Tottenham",        reputacao: 83 },
      { nome: "Newcastle",        reputacao: 80 },
      { nome: "Aston Villa",      reputacao: 78 },
    ],
  },
  {
    id: "ESP1",
    nome: "La Liga",
    pais: "Espanha",
    nivel: 1,
    clubes: [
      { nome: "Real Madrid",     reputacao: 96 },
      { nome: "Barcelona",       reputacao: 93 },
      { nome: "Atletico Madrid", reputacao: 87 },
      { nome: "Sevilla",         reputacao: 78 },
      { nome: "Real Sociedad",   reputacao: 76 },
      { nome: "Villarreal",      reputacao: 77 },
      { nome: "Athletic Bilbao", reputacao: 75 },
      { nome: "Real Betis",      reputacao: 74 },
    ],
  },
  {
    id: "ITA1",
    nome: "Serie A",
    pais: "Italia",
    nivel: 1,
    clubes: [
      { nome: "Inter de Milao", reputacao: 89 },
      { nome: "AC Milan",       reputacao: 86 },
      { nome: "Juventus",       reputacao: 87 },
      { nome: "Napoli",         reputacao: 84 },
      { nome: "Roma",           reputacao: 80 },
      { nome: "Atalanta",       reputacao: 79 },
      { nome: "Lazio",          reputacao: 77 },
      { nome: "Fiorentina",     reputacao: 74 },
    ],
  },
  {
    id: "GER1",
    nome: "Bundesliga",
    pais: "Alemanha",
    nivel: 1,
    clubes: [
      { nome: "Bayern de Munique",  reputacao: 93 },
      { nome: "Borussia Dortmund",  reputacao: 85 },
      { nome: "RB Leipzig",         reputacao: 82 },
      { nome: "Bayer Leverkusen",   reputacao: 83 },
      { nome: "Eintracht Frankfurt", reputacao: 76 },
      { nome: "Wolfsburg",          reputacao: 73 },
      { nome: "Freiburg",           reputacao: 72 },
    ],
  },
  {
    id: "FRA1",
    nome: "Ligue 1",
    pais: "Franca",
    nivel: 1,
    clubes: [
      { nome: "Paris Saint-Germain", reputacao: 91 },
      { nome: "Marselha",            reputacao: 78 },
      { nome: "Lyon",                reputacao: 76 },
      { nome: "Monaco",              reputacao: 79 },
      { nome: "Lille",               reputacao: 75 },
      { nome: "Rennes",              reputacao: 73 },
      { nome: "Lens",                reputacao: 72 },
    ],
  },
  {
    id: "POR1",
    nome: "Primeira Liga",
    pais: "Portugal",
    nivel: 1,
    clubes: [
      { nome: "Benfica",             reputacao: 82 },
      { nome: "Porto",               reputacao: 81 },
      { nome: "Sporting CP",         reputacao: 80 },
      { nome: "Braga",               reputacao: 71 },
      { nome: "Vitoria de Guimaraes", reputacao: 65 },
    ],
  },
  {
    id: "NED1",
    nome: "Eredivisie",
    pais: "Holanda",
    nivel: 1,
    clubes: [
      { nome: "Ajax",       reputacao: 78 },
      { nome: "PSV Eindhoven", reputacao: 79 },
      { nome: "Feyenoord",  reputacao: 77 },
      { nome: "AZ Alkmaar", reputacao: 68 },
      { nome: "Twente",     reputacao: 65 },
    ],
  },
  {
    id: "USA1",
    nome: "MLS",
    pais: "Estados Unidos",
    nivel: 1,
    clubes: [
      { nome: "Inter Miami",     reputacao: 74 },
      { nome: "LAFC",            reputacao: 72 },
      { nome: "LA Galaxy",       reputacao: 68 },
      { nome: "Atlanta United",  reputacao: 66 },
      { nome: "Seattle Sounders", reputacao: 65 },
    ],
  },
  {
    id: "MEX1",
    nome: "Liga MX",
    pais: "Mexico",
    nivel: 1,
    clubes: [
      { nome: "Club America", reputacao: 71 },
      { nome: "Chivas",       reputacao: 66 },
      { nome: "Cruz Azul",    reputacao: 67 },
      { nome: "Tigres",       reputacao: 70 },
      { nome: "Monterrey",    reputacao: 69 },
    ],
  },
];

const NACIONALIDADES = [
  "Brasil", "Argentina", "Portugal", "Espanha", "Franca", "Inglaterra",
  "Alemanha", "Italia", "Holanda", "Belgica", "Uruguai", "Colombia",
  "Estados Unidos", "Mexico", "Croacia", "Japao", "Nigeria", "Senegal",
  "Marrocos", "Noruega",
];

const POSICOES = {
  GOL: { label: "Goleiro",          pesos: { def: 0.55, fis: 0.35, pas: 0.10 } },
  ZAG: { label: "Zagueiro",         pesos: { def: 0.50, fis: 0.30, pas: 0.20 } },
  LAT: { label: "Lateral",          pesos: { def: 0.35, vel: 0.30, fis: 0.15, pas: 0.20 } },
  VOL: { label: "Volante",          pesos: { def: 0.30, pas: 0.30, fis: 0.25, dri: 0.15 } },
  MEI: { label: "Meia",             pesos: { pas: 0.35, dri: 0.30, atq: 0.20, vel: 0.15 } },
  ATA: { label: "Atacante",         pesos: { atq: 0.45, dri: 0.25, vel: 0.20, fis: 0.10 } },
};

const ESTILOS = [
  {
    id: "finalizador",
    nome: "Finalizador",
    descricao: "Frio na hora de definir. Comeca mais forte em ATQ e VEL.",
    bonus: { atq: 12, vel: 6, dri: 2 },
  },
  {
    id: "criativo",
    nome: "Criativo",
    descricao: "Enxerga o jogo antes dos outros. Comeca mais forte em PAS e DRI.",
    bonus: { pas: 10, dri: 8, atq: 2 },
  },
  {
    id: "fisico",
    nome: "Fisico",
    descricao: "Duro na marcacao e forte no corpo a corpo. Comeca mais forte em DEF e FIS.",
    bonus: { def: 10, fis: 10 },
  },
];

// Nomes usados apenas para gerar jogadores adversarios genericos (nao reais)
const NOMES_BASE = [
  "Silva", "Santos", "Costa", "Oliveira", "Pereira", "Almeida", "Ribeiro",
  "Carvalho", "Gomes", "Martins", "Rocha", "Dias", "Nunes", "Teixeira",
  "Moreira", "Fernandes", "Correia", "Lopes", "Marques", "Vieira",
];
