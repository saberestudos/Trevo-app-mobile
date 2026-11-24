// Model que representa o usuário logado no TREVO.
// A senha nunca fica guardada no objeto do usuário.
export default class Usuario {
  constructor({ id, nome, email, nomeUsuario }) {
    this.id = id;
    this.nome = nome;
    this.email = email;
    this.nomeUsuario = nomeUsuario;
  }

  // Nome para mostrar na tela, montado a partir do usuário ou do e-mail.
  // Ex.: "maria.clara" ou "maria.clara@email.com" viram "Maria Clara".
  nomeDeExibicao() {
    const base = this.nomeUsuario || this.email.split('@')[0];

    return base
      .split(/[._-]+/)
      .filter(Boolean)
      .map((parte) => parte[0].toUpperCase() + parte.slice(1))
      .join(' ');
  }

  // Até duas letras iniciais do nome. Ex.: "Maria Clara" vira "MC".
  iniciais() {
    return this.nomeDeExibicao()
      .split(' ')
      .slice(0, 2)
      .map((parte) => parte[0])
      .join('')
      .toUpperCase();
  }
}
