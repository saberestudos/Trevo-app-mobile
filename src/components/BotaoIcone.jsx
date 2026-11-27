// Botão só com ícone (o tamanho pode mudar com "estiloBotao"). Ao passar o mouse (ou segurar o dedo no celular),
// aparece uma dica (tooltip) com o nome da ação.
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { cores } from '../theme/cores';
import { familias, fonte } from '../theme/fontes';
import { sombraPadrao } from '../theme/sombras';

export default function BotaoIcone({
  icone,
  dica,
  aoPressionar,
  cor,
  estilo,
  estiloBotao,
}) {
  const [mostrarDica, setMostrarDica] = useState(false);

  return (
    <View style={[estilos.area, estilo]}>
      {mostrarDica && (
        <View style={estilos.dica} pointerEvents="none">
          <Text style={estilos.textoDica} numberOfLines={1}>
            {dica}
          </Text>
        </View>
      )}
      <Pressable
        style={[estilos.botao, cor && { backgroundColor: cor }, estiloBotao]}
        onPress={aoPressionar}
        onHoverIn={() => setMostrarDica(true)}
        onHoverOut={() => setMostrarDica(false)}
        onLongPress={() => setMostrarDica(true)}
        onPressOut={() => setMostrarDica(false)}
        accessibilityRole="button"
        accessibilityLabel={dica}
      >
        <Feather name={icone} size={28} color={cores.fundo} />
      </Pressable>
    </View>
  );
}

const estilos = StyleSheet.create({
  area: {
    alignItems: 'center',
  },
  botao: {
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 14,
    backgroundColor: cores.quizEscuro,
    ...sombraPadrao,
  },
  // A dica fica acima do botão.
  dica: {
    position: 'absolute',
    bottom: 68,
    width: 140,
    alignItems: 'center',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 8,
    backgroundColor: cores.fundoDica,
  },
  textoDica: {
    ...fonte(familias.media, 13),
    color: cores.fundo,
  },
});
