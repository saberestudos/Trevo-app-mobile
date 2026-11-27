// Perguntas do quiz de educação financeira.
// "correta" é a posição da alternativa certa (0 = A, 1 = B, 2 = C, 3 = D).
export const PERGUNTAS_QUIZ = [
  {
    pergunta: 'O que é educação financeira?',
    alternativas: [
      'Saber como gastar todo o dinheiro que recebe',
      'Aprender a usar o dinheiro com responsabilidade e planejamento',
      'Deixar o dinheiro guardado em casa',
      'Investir todo o dinheiro em criptomoedas',
    ],
    correta: 1,
  },
  {
    pergunta: 'Nas apostas online, quem sempre ganha?',
    alternativas: [
      'Quem aposta todo dia',
      'Quem aposta valores altos',
      'A casa de apostas',
      'Quem tem sorte',
    ],
    correta: 2,
  },
  {
    pergunta: 'O que é uma reserva de emergência?',
    alternativas: [
      'Dinheiro guardado para imprevistos',
      'Dinheiro para apostar no fim de semana',
      'Um empréstimo do banco',
      'O limite do cartão de crédito',
    ],
    correta: 0,
  },
  {
    pergunta: 'Qual é uma boa atitude quando bate a vontade de apostar?',
    alternativas: [
      'Apostar só um pouquinho',
      'Pedir dinheiro emprestado',
      'Esconder de todo mundo',
      'Conversar com alguém de confiança',
    ],
    correta: 3,
  },
  {
    pergunta: 'Para que serve um orçamento mensal?',
    alternativas: [
      'Gastar sem pensar',
      'Planejar quanto entra e quanto sai',
      'Saber quanto dá para apostar',
      'Esconder as dívidas',
    ],
    correta: 1,
  },
];

// Pontos de experiência por resposta certa (somam na barra de nível da Home).
export const PONTOS_POR_ACERTO = 10;

// Vidas por dia; cada erro gasta uma.
export const VIDAS_POR_DIA = 4;
