// Linha divisória com texto no meio ("ou", "ou faça login com").
import { StyleSheet, Text, View } from 'react-native';

import { cores } from '../theme/cores';
import { familias, fonte } from '../theme/fontes';

export default function Divisor({ texto, espacamento, estilo }) {
  return (
    <View style={[estilos.container, estilo]}>
      <View style={estilos.linha} />
      <Text style={[estilos.texto, { marginHorizontal: espacamento }]}>
        {texto}
      </Text>
      <View style={estilos.linha} />
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  linha: {
    flex: 1,
    height: 3,
    backgroundColor: cores.divisor,
  },
  texto: {
    ...fonte(familias.media, 16),
    color: cores.textoSecundario,
  },
});
