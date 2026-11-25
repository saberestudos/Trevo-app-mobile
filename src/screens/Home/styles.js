// Estilos da Home, com as medidas do protótipo (tela de 402 x 874).
import { StyleSheet } from 'react-native';

import { cores } from '../../theme/cores';
import { fonteDestaque } from '../../theme/fontes';

const estilos = StyleSheet.create({
  tela: {
    flex: 1,
  },
  conteudo: {
    flex: 1,
    paddingTop: 65,
    paddingHorizontal: 16,
  },
  topo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  engrenagem: {
    width: 40,
    height: 40,
    margin: 2,
  },
  cartaoNivel: {
    height: 175,
    marginTop: 9,
    paddingTop: 14,
    paddingHorizontal: 20,
    borderRadius: 10,
    backgroundColor: cores.primaria,
  },
  linhaNiveis: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 4,
    marginBottom: 1,
  },
  nivel: {
    ...fonteDestaque(20),
    color: cores.fundo,
  },
  meio: {
    flex: 1,
  },
  avatar: {
    position: 'absolute',
    top: 2,
    left: '44.3%',
    width: 191,
    height: 475,
  },
  rotuloDias: {
    marginTop: 26,
    ...fonteDestaque(24),
    color: cores.fundo,
  },
  caixaDias: {
    width: 141,
    height: 102,
    marginTop: 4,
    paddingTop: 8,
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 10,
    borderColor: cores.fundo,
    backgroundColor: cores.primaria,
  },
  numeroDias: {
    ...fonteDestaque(96),
    color: cores.fundo,
  },
  botaoInvestimentos: {
    alignSelf: 'flex-start',
    marginTop: 19,
    marginLeft: -3,
  },
  investimentos: {
    width: 140,
    height: 140,
  },
  botaoMissoes: {
    alignSelf: 'flex-start',
    marginTop: -1,
    marginLeft: -18,
  },
  missoes: {
    width: 169,
    height: 169,
  },
});

export default estilos;
