// Serviço do progresso do usuário. Hoje devolve os dados do mock;
// quando o backend existir, o método buscar passa a chamar a API.
import Progresso from '../models/Progresso';
import { progressoMock } from '../mocks/progresso';

const TEMPO_DE_RESPOSTA_SIMULADO = 500;

class ProgressoService {
  buscar() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(new Progresso(progressoMock));
      }, TEMPO_DE_RESPOSTA_SIMULADO);
    });
  }
}

export default new ProgressoService();
