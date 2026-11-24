// Model com as respostas do onboarding (RF 04):
// dias da semana em que a pessoa apostava, horários e média de vezes por dia.
export default class RespostaOnboarding {
  constructor({ diasDaSemana, horarios, vezesPorDia }) {
    this.diasDaSemana = diasDaSemana;
    this.horarios = horarios;
    this.vezesPorDia = vezesPorDia;
  }
}
