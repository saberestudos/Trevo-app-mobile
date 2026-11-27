// Contador com botões de menos e mais, que não deixa passar de zero para baixo.
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

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
        <Feather name="minus" size={22} color={cores.fundo} />
      </Pressable>

      <View style={estilos.caixaValor}>
        <Text style={estilos.valor}>{`${valor} ${unidade}`}</Text>
      </View>

      <Pressable
        style={estilos.botao}
        onPress={() => aoAlterar(valor + 1)}
        accessibilityLabel="Aumentar"
      >
        <Feather name="plus" size={22} color={cores.fundo} />
      </Pressable>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  botao: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: cores.primaria,
  },
  caixaValor: {
    width: 130,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1.5,
    borderRadius: 12,
    borderColor: cores.divisor,
    backgroundColor: cores.fundo,
  },
  valor: {
    ...fonte(familias.semiNegrito, 16),
    color: cores.texto,
  },
});
