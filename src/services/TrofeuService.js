// Serviço da coleção de troféus. Hoje devolve o mock;
// quando o backend existir, o método listar passa a chamar a API.
import Trofeu from '../models/Trofeu';
import { trofeusMock } from '../mocks/trofeus';

const TEMPO_DE_RESPOSTA_SIMULADO = 500;

class TrofeuService {
  listar() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(trofeusMock.map((dados) => new Trofeu(dados)));
      }, TEMPO_DE_RESPOSTA_SIMULADO);
    });
  }
}

export default new TrofeuService();
