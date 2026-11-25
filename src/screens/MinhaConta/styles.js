// Estilos da tela Minha Conta, com as medidas do protótipo (tela de 402 x 874).
// As posições da área do avatar são contadas a partir do canto da área (x 16, y 199).
import { StyleSheet } from 'react-native';

import { cores } from '../../theme/cores';
import { sombraPadrao } from '../../theme/sombras';

const ALTURA_SETA = 33;
const LARGURA_SETA = 26;

const estilos = StyleSheet.create({
  cabecalho: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 45,
    paddingLeft: 15,
  },
  titulo: {
    marginLeft: 49,
    marginTop: 3,
  },
  areaAvatar: {
    height: 308,
    marginTop: 6,
  },
  painelAvatar: {
    position: 'absolute',
    left: 5,
    top: 0,
    width: 151,
    height: 308,
    borderRadius: 10,
    backgroundColor: cores.cartaoEscuro,
    ...sombraPadrao,
  },
  avatar: {
    position: 'absolute',
    left: 14.5,
    top: 8.2,
    width: 118,
    height: 294,
  },
  chapeuNoAvatar: {
    position: 'absolute',
    left: 4,
    top: 5,
    width: 122,
    height: 83,
  },
  oculosNoAvatar: {
    position: 'absolute',
    left: 40.7,
    top: 79,
    width: 59,
    height: 24,
  },
  tituloPersonalizar: {
    position: 'absolute',
    left: 191,
    top: 0,
    width: 162,
  },
  cartaoItens: {
    position: 'absolute',
    left: 200.5,
    top: 82,
    width: 143,
    height: 164,
    alignItems: 'center',
    paddingTop: 8,
    borderRadius: 10,
    backgroundColor: cores.fundo,
    ...sombraPadrao,
  },
  abas: {
    flexDirection: 'row',
    gap: 4,
  },
  aba: {
    width: 25,
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: cores.homeFundoInicio,
    ...sombraPadrao,
  },
  abaAtiva: {
    borderWidth: 2,
    borderColor: cores.setaLaranja,
  },
  iconeAba: {
    width: 19,
    height: 15,
  },
  itemSelecionado: {
    width: 97,
    height: 66,
    marginTop: 25,
  },
  seta: {
    position: 'absolute',
    top: 147,
    width: 0,
    height: 0,
    borderTopWidth: ALTURA_SETA / 2,
    borderBottomWidth: ALTURA_SETA / 2,
    borderTopColor: 'transparent',
    borderBottomColor: 'transparent',
  },
  setaEsquerda: {
    left: 167.5,
    borderRightWidth: LARGURA_SETA,
    borderRightColor: cores.setaLaranja,
  },
  setaDireita: {
    left: 351.6,
    borderLeftWidth: LARGURA_SETA,
    borderLeftColor: cores.setaLaranja,
  },
  botaoUsar: {
    position: 'absolute',
    left: 210,
    top: 262,
    width: 119,
    height: 44,
    justifyContent: 'center',
    paddingTop: 5,
    borderRadius: 10,
    backgroundColor: cores.cartaoEscuro,
    ...sombraPadrao,
  },
  botaoAmigos: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 346,
    height: 60,
    marginTop: 13,
    marginLeft: 5,
    paddingLeft: 39,
    paddingTop: 5,
    borderRadius: 10,
    backgroundColor: cores.cartaoEscuro,
    ...sombraPadrao,
  },
  iconeAmigos: {
    position: 'absolute',
    left: 278,
    top: 9,
    width: 45,
    height: 41,
  },
  tituloEstatisticas: {
    marginTop: 19,
  },
  linhaEstatisticas: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 2,
    marginLeft: 10,
  },
  linhaGrande: {
    gap: 17,
    marginTop: 13,
    marginLeft: 0,
  },
  estatistica: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
    borderRadius: 10,
    backgroundColor: cores.fundo,
    ...sombraPadrao,
  },
  estatisticaPequena: {
    width: 112,
    paddingLeft: 12,
  },
  estatisticaGrande: {
    width: 176,
    paddingLeft: 12,
  },
  numero: {
    marginTop: 6,
  },
  numeroAfastado: {
    marginTop: 6,
    marginLeft: 8,
  },
  iconeTrofeu: {
    width: 40,
    height: 40,
  },
  iconePodio: {
    width: 43,
    height: 30,
  },
  iconeAmigo: {
    width: 40,
    height: 38,
  },
  iconeCalendario: {
    width: 35,
    height: 38,
    marginLeft: 1,
  },
  textoDias: {
    marginLeft: 8,
    marginTop: 4,
  },
  iconeGrafico: {
    width: 36,
    height: 31,
    marginLeft: -2,
    marginRight: 6,
  },
});

export default estilos;
