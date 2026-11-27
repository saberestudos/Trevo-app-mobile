// Estilos da tela Minha Conta, com as medidas do protótipo (tela de 402 x 874).
// As posições da área do avatar são contadas a partir do canto da área (x 16, y 199).
import { StyleSheet } from 'react-native';

import { cores } from '../../theme/cores';
import { sombraPadrao } from '../../theme/sombras';

// Largura do conteúdo (do quadro do avatar até a vitrine); o botão e as
// estatísticas usam a mesma largura para ficarem alinhados.
const LARGURA_CONTEUDO = 359;
const ESPACO_CARTOES = 10;

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
    width: LARGURA_CONTEUDO,
    height: 60,
    marginTop: 13,
    marginLeft: 5,
    paddingLeft: 39,
    paddingTop: 5,
    borderRadius: 10,
    backgroundColor: cores.botaoAzul,
    ...sombraPadrao,
  },
  iconeAmigos: {
    position: 'absolute',
    left: 285,
    top: 9,
    width: 45,
    height: 41,
  },
  tituloEstatisticas: {
    marginTop: 19,
  },
  linhaEstatisticas: {
    flexDirection: 'row',
    gap: ESPACO_CARTOES,
    width: LARGURA_CONTEUDO,
    marginTop: 8,
    marginLeft: 5,
  },
  linhaGrande: {
    marginTop: ESPACO_CARTOES,
  },
  estatistica: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    height: 60,
    borderRadius: 10,
    backgroundColor: cores.fundo,
    ...sombraPadrao,
  },
  // 3 cartões na primeira linha e 2 na segunda, ocupando a mesma largura.
  estatisticaPequena: {
    width: (LARGURA_CONTEUDO - 2 * ESPACO_CARTOES) / 3,
  },
  estatisticaGrande: {
    width: (LARGURA_CONTEUDO - ESPACO_CARTOES) / 2,
  },
  numero: {
    marginTop: 6,
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
  },
  textoDias: {
    marginTop: 4,
  },
  iconeGrafico: {
    width: 36,
    height: 31,
  },
});

export default estilos;
