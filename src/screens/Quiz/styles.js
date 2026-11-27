// Estilos do Quiz, com as medidas do protótipo (tela de 402 x 874).
import { StyleSheet } from 'react-native';

import { cores } from '../../theme/cores';
import { familias, fonte, fonteQuiz } from '../../theme/fontes';
import { sombraPadrao } from '../../theme/sombras';

const estilos = StyleSheet.create({
  // O quiz tem cabeçalho próprio, de ponta a ponta, sem a barra do topo.
  conteudo: {
    paddingTop: 0,
    paddingHorizontal: 0,
    paddingBottom: 24,
  },
  cabecalho: {
    height: 199,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 22,
    backgroundColor: cores.quizCabecalho,
  },
  voltar: {
    position: 'absolute',
    left: 9,
    top: 100,
  },
  subtitulo: {
    marginTop: 2,
    ...fonte(familias.regular, 36),
    color: cores.fundo,
  },
  vidas: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 6,
    marginTop: 4,
  },
  coracao: {
    width: 25,
    height: 25,
  },
  cartao: {
    alignSelf: 'center',
    width: 307,
    minHeight: 456,
    alignItems: 'center',
    marginTop: 7,
    paddingTop: 18,
    paddingHorizontal: 13,
    paddingBottom: 24,
    borderRadius: 10,
    backgroundColor: cores.fundo,
  },
  pergunta: {
    minHeight: 96,
    ...fonteQuiz(40),
    color: cores.quizCabecalho,
    textAlign: 'center',
  },
  alternativas: {
    gap: 19,
    marginTop: 12,
  },
  alternativa: {
    width: 255,
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingLeft: 10,
    paddingRight: 8,
    borderRadius: 10,
    backgroundColor: cores.botaoQuiz,
    ...sombraPadrao,
  },
  alternativaCerta: {
    backgroundColor: cores.quizCerto,
  },
  alternativaErrada: {
    backgroundColor: cores.quizErrado,
  },
  circulo: {
    width: 49,
    height: 49,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    backgroundColor: cores.quizEscuro,
  },
  letra: {
    marginTop: 4,
    ...fonteQuiz(40),
    color: cores.fundo,
  },
  textoAlternativa: {
    flex: 1,
    ...fonteQuiz(20),
    color: cores.fundo,
  },
  textoAlternativaLongo: {
    ...fonteQuiz(16),
  },
  botao: {
    alignSelf: 'center',
    width: 255,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
    borderRadius: 10,
    backgroundColor: cores.quizEscuro,
    ...sombraPadrao,
  },
  textoBotao: {
    marginTop: 3,
    ...fonteQuiz(36),
    color: cores.fundo,
  },
});

export default estilos;
