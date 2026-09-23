// Salvamento — GDD Parte 16.3
// localStorage como armazenamento padrão + exportar/importar arquivo JSON.

const STORAGE_KEY = 'carreira_save_v1';

export function saveGame(state) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    return true;
  } catch (e) {
    console.error('Falha ao salvar:', e);
    return false;
  }
}

export function loadGame() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch (e) {
    console.error('Falha ao carregar save:', e);
    return null;
  }
}

export function clearGame() {
  localStorage.removeItem(STORAGE_KEY);
}

/** Exporta o save atual como arquivo .json para o jogador baixar. */
export function exportGame(state) {
  const blob = new Blob([JSON.stringify(state, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `carreira-save-${(state.player?.name || 'jogador').toLowerCase().replace(/\s+/g, '-')}.json`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

/** Lê um arquivo .json escolhido pelo jogador (input type=file) e retorna o estado. */
export function importGameFromFile(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      try {
        resolve(JSON.parse(reader.result));
      } catch (e) {
        reject(e);
      }
    };
    reader.onerror = reject;
    reader.readAsText(file);
  });
}
