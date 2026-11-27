// Estilos do chat com a Sofia, com as medidas do protótipo (tela de 402 x 874).
import { StyleSheet } from 'react-native';

import { cores } from '../../theme/cores';
import { familias, fonte } from '../../theme/fontes';
import { sombraPadrao } from '../../theme/sombras';

const estilos = StyleSheet.create({
  tela: {
    flex: 1,
  },
  cabecalho: {
    height: 167,
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 6,
    paddingLeft: 9,
    paddingBottom: 16,
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
    backgroundColor: cores.quizCabecalho,
    ...sombraPadrao,
  },
  foto: {
    width: 76,
    height: 76,
    borderRadius: 38,
  },
  status: {
    ...fonte(familias.regular, 18),
    color: cores.fundo,
  },
  corpo: {
    flex: 1,
  },
  lista: {
    gap: 10,
    paddingTop: 20,
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  balao: {
    maxWidth: 274,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 14,
  },
  // Sofia à esquerda (verde); a pessoa à direita (branco).
  balaoSofia: {
    alignSelf: 'flex-start',
    borderTopLeftRadius: 4,
    backgroundColor: cores.balaoSofia,
  },
  balaoPessoa: {
    alignSelf: 'flex-end',
    borderTopRightRadius: 4,
    backgroundColor: cores.fundo,
  },
  textoSofia: {
    ...fonte(familias.regular, 16),
    color: cores.fundo,
  },
  textoPessoa: {
    ...fonte(familias.regular, 16),
    color: cores.texto,
  },
  linhaEnvio: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  campo: {
    flex: 1,
    height: 48,
    paddingHorizontal: 14,
    borderRadius: 10,
    backgroundColor: cores.fundo,
    ...fonte(familias.regular, 16),
    color: cores.texto,
    outlineStyle: 'none',
  },
  enviar: {
    width: 57,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: cores.botaoEnviar,
  },
  enviarApagado: {
    opacity: 0.6,
  },
});

export default estilos;
