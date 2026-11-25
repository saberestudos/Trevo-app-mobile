// Model com o progresso do usuário mostrado na Home.
// O nível e a barra saem da experiência ganha nas missões;
// os dias sem apostar (RF 05) saem da data de início.
const EXPERIENCIA_POR_NIVEL = 100; // provisório: o grupo ainda vai definir essa regra
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

  // Começa no nível 1 e sobe a cada 100 pontos de experiência.
  nivelAtual() {
    return Math.floor(this.experiencia / EXPERIENCIA_POR_NIVEL) + 1;
  }

  proximoNivel() {
    return this.nivelAtual() + 1;
  }

  // Quanto já foi completado do nível atual, de 0 a 100.
  porcentagemDoNivel() {
    const experienciaNoNivel = this.experiencia % EXPERIENCIA_POR_NIVEL;
    return Math.floor((experienciaNoNivel / EXPERIENCIA_POR_NIVEL) * 100);
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
