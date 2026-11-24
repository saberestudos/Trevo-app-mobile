// Botão principal do TREVO, com estado de carregamento.
// "estilo" permite mudar o tamanho (ex.: botão Continuar do onboarding).
import { ActivityIndicator, Pressable, StyleSheet, Text } from 'react-native';

import { cores } from '../theme/cores';
import { familias, fonte } from '../theme/fontes';

export default function Botao({
  titulo,
  aoPressionar,
  carregando = false,
  estilo,
}) {
  return (
    <Pressable
      style={({ pressed }) => [
        estilos.botao,
        estilo,
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
    height: 43,
    borderRadius: 16,
    backgroundColor: cores.primaria,
    alignItems: 'center',
    justifyContent: 'center',
  },
  botaoPressionado: {
    opacity: 0.8,
  },
  texto: {
    ...fonte(familias.media, 24),
    color: cores.fundo,
  },
});
