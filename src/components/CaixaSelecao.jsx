// Caixa de seleção (checkbox) com texto ao lado.
import { Pressable, StyleSheet, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { cores } from '../theme/cores';
import { fontes } from '../theme/fontes';

export default function CaixaSelecao({ texto, marcada, aoAlternar }) {
  return (
    <Pressable
      style={estilos.container}
      onPress={aoAlternar}
      accessibilityRole="checkbox"
      accessibilityState={{ checked: marcada }}
    >
      <Ionicons
        name={marcada ? 'checkbox' : 'square-outline'}
        size={18}
        color={cores.icone}
      />
      <Text style={estilos.texto}>{texto}</Text>
    </Pressable>
  );
}

const estilos = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  texto: {
    marginLeft: 4,
    color: cores.texto,
    fontSize: fontes.normal,
  },
});
