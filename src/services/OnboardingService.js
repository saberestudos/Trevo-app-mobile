// Serviço do onboarding. Hoje guarda as respostas só na memória;
// quando o backend existir, o método salvar passa a chamar a API.
import RespostaOnboarding from '../models/RespostaOnboarding';

const TEMPO_DE_RESPOSTA_SIMULADO = 800;

class OnboardingService {
  constructor() {
    this.respostas = [];
  }

  salvar(dados) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const resposta = new RespostaOnboarding(dados);
        this.respostas.push(resposta);
        resolve(resposta);
      }, TEMPO_DE_RESPOSTA_SIMULADO);
    });
  }
}

export default new OnboardingService();
