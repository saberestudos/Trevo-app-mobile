// Estilos da Trilha do Saber, com as medidas do protótipo (tela de 402 x 874).
// O cabeçalho segue o mesmo estilo do quiz.
import { StyleSheet } from 'react-native';

import { cores } from '../../theme/cores';
import { familias, fonte, fonteQuiz } from '../../theme/fontes';
import { sombraPadrao } from '../../theme/sombras';

const estilos = StyleSheet.create({
  conteudo: {
    paddingTop: 0,
    paddingHorizontal: 0,
    paddingBottom: 24,
  },
  cabecalho: {
    height: 167,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 20,
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
    backgroundColor: cores.quizCabecalho,
    ...sombraPadrao,
  },
  voltar: {
    position: 'absolute',
    left: 9,
    top: 100,
  },
  subtitulo: {
    marginTop: 6,
    ...fonte(familias.regular, 14),
    color: cores.fundo,
  },
  lista: {
    alignItems: 'center',
    gap: 8,
    marginTop: 19,
  },
  cartao: {
    width: 288,
    paddingTop: 10,
    paddingHorizontal: 16,
    paddingBottom: 18,
    borderRadius: 14,
    backgroundColor: cores.cartaoEscuro,
    ...sombraPadrao,
  },
  titulo: {
    ...fonteQuiz(32),
    color: cores.fundo,
    textAlign: 'center',
  },
  texto: {
    marginTop: 10,
    ...fonte(familias.regular, 14),
    color: cores.fundo,
  },
  botao: {
    alignSelf: 'center',
    width: 255,
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    marginTop: 16,
    paddingTop: 4,
    borderRadius: 14,
    backgroundColor: cores.quizEscuro,
    ...sombraPadrao,
  },
});

export default estilos;
