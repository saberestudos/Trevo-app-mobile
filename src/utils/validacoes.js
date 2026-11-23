// Regras de validação dos formulários, separadas das telas.
const FORMATO_EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function campoVazio(valor) {
  return valor.trim() === '';
}

export function emailValido(valor) {
  return FORMATO_EMAIL.test(valor.trim());
}

// Devolve um objeto com a mensagem de erro de cada campo.
// Objeto vazio significa que o formulário está válido.
export function validarLogin(identificador, senha) {
  const erros = {};

  if (campoVazio(identificador)) {
    erros.identificador = 'Informe seu e-mail ou usuário.';
  } else if (identificador.includes('@') && !emailValido(identificador)) {
    erros.identificador = 'Informe um e-mail válido.';
  }

  if (campoVazio(senha)) {
    erros.senha = 'Informe sua senha.';
  }

  return erros;
}
