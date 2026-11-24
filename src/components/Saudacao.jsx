// Saudação com as iniciais da pessoa num círculo verde.
// Sem nome, mostra só "Olá!".
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { cores } from '../theme/cores';
import { familias, fonte } from '../theme/fontes';

export default function Saudacao({ nome, iniciais, subtitulo }) {
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
