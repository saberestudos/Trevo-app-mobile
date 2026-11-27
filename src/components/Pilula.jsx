// Etiqueta verde arredondada do topo da Home (moedas, Loja e troféus).
// O ícone (imagem) ou o símbolo (ícone desenhado) são opcionais;
// sem nenhum dos dois, o texto fica centralizado.
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

import { cores } from '../theme/cores';
import { fonteDestaque } from '../theme/fontes';

export default function Pilula({
  texto,
  icone,
  simbolo,
  aoPressionar,
  descricao,
}) {
  const temIcone = Boolean(icone || simbolo);
  return (
    <Pressable
      style={[estilos.pilula, !temIcone && estilos.pilulaCentralizada]}
      onPress={aoPressionar}
      accessibilityRole="button"
      accessibilityLabel={descricao}
    >
      {icone && <Image source={icone} style={estilos.icone} />}
      {simbolo && <View style={estilos.simbolo}>{simbolo}</View>}
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
  simbolo: {
    width: 26,
    height: 26,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 1,
    marginRight: 6,
  },
  texto: {
    marginTop: 3,
    ...fonteDestaque(25),
    color: cores.fundo,
  },
});
