// Regras de validação dos formulários, separadas das telas.
// Cada função devolve um objeto com a mensagem de erro de cada campo;
// objeto vazio significa que está tudo certo.
const FORMATO_EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const QUANTIDADE_DIGITOS_CODIGO = 5;

export function campoVazio(valor) {
  return valor.trim() === '';
}

export function emailValido(valor) {
  return FORMATO_EMAIL.test(valor.trim());
}

// Por enquanto o app aceita qualquer e-mail, desde que seja do Gmail.
const DOMINIO_ACEITO = '@gmail.com';
const MENSAGEM_DOMINIO = `Use um e-mail ${DOMINIO_ACEITO}.`;

export function emailGmail(valor) {
  const email = valor.trim().toLowerCase();
  return emailValido(email) && email.endsWith(DOMINIO_ACEITO);
}

function validarIdentificador(identificador) {
  if (campoVazio(identificador)) {
    return 'Informe seu e-mail.';
  }
  if (!emailGmail(identificador)) {
    return MENSAGEM_DOMINIO;
  }
  return null;
}

export function validarLogin(identificador, senha) {
  const erros = {};
  const erroIdentificador = validarIdentificador(identificador);

  if (erroIdentificador) {
    erros.identificador = erroIdentificador;
  }
  if (campoVazio(senha)) {
    erros.senha = 'Informe sua senha.';
  }

  return erros;
}

export function validarCadastro({
  identificador,
  senha,
  confirmacaoSenha,
  aceitouTermos,
}) {
  const erros = {};
  const erroIdentificador = validarIdentificador(identificador);

  if (erroIdentificador) {
    erros.identificador = erroIdentificador;
  }
  if (campoVazio(senha)) {
    erros.senha = 'Informe sua senha.';
  }
  if (campoVazio(confirmacaoSenha)) {
    erros.confirmacaoSenha = 'Confirme sua senha.';
  } else if (senha !== confirmacaoSenha) {
    erros.confirmacaoSenha = 'As senhas não coincidem.';
  }
  if (!aceitouTermos) {
    erros.termos = 'Aceite os termos e condições para continuar.';
  }

  return erros;
}

export function validarEmailRecuperacao(email) {
  if (campoVazio(email)) {
    return { email: 'Informe seu e-mail.' };
  }
  if (!emailGmail(email)) {
    return { email: MENSAGEM_DOMINIO };
  }
  return {};
}

export function validarCodigo(digitos) {
  const codigo = digitos.join('');

  if (codigo.length < QUANTIDADE_DIGITOS_CODIGO) {
    return {
      codigo: `Digite os ${QUANTIDADE_DIGITOS_CODIGO} dígitos do código.`,
    };
  }
  return {};
}

// Cada faixa de horário precisa estar vazia ou completa (início e fim).
export function validarHorarios(faixas) {
  const faixaIncompleta = faixas.some(
    (faixa) => Boolean(faixa.inicio) !== Boolean(faixa.fim),
  );

  if (faixaIncompleta) {
    return { horarios: 'Selecione o horário de início e de fim.' };
  }
  return {};
}
