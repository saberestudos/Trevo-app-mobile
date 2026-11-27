// Serviço do progresso do usuário. Hoje devolve os dados do mock;
// quando o backend existir, o método buscar passa a chamar a API.
import Progresso from '../models/Progresso';
import { progressoMock } from '../mocks/progresso';
import { lerDados, salvarDados } from '../utils/armazenamento';

// Moedas já gastas na loja ficam guardadas no navegador,
// para o saldo não voltar ao recarregar a página.
const CHAVE_MOEDAS_GASTAS = 'trevo:moedasGastas';

const TEMPO_DE_RESPOSTA_SIMULADO = 500;

class ProgressoService {
  buscar() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const moedasGastas = lerDados(CHAVE_MOEDAS_GASTAS, 0);
        resolve(
          new Progresso({
            ...progressoMock,
            moedas: Math.max(progressoMock.moedas - moedasGastas, 0),
          }),
        );
      }, TEMPO_DE_RESPOSTA_SIMULADO);
    });
  }

  // Tira moedas do saldo (ex.: numa compra). Quem chama confere antes se há saldo.
  gastarMoedas(quantidade) {
    const moedasGastas = lerDados(CHAVE_MOEDAS_GASTAS, 0);
    salvarDados(CHAVE_MOEDAS_GASTAS, moedasGastas + quantidade);
    return this.buscar();
  }
}

export default new ProgressoService();
