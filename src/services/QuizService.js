// Serviço do quiz: vidas do dia, pontos por acerto e conclusão da missão "Jogue o quiz".
// Fica guardado no navegador; quando o backend existir, os métodos chamam a API.
import { PONTOS_POR_ACERTO, VIDAS_POR_DIA } from '../catalogos/perguntasQuiz';
import { lerDados, salvarDados } from '../utils/armazenamento';
import MissaoService from './MissaoService';
import ProgressoService from './ProgressoService';

function chaveDasVidas() {
  const hoje = new Date().toISOString().slice(0, 10);
  return `trevo:vidasQuiz:${hoje}`;
}

class QuizService {
  // Vidas que ainda restam hoje (todo dia recomeça com 4).
  buscarVidas() {
    return Promise.resolve(lerDados(chaveDasVidas(), VIDAS_POR_DIA));
  }

  perderVida() {
    const vidas = Math.max(lerDados(chaveDasVidas(), VIDAS_POR_DIA) - 1, 0);
    salvarDados(chaveDasVidas(), vidas);
    return Promise.resolve(vidas);
  }

  // Os pontos só valem na primeira vez do dia (antes de a missão ficar feita),
  // para ninguém subir de nível repetindo o mesmo quiz.
  async valePontos() {
    const missoes = await MissaoService.listar();
    return !missoes.find((missao) => missao.id === 'quiz').feita;
  }

  registrarAcerto() {
    return ProgressoService.ganharExperiencia(PONTOS_POR_ACERTO);
  }

  // Ao terminar o quiz, a missão "Jogue o quiz" fica feita.
  concluir() {
    return MissaoService.concluir('quiz');
  }
}

export default new QuizService();
