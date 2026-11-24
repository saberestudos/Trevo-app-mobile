// Contador com botões de menos e mais, que não deixa passar de zero para baixo.
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { cores } from '../theme/cores';
import { familias, fonte } from '../theme/fontes';

export default function Contador({ valor, aoAlterar, unidade }) {
  function diminuir() {
    if (valor > 0) {
      aoAlterar(valor - 1);
    }
  }

  return (
    <View style={estilos.container}>
      <Pressable
        style={estilos.botao}
        onPress={diminuir}
        accessibilityLabel="Diminuir"
      >
        <Text style={estilos.sinal}>-</Text>
      </Pressable>

      <View style={estilos.caixaValor}>
        <Text style={estilos.valor}>{`${valor} ${unidade}`}</Text>
      </View>

      <Pressable
        style={estilos.botao}
        onPress={() => aoAlterar(valor + 1)}
        accessibilityLabel="Aumentar"
      >
        <Text style={estilos.sinal}>+</Text>
      </Pressable>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 6,
  },
  botao: {
    width: 46,
    height: 46,
    borderRadius: 23,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: cores.primaria,
  },
  sinal: {
    ...fonte(familias.media, 32),
    color: cores.fundo,
    textShadowColor: cores.sombraTexto,
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 4,
  },
  caixaValor: {
    width: 134,
    height: 46,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 6,
    borderColor: cores.primaria,
    backgroundColor: cores.fundoTranslucido,
  },
  valor: {
    ...fonte(familias.media, 16),
    color: cores.texto,
  },
});
