// Saudação com as iniciais da pessoa num círculo verde.
// Sem nome, mostra só "Olá!". Com "aoPedirAjuda", mostra o botão (?) à direita.
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons';

import { cores } from '../theme/cores';
import { familias, fonte } from '../theme/fontes';

export default function Saudacao({ nome, iniciais, subtitulo, aoPedirAjuda }) {
  return (
    <View style={estilos.container}>
      {iniciais && (
        <LinearGradient
          colors={[cores.bordaInicio, cores.bordaFim]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={estilos.avatar}
        >
          <Text style={estilos.iniciais}>{iniciais}</Text>
        </LinearGradient>
      )}

      <View style={estilos.textos}>
        <Text style={estilos.ola}>{nome ? `Olá, ${nome}!` : 'Olá!'}</Text>
        <Text style={estilos.subtitulo}>{subtitulo}</Text>
      </View>

      {aoPedirAjuda && (
        <Pressable
          style={estilos.ajuda}
          onPress={aoPedirAjuda}
          accessibilityLabel="Ver a introdução novamente"
        >
          <Feather name="help-circle" size={22} color={cores.primaria} />
        </Pressable>
      )}
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },
  avatar: {
    width: 52,
    height: 52,
    borderRadius: 26,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: cores.primaria,
    shadowOpacity: 0.25,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },
  iniciais: {
    ...fonte(familias.semiNegrito, 19),
    color: cores.fundo,
  },
  textos: {
    flex: 1,
  },
  ajuda: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: cores.fundo,
    shadowColor: cores.texto,
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  ola: {
    ...fonte(familias.semiNegrito, 20),
    color: cores.texto,
  },
  subtitulo: {
    marginTop: 2,
    ...fonte(familias.regular, 14),
    color: cores.textoDescricao,
  },
});
