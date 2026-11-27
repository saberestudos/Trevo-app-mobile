// Respostas da Sofia, o chatbot do TREVO.
// Cada assunto tem palavras-chave e uma resposta. A Sofia procura as palavras
// na mensagem da pessoa e responde com o assunto que mais combinar.
// Não é uma IA de verdade: é um chatbot simples, que funciona sem internet.

export const BOAS_VINDAS =
  'Oi! Eu sou a Sofia, sua mentora digital em educação financeira. Estou aqui pra te ajudar a sair do ciclo das apostas, passo a passo. Sobre o que você quer conversar?';

// Sugestões que aparecem como botões, para a pessoa não precisar digitar.
export const SUGESTOES = [
  'Estou com vontade de apostar',
  'Como montar um orçamento?',
  'O que é reserva de emergência?',
  'Tenho dívidas',
];

export const ASSUNTOS = [
  {
    id: 'vontade',
    palavras: [
      'vontade',
      'apostar',
      'aposta',
      'bet',
      'jogar',
      'cassino',
      'tigrinho',
      'recaida',
    ],
    resposta:
      'Que bom que você veio falar comigo em vez de apostar. Respira fundo: a vontade passa em alguns minutos. Tenta sair de perto do celular, beber um copo de água ou fazer uma missão do dia. Se precisar, converse com alguém de confiança ou ligue para o CVV no 188.',
  },
  {
    id: 'orcamento',
    palavras: [
      'orcamento',
      'orçamento',
      'organizar',
      'gastos',
      'planilha',
      'salario',
      'salário',
    ],
    resposta:
      'Um orçamento compara o que você ganha com o que você gasta. Comece anotando tudo o que entra e sai no mês. Depois separe: contas fixas, gastos do dia a dia e quanto dá para guardar.',
  },
  {
    id: 'reserva',
    palavras: [
      'reserva',
      'emergencia',
      'emergência',
      'imprevisto',
      'guardar',
      'poupar',
      'economizar',
    ],
    resposta:
      'A reserva de emergência é um dinheiro guardado para imprevistos, como um conserto ou um mês sem renda. Comece com pouco: guardar um valor pequeno todo mês já faz diferença.',
  },
  {
    id: 'dividas',
    palavras: [
      'divida',
      'dívida',
      'devendo',
      'devo',
      'emprestimo',
      'empréstimo',
      'cartao',
      'cartão',
      'fatura',
    ],
    resposta:
      'Com dívidas, o primeiro passo é listar todas: quanto deve, para quem e os juros. Priorize as de juros mais altos, como o rotativo do cartão e o cheque especial, e evite fazer dívida nova para pagar aposta.',
  },
  {
    id: 'investir',
    palavras: [
      'investir',
      'investimento',
      'render',
      'rendimento',
      'juros',
      'poupanca',
      'poupança',
    ],
    resposta:
      'Antes de investir, monte sua reserva de emergência. Depois, procure opções seguras e fáceis de entender. Lembra: aposta não é investimento, porque a casa de apostas sempre leva vantagem.',
  },
  {
    id: 'saudacao',
    palavras: [
      'oi',
      'ola',
      'olá',
      'bom dia',
      'boa tarde',
      'boa noite',
      'eai',
      'e ai',
    ],
    resposta: 'Oi! Que bom te ver por aqui. Como posso te ajudar hoje?',
  },
  {
    id: 'agradecimento',
    palavras: ['obrigado', 'obrigada', 'valeu', 'brigado'],
    resposta:
      'Por nada! Estou sempre aqui. Cada dia sem apostar é uma conquista.',
  },
];

export const RESPOSTA_PADRAO =
  'Ainda estou aprendendo e não entendi bem. Posso te ajudar com vontade de apostar, orçamento, reserva de emergência, dívidas ou investimentos.';
