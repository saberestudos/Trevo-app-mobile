// Guarda dados no navegador (localStorage), para não sumirem ao recarregar a página.
// No celular (Expo Go) não existe localStorage: lá os dados ficam só na memória.
// Quando o backend existir, quem guarda os dados é ele, e isto deixa de ser usado.
const armazenamento = globalThis.localStorage;

export function lerDados(chave, valorPadrao) {
  if (!armazenamento) return valorPadrao;
  try {
    const texto = armazenamento.getItem(chave);
    return texto ? JSON.parse(texto) : valorPadrao;
  } catch {
    return valorPadrao;
  }
}

export function salvarDados(chave, valor) {
  if (!armazenamento) return;
  try {
    armazenamento.setItem(chave, JSON.stringify(valor));
  } catch {
    // Sem espaço ou bloqueado pelo navegador: segue só com a memória.
  }
}
