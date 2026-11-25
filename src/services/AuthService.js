// Serviço de autenticação do TREVO.
// Hoje usa os dados do mock; quando o backend existir, só os métodos daqui
// mudam para chamar a API, e as telas continuam iguais.
import Usuario from '../models/Usuario';
import { usuariosMock } from '../mocks/usuarios';
import { CODIGO_RECUPERACAO_MOCK } from '../mocks/recuperacaoSenha';
import { lerDados, salvarDados } from '../utils/armazenamento';

const TEMPO_DE_RESPOSTA_SIMULADO = 800;
const CHAVE_CADASTROS = 'trevo:cadastros';

// Contas criadas no app ficam guardadas no navegador; o usuário de teste vem do mock.
const cadastros = lerDados(CHAVE_CADASTROS, []);

function todosOsUsuarios() {
  return [...usuariosMock, ...cadastros];
}

// Simula a espera de uma resposta do servidor.
function simularRequisicao(executar) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        resolve(executar());
      } catch (erro) {
        reject(erro);
      }
    }, TEMPO_DE_RESPOSTA_SIMULADO);
  });
}

function normalizar(texto) {
  return texto.trim().toLowerCase();
}

function buscarPorIdentificador(identificador) {
  const valor = normalizar(identificador);
  return todosOsUsuarios().find(
    (usuario) => usuario.email === valor || usuario.nomeUsuario === valor,
  );
}

class AuthService {
  login(identificador, senha) {
    return simularRequisicao(() => {
      const encontrado = buscarPorIdentificador(identificador);

      if (!encontrado || encontrado.senha !== senha) {
        throw new Error('E-mail, usuário ou senha incorretos.');
      }
      return new Usuario(encontrado);
    });
  }

  cadastrar(identificador, senha) {
    return simularRequisicao(() => {
      if (buscarPorIdentificador(identificador)) {
        throw new Error('Este e-mail ou usuário já está cadastrado.');
      }

      const valor = normalizar(identificador);
      const ehEmail = valor.includes('@');
      const novoUsuario = {
        id: todosOsUsuarios().length + 1,
        nome: valor,
        email: ehEmail ? valor : null,
        nomeUsuario: ehEmail ? null : valor,
        senha,
      };

      cadastros.push(novoUsuario);
      salvarDados(CHAVE_CADASTROS, cadastros);
      return new Usuario(novoUsuario);
    });
  }

  enviarCodigoRecuperacao(email) {
    return simularRequisicao(() => {
      const encontrado = todosOsUsuarios().find(
        (usuario) => usuario.email === normalizar(email),
      );

      if (!encontrado) {
        throw new Error('Não encontramos uma conta com esse e-mail.');
      }
    });
  }

  verificarCodigo(codigo) {
    return simularRequisicao(() => {
      if (codigo !== CODIGO_RECUPERACAO_MOCK) {
        throw new Error('Código inválido.');
      }
    });
  }
}

export default new AuthService();
