// Serviço do avatar: o visual (o que ele está vestindo) e os itens comprados na loja.
// Fica guardado no navegador, para não sumir ao recarregar a página;
// quando o backend existir, os métodos passam a chamar a API.
import { visualAvatarMock } from '../mocks/avatar';
import { lerDados, salvarDados } from '../utils/armazenamento';

const CHAVE_VISUAL = 'trevo:visualAvatar';
const CHAVE_COMPRADOS = 'trevo:itensComprados';

class AvatarService {
  constructor() {
    this.visual = { ...visualAvatarMock, ...lerDados(CHAVE_VISUAL, {}) };
    this.comprados = lerDados(CHAVE_COMPRADOS, []);
  }

  buscar() {
    return Promise.resolve({ ...this.visual });
  }

  salvar(visual) {
    this.visual = { ...visual };
    salvarDados(CHAVE_VISUAL, this.visual);
    return Promise.resolve({ ...this.visual });
  }

  // Chaves dos itens comprados (ex.: "chapeu:gorro-natal").
  buscarComprados() {
    return Promise.resolve([...this.comprados]);
  }

  adicionarComprado(chave) {
    if (!this.comprados.includes(chave)) {
      this.comprados.push(chave);
      salvarDados(CHAVE_COMPRADOS, this.comprados);
    }
    return Promise.resolve([...this.comprados]);
  }
}

export default new AvatarService();
