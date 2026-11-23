// Model que representa o usuário logado no TREVO.
// A senha nunca fica guardada no objeto do usuário.
export default class Usuario {
  constructor({ id, nome, email, nomeUsuario }) {
    this.id = id;
    this.nome = nome;
    this.email = email;
    this.nomeUsuario = nomeUsuario;
  }
}
