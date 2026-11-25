// Serviço do visual do avatar. Hoje guarda na memória (some ao recarregar a página);
// quando o backend existir, buscar e salvar passam a chamar a API.
import { visualAvatarMock } from '../mocks/avatar';

class AvatarService {
  constructor() {
    this.visual = { ...visualAvatarMock };
  }

  buscar() {
    return Promise.resolve({ ...this.visual });
  }

  salvar(visual) {
    this.visual = { ...visual };
    return Promise.resolve({ ...this.visual });
  }
}

export default new AvatarService();
