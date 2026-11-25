// Estilos da tela de Troféus, com as medidas do protótipo (tela de 402 x 874).
import { StyleSheet } from 'react-native';

const estilos = StyleSheet.create({
  cabecalho: {
    marginTop: 30,
  },
  voltar: {
    position: 'absolute',
    top: 15,
    left: 15,
    zIndex: 1,
  },
  grade: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 51,
    paddingHorizontal: 34,
    rowGap: 17,
  },
  espaco: {
    width: '33.33%',
    height: 111,
    alignItems: 'center',
    justifyContent: 'center',
  },
  trofeu: {
    height: 92,
  },
});

export default estilos;
