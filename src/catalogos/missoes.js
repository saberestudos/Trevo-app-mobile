// Missões diárias, na ordem do protótipo.
// "recompensa" diz o que a pessoa recebe ao concluir (troféus ou moedas).
// Missão "automatica" só é concluída pelo próprio app (o quiz, ao responder).
export const MISSOES_DIARIAS = [
  {
    id: 'interagir',
    texto: 'INTERAJA COM OUTRO JOGADOR',
    recompensa: { tipo: 'trofeus', quantidade: 30 },
  },
  {
    id: 'quiz',
    texto: 'JOGUE O QUIZ',
    automatica: true,
    recompensa: { tipo: 'trofeus', quantidade: 20 },
  },
  {
    id: 'caminhar',
    texto: 'CAMINHE POR 10 MINUTOS',
    recompensa: { tipo: 'moedas', quantidade: 55 },
  },
  {
    id: 'sem-apostas',
    texto: 'FIQUE 2 HORAS SEM ACESSAR\nAPPS DE APOSTA',
    recompensa: { tipo: 'trofeus', quantidade: 30 },
  },
];

// Experiência ganha por missão concluída (provisório: o grupo ainda vai definir).
export const EXPERIENCIA_POR_MISSAO = 10;
