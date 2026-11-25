// Etiqueta verde arredondada do topo da Home (moedas, Loja e troféus).
// O ícone é opcional; sem ícone, o texto fica centralizado.
import { Image, Pressable, StyleSheet, Text } from 'react-native';

import { cores } from '../theme/cores';
import { fonteDestaque } from '../theme/fontes';

export default function Pilula({ texto, icone, aoPressionar, descricao }) {
  return (
    <Pressable
      style={[estilos.pilula, !icone && estilos.pilulaCentralizada]}
      onPress={aoPressionar}
      accessibilityRole="button"
      accessibilityLabel={descricao}
    >
      {icone && <Image source={icone} style={estilos.icone} />}
      <Text style={estilos.texto}>{texto}</Text>
    </Pressable>
  );
}

const estilos = StyleSheet.create({
  pilula: {
    width: 96,
    height: 28,
    flexDirection: 'row',
    paddingLeft: 5,
    borderRadius: 10,
    backgroundColor: cores.primaria,
  },
  pilulaCentralizada: {
    justifyContent: 'center',
    paddingLeft: 0,
  },
  icone: {
    width: 26,
    height: 26,
    marginTop: 1,
    marginRight: 2,
  },
  texto: {
    marginTop: 3,
    ...fonteDestaque(25),
    color: cores.fundo,
  },
});
