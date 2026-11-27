// Progresso simulado, usado enquanto o backend não existe.
// Representa quem acabou de se cadastrar: tudo começa do zero
// (na primeira vez na Home, a pessoa ganha 50 moedas de boas-vindas).
// Para testar outros valores na Home, mude os números aqui.
export const progressoMock = {
  moedas: 0,
  trofeus: 0,
  experiencia: 0,
  missoesConcluidas: 0,
  posicaoRanking: null,
  amigos: 0,
  ativos: 0,
  inicioSemApostar: new Date().toISOString(),
};
