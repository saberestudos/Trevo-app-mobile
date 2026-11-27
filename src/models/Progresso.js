// Model com o progresso do usuário mostrado na Home.
// O nível e a barra saem da experiência ganha nas missões;
// os dias sem apostar (RF 05) saem da data de início.
// Regra dos níveis: começa no 0; o nível 1 pede 55 pontos, o 2 pede 160
// e, a partir daí, cada nível pede mais 105 pontos.
const PONTOS_NIVEL_1 = 55;
const PONTOS_NIVEL_2 = 160;
const PONTOS_POR_NIVEL_SEGUINTE = 105;

// Total de pontos para chegar a um nível.
export function pontosParaNivel(nivel) {
  if (nivel <= 0) return 0;
  if (nivel === 1) return PONTOS_NIVEL_1;
  return PONTOS_NIVEL_2 + (nivel - 2) * PONTOS_POR_NIVEL_SEGUINTE;
}
const UM_DIA_EM_MILISSEGUNDOS = 24 * 60 * 60 * 1000;

export default class Progresso {
  constructor({
    moedas,
    trofeus,
    experiencia,
    missoesConcluidas,
    posicaoRanking,
    amigos,
    ativos,
    inicioSemApostar,
  }) {
    this.moedas = moedas;
    this.trofeus = trofeus;
    this.experiencia = experiencia;
    this.missoesConcluidas = missoesConcluidas;
    this.posicaoRanking = posicaoRanking;
    this.amigos = amigos;
    this.ativos = ativos;
    this.inicioSemApostar = new Date(inicioSemApostar);
  }

  // Verdadeiro a partir do momento em que a primeira missão é registrada.
  jaFezMissao() {
    return this.missoesConcluidas > 0;
  }

  // Nível atual a partir dos pontos de experiência (começa no 0).
  nivelAtual() {
    let nivel = 0;
    while (pontosParaNivel(nivel + 1) <= this.experiencia) {
      nivel += 1;
    }
    return nivel;
  }

  proximoNivel() {
    return this.nivelAtual() + 1;
  }

  // Quanto já foi completado do nível atual, de 0 a 100.
  porcentagemDoNivel() {
    const inicio = pontosParaNivel(this.nivelAtual());
    const fim = pontosParaNivel(this.proximoNivel());
    return Math.floor(((this.experiencia - inicio) / (fim - inicio)) * 100);
  }

  // Dias completos desde a data de início (ou da última recaída).
  diasSemApostar() {
    const diferenca = Date.now() - this.inicioSemApostar.getTime();
    return Math.max(0, Math.floor(diferenca / UM_DIA_EM_MILISSEGUNDOS));
  }

  // Posição no ranking: "#1" (curta) ou "#01" (com dois dígitos).
  // Quem ainda não entrou no ranking aparece só com "#".
  ranking(comDoisDigitos = false) {
    if (!this.posicaoRanking) {
      return '#';
    }
    const posicao = String(this.posicaoRanking);
    return `#${comDoisDigitos ? posicao.padStart(2, '0') : posicao}`;
  }
}
