// Perguntas do quiz de educação financeira.
// "correta" é a posição da alternativa certa (0 = A, 1 = B, 2 = C, 3 = D).
// Conceitos básicos de educação financeira, como no Caderno de Educação
// Financeira do Banco Central (orçamento, reserva, juros, inflação e crédito).
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
    pergunta: 'Para que serve um orçamento pessoal?',
    alternativas: [
      'Para gastar sem precisar anotar nada',
      'Para pedir mais limite no cartão',
      'Para comparar o que você ganha com o que você gasta',
      'Para saber quanto o banco cobra de tarifa',
    ],
    correta: 2,
  },
  {
    pergunta: 'O que é uma reserva de emergência?',
    alternativas: [
      'Dinheiro guardado para cobrir imprevistos',
      'O limite do cheque especial',
      'Um empréstimo feito no banco',
      'Dinheiro separado para as férias',
    ],
    correta: 0,
  },
  {
    pergunta: 'Nos juros compostos, os juros são calculados sobre o quê?',
    alternativas: [
      'Só sobre o valor inicial',
      'Sobre o valor inicial mais os juros já acumulados',
      'Só sobre a última parcela',
      'Sobre um valor fixo definido pelo governo',
    ],
    correta: 1,
  },
  {
    pergunta: 'O que acontece com o seu dinheiro quando a inflação sobe?',
    alternativas: [
      'Ele passa a comprar mais coisas',
      'Ele rende juros sozinho',
      'Nada muda no seu dia a dia',
      'Ele perde poder de compra',
    ],
    correta: 3,
  },
  {
    pergunta: 'Pagar só o valor mínimo da fatura do cartão faz o quê?',
    alternativas: [
      'O restante vai para o rotativo, com juros muito altos',
      'A dívida é perdoada no mês seguinte',
      'O limite do cartão aumenta',
      'Você não paga juros sobre o restante',
    ],
    correta: 0,
  },
];

// Pontos de experiência por resposta certa (somam na barra de nível da Home).
export const PONTOS_POR_ACERTO = 10;

// Vidas por dia; cada erro gasta uma.
export const VIDAS_POR_DIA = 4;
