// Botão de voltar das telas de jogo: seta branca dentro de um círculo translúcido.
import { Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { cores } from '../theme/cores';

// Regra do app: toda seta, "Voltar" ou X leva de volta para a tela anterior.
// Se não houver tela anterior (ex.: página recarregada), vai para a tela padrão.
export function voltar(navigation, telaPadrao = 'Home') {
  if (navigation.canGoBack()) {
    navigation.goBack();
  } else {
    navigation.navigate(telaPadrao);
  }
}

export const TAMANHO_BOTAO_VOLTAR = 38;

export default function BotaoVoltar({ aoPressionar, estilo }) {
  return (
    <Pressable
      style={[estilos.botao, estilo]}
      onPress={aoPressionar}
      hitSlop={8}
      accessibilityRole="button"
      accessibilityLabel="Voltar"
    >
      <Ionicons name="arrow-back" size={22} color={cores.fundo} />
    </Pressable>
  );
}

const estilos = StyleSheet.create({
  botao: {
    width: TAMANHO_BOTAO_VOLTAR,
    height: TAMANHO_BOTAO_VOLTAR,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: TAMANHO_BOTAO_VOLTAR / 2,
    borderColor: cores.bordaBotaoVoltar,
    backgroundColor: cores.fundoBotaoVoltar,
  },
});
