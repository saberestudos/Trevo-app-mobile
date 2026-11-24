// Logo do TREVO no tamanho usado nas telas de acesso do protótipo.
import { Image, StyleSheet } from 'react-native';

const logo = require('../../assets/images/logo-trevo.png');

export default function Logo() {
  return (
    <Image
      source={logo}
      style={estilos.logo}
      resizeMode="contain"
      accessibilityLabel="Logo do TREVO"
    />
  );
}

const estilos = StyleSheet.create({
  logo: {
    width: 189,
    height: 202,
    alignSelf: 'center',
  },
});
