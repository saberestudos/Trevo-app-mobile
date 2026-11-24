// Ícones de login com Facebook, Google e Apple.
import { Image, Pressable, StyleSheet, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import { cores } from '../theme/cores';

const iconeGoogle = require('../../assets/images/google.png');

export default function RedesSociais({ aoPressionar, estilo }) {
  return (
    <View style={[estilos.container, estilo]}>
      <Pressable
        onPress={aoPressionar}
        accessibilityLabel="Entrar com Facebook"
      >
        <FontAwesome name="facebook" size={31} color={cores.facebook} />
      </Pressable>

      <Pressable onPress={aoPressionar} accessibilityLabel="Entrar com Google">
        <Image source={iconeGoogle} style={estilos.iconeGoogle} />
      </Pressable>

      <Pressable onPress={aoPressionar} accessibilityLabel="Entrar com Apple">
        <FontAwesome name="apple" size={36} color={cores.texto} />
      </Pressable>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 38,
  },
  iconeGoogle: {
    width: 31,
    height: 31,
  },
});
