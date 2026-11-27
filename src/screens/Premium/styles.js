// Estilos da tela Pacote Premium, com as medidas do protótipo (tela de 402 x 874).
import { StyleSheet } from 'react-native';

import { cores } from '../../theme/cores';
import { familias, fonte } from '../../theme/fontes';
import { sombraPadrao } from '../../theme/sombras';

const LARGURA_LISTA = 288;

const estilos = StyleSheet.create({
  voltar: {
    marginTop: 24,
    marginLeft: 10,
  },
  destaque: {
    alignItems: 'center',
    marginTop: -18,
  },
  linhaSelo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 8,
  },
  selo: {
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderRadius: 18,
    borderColor: cores.cartaoEscuro,
    transform: [{ rotate: '45deg' }],
  },
  // Desfaz o giro do selo para a coroa ficar reta.
  coroa: {
    transform: [{ rotate: '-45deg' }],
  },
  // As folhas ficam viradas para fora, como um louro.
  folhaEsquerda: {
    transform: [{ scaleX: -1 }],
  },
  folhaDireita: {},
  frase: {
    marginTop: 4,
    ...fonte(familias.media, 15),
    color: cores.textoClaro,
    textAlign: 'center',
  },
  linhaPreco: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 6,
    marginTop: 10,
  },
  porMes: {
    marginBottom: 4,
    ...fonte(familias.media, 16),
    color: cores.textoClaro,
  },
  lista: {
    alignSelf: 'center',
    width: LARGURA_LISTA,
    gap: 8,
    marginTop: 20,
  },
  beneficio: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    minHeight: 42,
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 10,
    backgroundColor: cores.cartaoEscuro,
  },
  textoBeneficio: {
    flex: 1,
    marginTop: 3,
  },
  botao: {
    alignSelf: 'center',
    width: 224,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 24,
    marginBottom: 24,
    paddingTop: 5,
    borderRadius: 10,
    backgroundColor: cores.cartaoOpcoes,
    ...sombraPadrao,
  },
});

export default estilos;
