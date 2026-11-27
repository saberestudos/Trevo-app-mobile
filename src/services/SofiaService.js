// Serviço da Sofia: recebe a mensagem da pessoa e escolhe a resposta.
// Quando existir uma IA de verdade no backend, só este serviço muda.
import { ASSUNTOS, RESPOSTA_PADRAO } from '../catalogos/respostasSofia';

const TEMPO_DIGITANDO = 900;

// Tira acentos e deixa tudo minúsculo, para "Orçamento" e "orcamento" contarem igual.
function normalizar(texto) {
  return texto.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
}

// Uma palavra-chave conta se aparecer como palavra inteira na mensagem
// (assim "oi" não conta dentro de "foi"). Palavras longas também contam
// pelo começo: "aposta" conta em "apostando".
function temPalavra(palavras, texto, chave) {
  const alvo = normalizar(chave);
  if (alvo.includes(' ')) return texto.includes(` ${alvo} `);
  return palavras.some(
    (palavra) =>
      palavra === alvo || (alvo.length >= 5 && palavra.startsWith(alvo)),
  );
}

// Conta quantas palavras-chave de cada assunto aparecem e fica com o maior.
export function escolherResposta(mensagem) {
  const texto = ` ${normalizar(mensagem).replace(/[^a-z0-9 ]/g, ' ')} `;
  const palavras = texto.split(/\s+/).filter(Boolean);
  let melhor = null;
  let maiorPontuacao = 0;

  ASSUNTOS.forEach((assunto) => {
    const pontuacao = assunto.palavras.filter((chave) =>
      temPalavra(palavras, texto, chave),
    ).length;
    if (pontuacao > maiorPontuacao) {
      melhor = assunto;
      maiorPontuacao = pontuacao;
    }
  });

  return melhor ? melhor.resposta : RESPOSTA_PADRAO;
}

class SofiaService {
  // Devolve a resposta depois de um tempinho, como se a Sofia estivesse digitando.
  responder(mensagem) {
    return new Promise((resolve) => {
      setTimeout(() => resolve(escolherResposta(mensagem)), TEMPO_DIGITANDO);
    });
  }
}

export default new SofiaService();
