// Estilos da tela de Opções, com as medidas do protótipo (tela de 402 x 874).
import { StyleSheet } from 'react-native';

import { cores } from '../../theme/cores';
import { fonteDestaque } from '../../theme/fontes';
import { sombraPadrao } from '../../theme/sombras';

const estilos = StyleSheet.create({
  cartao: {
    width: 331,
    height: 542,
    marginTop: 72,
    marginLeft: 20,
    borderRadius: 10,
    backgroundColor: cores.cartaoOpcoes,
    ...sombraPadrao,
  },
  botao: {
    position: 'absolute',
    left: 37.7,
    width: 254.8,
    height: 59.8,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: cores.contornoBotao,
    backgroundColor: cores.cartaoEscuro,
    ...sombraPadrao,
  },
  botaoSair: {
    top: 434,
    left: 36.6,
    backgroundColor: cores.botaoSair,
  },
  // A posição do texto conta a partir de dentro da borda (2px).
  textoBotao: {
    position: 'absolute',
    top: 11.5,
    marginLeft: -2,
    ...fonteDestaque(36),
    color: cores.fundo,
  },
  textoSair: {
    left: 98.4,
  },
  fechar: {
    position: 'absolute',
    top: -15,
    left: 299.4,
    width: 43.6,
    height: 38.4,
    borderRadius: 10,
    backgroundColor: cores.botaoSair,
  },
  textoFechar: {
    position: 'absolute',
    top: 5,
    left: 13.6,
    ...fonteDestaque(32),
    color: cores.fundo,
  },
});

export default estilos;
