// Estilos da tela Minha Conta, com as medidas do protótipo (tela de 402 x 874).
// As posições da área do avatar são contadas a partir do canto da área (x 16, y 199).
import { StyleSheet } from 'react-native';

import { cores } from '../../theme/cores';
import { sombraPadrao } from '../../theme/sombras';

const estilos = StyleSheet.create({
  cabecalho: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 45,
    paddingLeft: 15,
  },
  titulo: {
    marginLeft: 14,
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
  vitrine: {
    position: 'absolute',
    left: 172,
    top: 72,
    width: 192,
    height: 236,
  },
  tituloPersonalizar: {
    position: 'absolute',
    left: 166,
    top: 0,
    width: 204,
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
