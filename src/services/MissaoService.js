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

// "feitas": marcadas pela pessoa. "concluidasPeloApp": cumpridas de verdade no app
// (o quiz). Missão automática só conta pela segunda lista, nunca pelo toque.
function lerEstado() {
  return {
    feitas: [],
    resgatadas: [],
    concluidasPeloApp: [],
    ...lerDados(chaveDeHoje(), {}),
  };
}

function estaFeita(missao, estado) {
  return missao.automatica
    ? estado.concluidasPeloApp.includes(missao.id)
    : estado.feitas.includes(missao.id);
}

class MissaoService {
  // Lista das missões de hoje, cada uma com "feita" e "resgatada".
  listar() {
    const estado = lerEstado();
    return Promise.resolve(
      MISSOES_DIARIAS.map((missao) => ({
        ...missao,
        feita: estaFeita(missao, estado),
        resgatada: estado.resgatadas.includes(missao.id),
      })),
    );
  }

  // Marca ou desmarca uma missão. Missão que já deu recompensa não volta atrás.
  // Missões automáticas (como o quiz) não são marcadas à mão.
  alternar(id) {
    const estado = lerEstado();
    const missao = MISSOES_DIARIAS.find((item) => item.id === id);
    if (!missao.automatica && !estado.resgatadas.includes(id)) {
      estado.feitas = estado.feitas.includes(id)
        ? estado.feitas.filter((feita) => feita !== id)
        : [...estado.feitas, id];
      salvarDados(chaveDeHoje(), estado);
    }
    return this.listar();
  }

  // Marca uma missão como cumprida pelo próprio app (ex.: o quiz, ao terminar).
  concluir(id) {
    const estado = lerEstado();
    if (!estado.concluidasPeloApp.includes(id)) {
      estado.concluidasPeloApp = [...estado.concluidasPeloApp, id];
      salvarDados(chaveDeHoje(), estado);
    }
    return this.listar();
  }

  // As recompensas do dia só são liberadas depois de responder o quiz.
  async recompensasLiberadas() {
    const missoes = await this.listar();
    return missoes.find((missao) => missao.id === 'quiz').feita;
  }

  // Entrega as recompensas das missões feitas e ainda não resgatadas.
  // Sem o quiz respondido, nada é entregue.
  async receberRecompensas() {
    if (!(await this.recompensasLiberadas())) {
      return { moedas: 0, trofeus: 0 };
    }
    const estado = lerEstado();
    const novas = MISSOES_DIARIAS.filter(
      (missao) =>
        estaFeita(missao, estado) && !estado.resgatadas.includes(missao.id),
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
