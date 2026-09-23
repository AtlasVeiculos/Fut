import { createCharacter } from './core/character.js';
import { drawEventsForPhase, applyEventChoice } from './core/events.js';
import { resolveSeasonEnd } from './core/season.js';
import { applyBarDeltas } from './core/bars.js';
import { saveGame, loadGame, clearGame, exportGame } from './save.js';

import { beginProCareer, resolveProSeasonEnd } from './core/proCareer.js';
import { drawProEvents } from './core/proEvents.js';
import { retireFromActiveCareer, avaliarRequisitosDePosCarreira } from './core/retirement.js';
import { startPostCareer, resolvePostCareerSeason, initVazioExistencial, updateVazioExistencial, TRACKS } from './core/postCareer.js';
import { drawPostCareerEvents } from './core/postCareerEvents.js';
import { initSaudeFisicaVelhice, declinarSaudeFisicaVelhice } from './core/oldAge.js';
import { CLUBS_BR } from './data/clubsBR.js';

import { renderNewGame } from './ui/screens/newGame.js';
import { renderDashboard } from './ui/screens/dashboard.js';
import { renderJogador } from './ui/screens/jogador.js';
import { renderHistorico } from './ui/screens/historico.js';
import { renderSobre } from './ui/screens/sobre.js';
import { renderTreino, lifestyleBarDeltas } from './ui/screens/treino.js';
import { renderEventModal, closeModal } from './ui/screens/eventModal.js';
import { renderResumo } from './ui/screens/resumo.js';
import { renderPeneira } from './ui/screens/peneira.js';

import { renderProTreino } from './ui/screens/proTreino.js';
import { renderProResumo } from './ui/screens/proResumo.js';
import { renderTransferMarket } from './ui/screens/transferMarket.js';
import { renderContractRenewal } from './ui/screens/contractRenewal.js';
import { renderRetirementChoice } from './ui/screens/retirementChoice.js';
import { renderPathSelect } from './ui/screens/pathSelect.js';
import { renderPostCareerResumo } from './ui/screens/postCareerResumo.js';
import { renderEpilogue } from './ui/screens/epilogue.js';

const screenRoot = document.getElementById('screen-root');
const modalRoot = document.getElementById('modal-root');
const navList = document.getElementById('nav-list');

const NAV_SCREENS = ['dashboard', 'jogador', 'historico', 'sobre'];

const app = {
  state: {
    player: null,
    screen: 'newGame',
    seasonContext: null,
    eventQueue: [],
    retirementForced: false
  },

  // ================= ciclo de vida =================

  init() {
    const saved = loadGame();
    if (saved && saved.player) {
      this.state = { ...this.state, ...saved, screen: saved.player.stage === 'encerrado' ? 'dashboard' : 'dashboard' };
    }
    this.wireNav();
    this.wireFooterButtons();
    this.render();
  },

  wireNav() {
    navList.addEventListener('click', (e) => {
      const item = e.target.closest('.nav-item');
      if (!item || !this.state.player) return;
      const screen = item.dataset.screen;
      if (!NAV_SCREENS.includes(screen)) return;
      this.state.screen = screen;
      this.render();
    });
  },

  wireFooterButtons() {
    document.getElementById('btn-save').addEventListener('click', () => { saveGame(this.state); flash('Jogo salvo.'); });
    document.getElementById('btn-export').addEventListener('click', () => { if (this.state.player) exportGame(this.state); });
    document.getElementById('btn-reset').addEventListener('click', () => {
      if (!confirm('Isso apaga sua carreira salva neste navegador. Continuar?')) return;
      this.resetGame();
    });
  },

  resetGame() {
    clearGame();
    this.state = { player: null, screen: 'newGame', seasonContext: null, eventQueue: [], retirementForced: false };
    this.render();
  },

  // ================= render dispatch =================

  render() {
    updateNavActive(this.state.screen);
    if (!this.state.player) return renderNewGame(screenRoot, this);

    switch (this.state.screen) {
      case 'dashboard': return renderDashboard(screenRoot, this);
      case 'jogador': return renderJogador(screenRoot, this);
      case 'historico': return renderHistorico(screenRoot, this);
      case 'sobre': return renderSobre(screenRoot);
      case 'treino': return renderTreino(screenRoot, this);
      case 'peneira': return renderPeneira(screenRoot, this);
      case 'proTreino': return renderProTreino(screenRoot, this);
      case 'transferMarket': return renderTransferMarket(screenRoot, this);
      case 'contractRenewal': return renderContractRenewal(screenRoot, this);
      case 'retirementChoice': return renderRetirementChoice(screenRoot, this, this.state.retirementForced);
      case 'pathSelect': return renderPathSelect(screenRoot, this, this.state.requisitosPendentes);
      case 'epilogue': return renderEpilogue(screenRoot, this);
      default: return renderDashboard(screenRoot, this);
    }
  },

  // ================= criação de personagem =================

  startNewCareer(formData) {
    this.state.player = createCharacter(formData);
    this.state.screen = 'peneira';
    saveGame(this.state);
    this.render();
  },

  resolvePeneira(clubId) {
    const p = this.state.player;
    if (clubId) { p.club = clubId; p.seasonsAtClub = 0; pushLog(p, 'Foi aprovado em uma peneira e entrou para um clube.'); }
    else pushLog(p, 'Não foi aprovado desta vez, mas vai continuar treinando.');
    this.state.screen = 'dashboard';
    saveGame(this.state);
    this.render();
  },

  // ================= FASE DE BASE =================

  startSeasonFlow() { this.state.screen = 'treino'; this.render(); },

  confirmSeasonPlan({ emphasis, lifestyle }) {
    const p = this.state.player;
    p.bars = applyBarDeltas(p.bars, lifestyleBarDeltas(lifestyle));
    this.state.seasonContext = { emphasis, seasonNumber: p.age - 9 };
    this.state.eventQueue = drawEventsForPhase(p, p.phaseId, 2);
    this.showNextEventOrFinish();
  },

  showNextEventOrFinish() {
    if (this.state.eventQueue.length === 0) return this.finishEvents();
    const event = this.state.eventQueue.shift();
    renderEventModal(modalRoot, event, (choiceIndex) => {
      const p = this.state.player;
      const { bars, log } = applyEventChoice(p, event, choiceIndex);
      p.bars = bars;
      pushLog(p, log, `Temp. ${this.state.seasonContext.seasonNumber}`);
      closeModal(modalRoot);
      this.showNextEventOrFinish();
    });
  },

  finishEvents() {
    const p = this.state.player;
    const result = resolveSeasonEnd(p, { emphasis: this.state.seasonContext.emphasis });

    p.attributes = result.nextAttributes;
    p.age = result.newAge;
    p.phaseId = result.newPhaseId;
    if (result.lesionou) p.injuries += 1;
    if (result.permanencia && result.permanencia.status === 'dispensado') { p.club = null; p.seasonsAtClub = 0; }
    else if (p.club) p.seasonsAtClub = (p.seasonsAtClub ?? 0) + 1;
    if (result.fimDaBase) p.baseCompleted = true;

    pushLog(p, `Fim de temporada: DP médio ${result.dpMedio}${result.lesionou ? ', com uma lesão no ano' : ''}.`, `Temp. ${this.state.seasonContext.seasonNumber}`);

    this.state.screen = 'resumo';
    saveGame(this.state);
    renderResumo(screenRoot, this, result);
    updateNavActive(this.state.screen);
  },

  finishSeasonSummary(result) {
    this.state.screen = (!result.fimDaBase && this.state.player.club === null) ? 'peneira' : 'dashboard';
    saveGame(this.state);
    this.render();
  },

  // ================= TRANSIÇÃO PARA O PROFISSIONAL =================

  transitionToPro() {
    const p = this.state.player;
    if (!p.club) {
      const fallback = CLUBS_BR.filter(c => c.tier === 'medio')[0];
      p.club = fallback.id;
      pushLog(p, `Sem clube ao fim da base, assinou um contrato inicial com o ${fallback.name}.`);
    }
    beginProCareer(p);
    pushLog(p, 'Começou a carreira profissional.', `${p.age} anos`);
    this.state.screen = 'dashboard';
    saveGame(this.state);
    this.render();
  },

  // ================= FASE PROFISSIONAL =================

  startProSeasonFlow() { this.state.screen = 'proTreino'; this.render(); },

  confirmProSeasonPlan({ emphasis, lifestyle }) {
    const p = this.state.player;
    this.state.seasonContext = { emphasis, lifestyle, seasonNumber: `${p.subFase.label} · ${p.age} anos` };
    this.state.eventQueue = drawProEvents(p, 2);
    this.showNextProEventOrFinish();
  },

  showNextProEventOrFinish() {
    if (this.state.eventQueue.length === 0) return this.finishProEvents();
    const event = this.state.eventQueue.shift();
    renderEventModal(modalRoot, event, (choiceIndex) => {
      const p = this.state.player;
      const choice = event.choices[choiceIndex];
      const result = choice.effect(p);
      if (result.bars) p.bars = applyBarDeltas(p.bars, result.bars);
      if (result.proBars) p.proBars = applyBarDeltas(p.proBars, result.proBars);
      if (result.relacoesPessoais) p.relacoesPessoais = applyBarDeltas(p.relacoesPessoais, result.relacoesPessoais);
      if (result.audiencia) p.audiencia = Math.max(0, p.audiencia + result.audiencia);
      if (result.patrimonioDelta) p.patrimonio += result.patrimonioDelta;
      if (result.forceTransfer) { p.club = null; }
      pushLog(p, result.log, this.state.seasonContext.seasonNumber);
      closeModal(modalRoot);
      this.showNextProEventOrFinish();
    });
  },

  finishProEvents() {
    const p = this.state.player;
    const result = resolveProSeasonEnd(p, this.state.seasonContext);

    p.attributes = result.nextAttributes;
    p.age = result.newAge;
    p.subFase = result.subFase;
    p.patrimonio = result.patrimonio;
    p.valorDeMercado = result.valorDeMercado;
    if (result.lesionou) p.injuries += 1;
    if (result.titulo) p.legado.titulos.push({ idade: p.age, nome: 'Título de clube' });
    if (result.premio) p.legado.premios.push({ idade: p.age, nome: 'Prêmio individual' });
    p.legado.temporadasNoClubeAtual = (p.legado.temporadasNoClubeAtual || 0) + 1;

    if (p.club && result.permanencia.status === 'dispensado') { p.club = null; p.legado.temporadasNoClubeAtual = 0; }
    else if (p.contract) p.contract.anosRestantes = Math.max(0, p.contract.anosRestantes - 1);

    pushLog(p, `Fim de temporada: DP médio ${result.dpMedio}, valor de mercado ${formatMoneyShort(result.valorDeMercado)}.`, `${p.subFase.label} · ${p.age} anos`);

    this._pendingProResult = result;
    this.state.screen = 'proResumo';
    saveGame(this.state);
    renderProResumo(screenRoot, this, result);
    updateNavActive(this.state.screen);
  },

  finishProSeasonSummary(result) {
    const p = this.state.player;
    if (result.aposentadoriaForcada) return this.goToRetirementChoice(true);
    if (result.aposentadoriaSugerida) return this.goToRetirementChoice(false);
    if (p.club === null) { this.state.screen = 'transferMarket'; saveGame(this.state); return this.render(); }
    if (result.contratoExpirado) { this.state.screen = 'contractRenewal'; saveGame(this.state); return this.render(); }
    this.state.screen = 'dashboard';
    saveGame(this.state);
    this.render();
  },

  acceptTransferOffer(clubId, salario) {
    const p = this.state.player;
    const club = CLUBS_BR.find(c => c.id === clubId);
    p.club = clubId;
    p.contract = { clube: clubId, salarioAnual: salario, anosRestantes: 3 };
    p.legado.temporadasNoClubeAtual = 0;
    p.clubesHistorico = [...(p.clubesHistorico || []), clubId];
    pushLog(p, `Assinou com o ${club.name}.`, `${p.age} anos`);
    this.state.screen = 'dashboard';
    saveGame(this.state);
    this.render();
  },

  enterTransferMarket() {
    const p = this.state.player;
    p.club = null;
    p.contract = null;
    this.state.screen = 'transferMarket';
    saveGame(this.state);
    this.render();
  },

  renewContract(novoSalario) {
    const p = this.state.player;
    p.contract = { clube: p.club, salarioAnual: novoSalario, anosRestantes: 3 };
    pushLog(p, 'Renovou o contrato com o clube atual.', `${p.age} anos`);
    this.state.screen = 'dashboard';
    saveGame(this.state);
    this.render();
  },

  // ================= APOSENTADORIA =================

  goToRetirementChoice(forced) {
    this.state.retirementForced = forced;
    this.state.screen = 'retirementChoice';
    saveGame(this.state);
    this.render();
  },

  cancelRetirement() {
    this.state.screen = 'dashboard';
    this.render();
  },

  confirmRetirement() {
    const p = this.state.player;
    const { scoreDeLegado, qualidadeDaDespedida } = retireFromActiveCareer(p);
    p.scoreDeLegado = scoreDeLegado;
    p.qualidadeDaDespedida = qualidadeDaDespedida;
    pushLog(p, `Encerrou a carreira ativa aos ${p.age} anos, com Score de Legado ${scoreDeLegado}.`, `${p.age} anos`);

    const requisitos = avaliarRequisitosDePosCarreira(p, scoreDeLegado);
    this.state.requisitosPendentes = requisitos;
    this.state.screen = 'pathSelect';
    saveGame(this.state);
    this.render();
  },

  // ================= PÓS-CARREIRA =================

  choosePostCareerPath(trackId, requisitos) {
    const p = this.state.player;
    if (trackId) startPostCareer(p, trackId, requisitos[trackId].atende);
    else p.postCareer = null;

    p.stage = 'postcareer';
    p.vazioExistencial = initVazioExistencial(p, { forcada: this.state.retirementForced });
    pushLog(p, trackId ? `Escolheu seguir como ${TRACKS[trackId].label.toLowerCase()}.` : 'Escolheu uma vida tranquila, fora do futebol.', `${p.age} anos`);

    this.state.screen = 'dashboard';
    saveGame(this.state);
    this.render();
  },

  startPostCareerSeasonFlow() {
    const p = this.state.player;
    this.state.eventQueue = drawPostCareerEvents(p, 1);
    this.showNextPostCareerEventOrFinish();
  },

  showNextPostCareerEventOrFinish() {
    if (this.state.eventQueue.length === 0) return this.finishPostCareerEvents();
    const event = this.state.eventQueue.shift();
    renderEventModal(modalRoot, event, (choiceIndex) => {
      const p = this.state.player;
      const choice = event.choices[choiceIndex];
      const result = choice.effect(p);
      if (result.saudeMental) p.bars.saudeMental = clampBarLocal(p.bars.saudeMental + result.saudeMental);
      if (result.vazioExtra) p.vazioExistencial = clampBarLocal((p.vazioExistencial ?? 0) + result.vazioExtra);
      if (result.relacaoFilhosExtra) p.relacoesPessoais.relacaoFilhos = clampBarLocal(p.relacoesPessoais.relacaoFilhos + result.relacaoFilhosExtra);
      if (result.saudeVelhiceExtra) p.saudeFisicaVelhice = clampBarLocal((p.saudeFisicaVelhice ?? 70) + result.saudeVelhiceExtra);
      pushLog(p, result.log, `${p.age} anos`);
      closeModal(modalRoot);
      this.showNextPostCareerEventOrFinish();
    });
  },

  finishPostCareerEvents() {
    const p = this.state.player;
    let result = { nota: null, evento: null, nivelAtual: null };

    if (p.postCareer) {
      const emphasisAttr = TRACKS[p.postCareer.trackId].attrs[0];
      result = resolvePostCareerSeason(p, emphasisAttr);
    }

    p.vazioExistencial = updateVazioExistencial(p.vazioExistencial ?? 0, p, !!p.postCareer);
    p.age += 1;

    if (p.age >= 65) {
      p.saudeFisicaVelhice = p.saudeFisicaVelhice == null ? initSaudeFisicaVelhice(p) : declinarSaudeFisicaVelhice(p.saudeFisicaVelhice);
    }

    if (result.evento) pushLog(p, `${result.evento === 'promocao' ? 'Subiu de nível' : 'Perdeu espaço'}: ${result.nivelAtual}.`, `${p.age} anos`);

    this.state.screen = 'postCareerResumo';
    saveGame(this.state);
    renderPostCareerResumo(screenRoot, this, result);
    updateNavActive(this.state.screen);
  },

  finishPostCareerSummary() {
    this.state.screen = 'dashboard';
    saveGame(this.state);
    this.render();
  },

  goToEpilogue() {
    this.state.screen = 'epilogue';
    saveGame(this.state);
    this.render();
  }
};

// ================= utilitários =================

function pushLog(player, text, season) {
  if (!text) return;
  player.history.push({ season: season ?? `${player.age} anos`, text });
}

function updateNavActive(screen) {
  [...navList.children].forEach(li => li.classList.toggle('active', li.dataset.screen === screen));
}

function clampBarLocal(v) { return Math.max(0, Math.min(100, Math.round(v))); }

function formatMoneyShort(v) {
  if (v >= 1000000) return `R$ ${(v / 1000000).toFixed(1)}M`;
  if (v >= 1000) return `R$ ${Math.round(v / 1000)}mil`;
  return `R$ ${Math.round(v)}`;
}

function flash(msg) {
  const el = document.createElement('div');
  el.textContent = msg;
  el.style.cssText = 'position:fixed;bottom:20px;left:50%;transform:translateX(-50%);background:#1c2a23;border:1px solid #2a3a32;padding:10px 18px;border-radius:4px;color:#eef4f0;font-size:0.85rem;z-index:100;';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 1800);
}

app.init();
