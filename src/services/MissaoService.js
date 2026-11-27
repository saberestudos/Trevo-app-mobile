// Serviço das missões diárias: quais foram feitas hoje e quais já deram recompensa.
// Fica guardado no navegador, com uma chave por dia (no dia seguinte, recomeça).
// Quando o backend existir, os métodos passam a chamar a API.
import { EXPERIENCIA_POR_MISSAO, MISSOES_DIARIAS } from '../catalogos/missoes';
import { lerDados, salvarDados } from '../utils/armazenamento';
import ProgressoService from './ProgressoService';

function chaveDeHoje() {
  const hoje = new Date().toISOString().slice(0, 10);
  return `trevo:missoes:${hoje}`;
}

function lerEstado() {
  return lerDados(chaveDeHoje(), { feitas: [], resgatadas: [] });
}

class MissaoService {
  // Lista das missões de hoje, cada uma com "feita" e "resgatada".
  listar() {
    const { feitas, resgatadas } = lerEstado();
    return Promise.resolve(
      MISSOES_DIARIAS.map((missao) => ({
        ...missao,
        feita: feitas.includes(missao.id),
        resgatada: resgatadas.includes(missao.id),
      })),
    );
  }

  // Marca ou desmarca uma missão. Missão que já deu recompensa não volta atrás.
  alternar(id) {
    const estado = lerEstado();
    if (!estado.resgatadas.includes(id)) {
      estado.feitas = estado.feitas.includes(id)
        ? estado.feitas.filter((feita) => feita !== id)
        : [...estado.feitas, id];
      salvarDados(chaveDeHoje(), estado);
    }
    return this.listar();
  }

  // Entrega as recompensas das missões feitas e ainda não resgatadas.
  async receberRecompensas() {
    const estado = lerEstado();
    const novas = MISSOES_DIARIAS.filter(
      (missao) =>
        estado.feitas.includes(missao.id) &&
        !estado.resgatadas.includes(missao.id),
    );

    const total = { moedas: 0, trofeus: 0 };
    novas.forEach((missao) => {
      total[missao.recompensa.tipo] += missao.recompensa.quantidade;
    });

    estado.resgatadas = [...estado.resgatadas, ...novas.map((m) => m.id)];
    salvarDados(chaveDeHoje(), estado);

    await ProgressoService.registrarMissoes({
      quantidade: novas.length,
      experiencia: novas.length * EXPERIENCIA_POR_MISSAO,
      ...total,
    });
    return total;
  }
}

export default new MissaoService();
