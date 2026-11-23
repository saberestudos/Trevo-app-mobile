// Botão principal do TREVO, com estado de carregamento.
import { ActivityIndicator, Pressable, StyleSheet, Text } from 'react-native';

import { cores } from '../theme/cores';
import { fontes } from '../theme/fontes';

export default function Botao({ titulo, aoPressionar, carregando = false }) {
  return (
    <Pressable
      style={({ pressed }) => [
        estilos.botao,
        (pressed || carregando) && estilos.botaoPressionado,
      ]}
      onPress={aoPressionar}
      disabled={carregando}
      accessibilityRole="button"
    >
      {carregando ? (
        <ActivityIndicator color={cores.fundo} />
      ) : (
        <Text style={estilos.texto}>{titulo}</Text>
      )}
    </Pressable>
  );
}

const estilos = StyleSheet.create({
  botao: {
    height: 44,
    borderRadius: 12,
    backgroundColor: cores.primaria,
    alignItems: 'center',
    justifyContent: 'center',
  },
  botaoPressionado: {
    opacity: 0.8,
  },
  texto: {
    color: cores.fundo,
    fontSize: fontes.grande,
    fontWeight: '500',
  },
});
