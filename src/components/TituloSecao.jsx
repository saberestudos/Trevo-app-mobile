// Título de seção das telas de jogo: tracinho amarelo, título e uma linha fina até o fim.
import { StyleSheet, View } from 'react-native';

import TextoDestaque from './TextoDestaque';
import { cores } from '../theme/cores';

export default function TituloSecao({ texto, tamanho = 30, estilo }) {
  return (
    <View style={[estilos.linha, estilo]}>
      <View style={estilos.tracinho} />
      <TextoDestaque texto={texto} tamanho={tamanho} estilo={estilos.texto} />
      <View style={estilos.divisor} />
    </View>
  );
}

const estilos = StyleSheet.create({
  linha: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  tracinho: {
    width: 5,
    height: 26,
    borderRadius: 3,
    backgroundColor: cores.destaqueAmarelo,
  },
  texto: {
    marginTop: 4,
  },
  divisor: {
    flex: 1,
    height: 2,
    borderRadius: 1,
    backgroundColor: cores.linhaSecao,
  },
});
