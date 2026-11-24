// Caixa de seleção (checkbox) com texto ao lado.
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { cores } from '../theme/cores';
import { familias, fonte } from '../theme/fontes';

export default function CaixaSelecao({ texto, marcada, aoAlternar }) {
  return (
    <Pressable
      style={estilos.container}
      onPress={aoAlternar}
      accessibilityRole="checkbox"
      accessibilityState={{ checked: marcada }}
    >
      <View style={[estilos.caixa, marcada && estilos.caixaMarcada]}>
        {marcada && <Feather name="check" size={11} color={cores.fundo} />}
      </View>
      <Text style={estilos.texto}>{texto}</Text>
    </Pressable>
  );
}

const estilos = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  caixa: {
    width: 16,
    height: 14,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: cores.caixaSelecao,
    alignItems: 'center',
    justifyContent: 'center',
  },
  caixaMarcada: {
    backgroundColor: cores.primaria,
    borderColor: cores.primaria,
  },
  texto: {
    marginLeft: 5,
    ...fonte(familias.regular, 15),
    color: cores.texto,
  },
});
