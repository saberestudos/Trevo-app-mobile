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

// Presente de boas-vindas para quem chega na Home pela primeira vez.
export const MOEDAS_BOAS_VINDAS = 50;

const TEMPO_DE_RESPOSTA_SIMULADO = 500;

class ProgressoService {
  buscar() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const ganhas = lerDados(CHAVE_MOEDAS_GANHAS, 0);
        const gastas = lerDados(CHAVE_MOEDAS_GASTAS, 0);
        resolve(
          new Progresso({
            ...progressoMock,
            moedas: Math.max(progressoMock.moedas + ganhas - gastas, 0),
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

  // Dá o presente de boas-vindas uma única vez.
  // Devolve true se deu agora (para a tela mostrar o parabéns).
  receberBonusBoasVindas() {
    if (lerDados(CHAVE_BONUS_BOAS_VINDAS, false)) {
      return Promise.resolve(false);
    }
    salvarDados(CHAVE_BONUS_BOAS_VINDAS, true);
    return this.ganharMoedas(MOEDAS_BOAS_VINDAS).then(() => true);
  }
}

export default new ProgressoService();
