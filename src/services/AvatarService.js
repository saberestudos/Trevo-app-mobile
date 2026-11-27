// Serviço do avatar: o visual (o que ele está vestindo) e os itens comprados na loja.
// Hoje guarda na memória (some ao recarregar a página);
// quando o backend existir, os métodos passam a chamar a API.
import { visualAvatarMock } from '../mocks/avatar';

class AvatarService {
  constructor() {
    this.visual = { ...visualAvatarMock };
    this.comprados = [];
  }

  buscar() {
    return Promise.resolve({ ...this.visual });
  }

  salvar(visual) {
    this.visual = { ...visual };
    return Promise.resolve({ ...this.visual });
  }

  // Chaves dos itens comprados (ex.: "chapeu:gorro-natal").
  buscarComprados() {
    return Promise.resolve([...this.comprados]);
  }

  adicionarComprado(chave) {
    if (!this.comprados.includes(chave)) {
      this.comprados.push(chave);
    }
    return Promise.resolve([...this.comprados]);
  }
}

export default new AvatarService();
