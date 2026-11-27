// Serviço do progresso do usuário. Hoje usa o mock e guarda no navegador
// as moedas ganhas e gastas; quando o backend existir, os métodos chamam a API.
import Progresso from '../models/Progresso';
import { progressoMock } from '../mocks/progresso';
import { lerDados, salvarDados } from '../utils/armazenamento';

// Moedas ganhas e gastas ficam guardadas no navegador,
// para o saldo não voltar ao recarregar a página.
const CHAVE_MOEDAS_GANHAS = 'trevo:moedasGanhas';
const CHAVE_MOEDAS_GASTAS = 'trevo:moedasGastas';
const CHAVE_BONUS_BOAS_VINDAS = 'trevo:bonusBoasVindas';
const CHAVE_NIVEL_PREMIADO = 'trevo:nivelPremiado';
// Troféus, missões e experiência ganhos nas missões diárias.
const CHAVE_GANHOS_MISSOES = 'trevo:ganhosMissoes';
const GANHOS_VAZIOS = { trofeus: 0, missoes: 0, experiencia: 0 };

// Presente de boas-vindas para quem chega na Home pela primeira vez.
export const MOEDAS_BOAS_VINDAS = 50;

// Prêmio por cada nível novo alcançado (provisório: o grupo pode mudar).
export const MOEDAS_POR_NIVEL = 30;

const TEMPO_DE_RESPOSTA_SIMULADO = 500;

class ProgressoService {
  buscar() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const ganhas = lerDados(CHAVE_MOEDAS_GANHAS, 0);
        const gastas = lerDados(CHAVE_MOEDAS_GASTAS, 0);
        const missoes = lerDados(CHAVE_GANHOS_MISSOES, GANHOS_VAZIOS);
        resolve(
          new Progresso({
            ...progressoMock,
            moedas: Math.max(progressoMock.moedas + ganhas - gastas, 0),
            trofeus: progressoMock.trofeus + missoes.trofeus,
            missoesConcluidas:
              progressoMock.missoesConcluidas + missoes.missoes,
            experiencia: progressoMock.experiencia + missoes.experiencia,
          }),
        );
      }, TEMPO_DE_RESPOSTA_SIMULADO);
    });
  }

  ganharMoedas(quantidade) {
    salvarDados(
      CHAVE_MOEDAS_GANHAS,
      lerDados(CHAVE_MOEDAS_GANHAS, 0) + quantidade,
    );
    return this.buscar();
  }

  // Tira moedas do saldo (ex.: numa compra). Quem chama confere antes se há saldo.
  gastarMoedas(quantidade) {
    salvarDados(
      CHAVE_MOEDAS_GASTAS,
      lerDados(CHAVE_MOEDAS_GASTAS, 0) + quantidade,
    );
    return this.buscar();
  }

  // Soma o que as missões deram: moedas, troféus, missões e experiência.
  registrarMissoes({ quantidade, experiencia, moedas, trofeus }) {
    const ganhos = lerDados(CHAVE_GANHOS_MISSOES, GANHOS_VAZIOS);
    salvarDados(CHAVE_GANHOS_MISSOES, {
      trofeus: ganhos.trofeus + trofeus,
      missoes: ganhos.missoes + quantidade,
      experiencia: ganhos.experiencia + experiencia,
    });
    if (moedas > 0) {
      return this.ganharMoedas(moedas);
    }
    return this.buscar();
  }

  // Soma pontos de experiência (ex.: acertos no quiz).
  ganharExperiencia(pontos) {
    const ganhos = lerDados(CHAVE_GANHOS_MISSOES, GANHOS_VAZIOS);
    salvarDados(CHAVE_GANHOS_MISSOES, {
      ...ganhos,
      experiencia: ganhos.experiencia + pontos,
    });
    return this.buscar();
  }

  // Dá o presente de boas-vindas uma única vez.
  // Devolve true se deu agora (para a tela mostrar o parabéns).
  receberBonusBoasVindas() {
    if (lerDados(CHAVE_BONUS_BOAS_VINDAS, false)) {
      return Promise.resolve(false);
    }
    salvarDados(CHAVE_BONUS_BOAS_VINDAS, true);
    return this.ganharMoedas(MOEDAS_BOAS_VINDAS).then(() => true);
  }

  // Quando a pessoa sobe de nível, ganha moedas uma vez por nível novo.
  // Devolve o nível e as moedas ganhas agora, ou null se não subiu.
  async receberPremioDeNivel() {
    const progresso = await this.buscar();
    const nivel = progresso.nivelAtual();
    const jaPremiado = lerDados(CHAVE_NIVEL_PREMIADO, 0);
    if (nivel <= jaPremiado) {
      return null;
    }
    const moedas = (nivel - jaPremiado) * MOEDAS_POR_NIVEL;
    salvarDados(CHAVE_NIVEL_PREMIADO, nivel);
    await this.ganharMoedas(moedas);
    return { nivel, moedas };
  }
}

export default new ProgressoService();
