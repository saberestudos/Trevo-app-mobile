// Seta branca de voltar das telas de jogo.
import { Pressable, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import { cores } from '../theme/cores';

export default function BotaoVoltar({ aoPressionar, estilo }) {
  return (
    <Pressable
      style={[estilos.botao, estilo]}
      onPress={aoPressionar}
      hitSlop={8}
      accessibilityLabel="Voltar"
    >
      <FontAwesome name="arrow-left" size={30} color={cores.fundo} />
    </Pressable>
  );
}

const estilos = StyleSheet.create({
  botao: {
    width: 35,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
