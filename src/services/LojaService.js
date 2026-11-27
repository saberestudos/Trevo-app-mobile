// Serviço da Loja do Avatar: compra de itens com moedas.
// Quando o backend existir, a compra passa a ser uma chamada à API.
import { chaveDoItem } from '../catalogos/loja';
import AvatarService from './AvatarService';
import ProgressoService from './ProgressoService';

class LojaService {
  // Devolve o novo progresso (com o saldo atualizado) e a lista de comprados.
  async comprar(item) {
    const progresso = await ProgressoService.buscar();
    if (progresso.moedas < item.preco) {
      throw new Error(
        `Faltam ${item.preco - progresso.moedas} moedas. Faça missões e o quiz para ganhar mais.`,
      );
    }

    const novoProgresso = await ProgressoService.gastarMoedas(item.preco);
    const comprados = await AvatarService.adicionarComprado(
      chaveDoItem(item.categoria, item.id),
    );
    return { progresso: novoProgresso, comprados };
  }
}

export default new LojaService();
