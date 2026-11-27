// Estilos da tela de Troféus, com as medidas do protótipo (tela de 402 x 874).
import { StyleSheet } from 'react-native';

import { TAMANHO_BOTAO_VOLTAR } from '../../components/BotaoVoltar';

const estilos = StyleSheet.create({
  cabecalho: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
    paddingHorizontal: 15,
  },
  titulos: {
    flex: 1,
  },
  espacoSeta: {
    width: TAMANHO_BOTAO_VOLTAR,
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
