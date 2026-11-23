// Serviço de autenticação do TREVO.
// Hoje confere os dados no mock; quando o backend existir, só o método login
// muda para chamar a API, e as telas continuam iguais.
import Usuario from '../models/Usuario';
import { usuariosMock } from '../mocks/usuarios';

const TEMPO_DE_RESPOSTA_SIMULADO = 800;

class AuthService {
  login(identificador, senha) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const identificadorNormalizado = identificador.trim().toLowerCase();

        const encontrado = usuariosMock.find(
          (usuario) =>
            (usuario.email === identificadorNormalizado ||
              usuario.nomeUsuario === identificadorNormalizado) &&
            usuario.senha === senha,
        );

        if (!encontrado) {
          reject(new Error('E-mail, usuário ou senha incorretos.'));
          return;
        }

        resolve(new Usuario(encontrado));
      }, TEMPO_DE_RESPOSTA_SIMULADO);
    });
  }
}

export default new AuthService();
