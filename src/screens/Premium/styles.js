// Estilos da tela Pacote Premium, com as medidas do protótipo (tela de 402 x 874).
import { StyleSheet } from 'react-native';

import { cores } from '../../theme/cores';
import { familias, fonte } from '../../theme/fontes';
import { sombraPadrao } from '../../theme/sombras';

const LARGURA_LISTA = 288;
const LARGURA_CARTAO = 326;
const TAMANHO_SELO = 72;

const estilos = StyleSheet.create({
  voltar: {
    marginTop: 20,
    marginLeft: 10,
  },
  cartaoTitulo: {
    alignSelf: 'center',
    width: LARGURA_CARTAO,
    alignItems: 'center',
    marginTop: 44,
    paddingTop: 44,
    paddingHorizontal: 16,
    paddingBottom: 16,
    borderRadius: 18,
    backgroundColor: cores.fundo,
    ...sombraPadrao,
  },
  // Selo redondo dourado, metade para fora do cartão.
  selo: {
    position: 'absolute',
    top: -TAMANHO_SELO / 2,
    left: (LARGURA_CARTAO - TAMANHO_SELO) / 2,
    width: TAMANHO_SELO,
    height: TAMANHO_SELO,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 4,
    borderRadius: TAMANHO_SELO / 2,
    borderColor: cores.fundo,
    ...sombraPadrao,
  },
  // Brilhinhos dos dois lados do selo.
  brilho: {
    position: 'absolute',
    top: -26,
  },
  brilhoEsquerdo: {
    left: LARGURA_CARTAO / 2 - 64,
  },
  brilhoDireito: {
    left: LARGURA_CARTAO / 2 + 48,
  },
  frase: {
    marginTop: 4,
    ...fonte(familias.media, 14),
    color: cores.textoDescricao,
    textAlign: 'center',
  },
  caixaPreco: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 6,
    marginTop: 10,
    paddingTop: 6,
    paddingHorizontal: 14,
    paddingBottom: 4,
    borderRadius: 12,
    backgroundColor: cores.fundoIlustracao,
  },
  porMes: {
    marginBottom: 4,
    ...fonte(familias.media, 15),
    color: cores.textoDescricao,
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
