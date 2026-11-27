// Estilos da Loja do Avatar, com as medidas do protótipo (tela de 402 x 874).
import { StyleSheet } from 'react-native';

import { cores } from '../../theme/cores';
import { sombraPadrao } from '../../theme/sombras';

const TAMANHO_CARTAO = 133;

const estilos = StyleSheet.create({
  cabecalho: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginTop: 40,
    paddingLeft: 10,
  },
  titulo: {
    marginTop: 4,
  },
  // 2 colunas de 133 com 15 entre elas (2 x 133 + 15 = 281), centralizadas
  // como no protótipo; um item sozinho na última linha fica à esquerda.
  grade: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignSelf: 'center',
    width: 2 * TAMANHO_CARTAO + 15,
    columnGap: 15,
    rowGap: 12,
    marginTop: 14,
    paddingBottom: 20,
  },
  cartao: {
    width: TAMANHO_CARTAO,
    height: TAMANHO_CARTAO,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: cores.fundo,
    ...sombraPadrao,
  },
  imagem: {
    width: 100,
    height: 100,
  },
  preco: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
    height: 28,
    marginTop: 6,
  },
  moeda: {
    width: 26,
    height: 26,
  },
});

export default estilos;
