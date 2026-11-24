// Campo de texto com borda em degradê e rótulo sobre a borda, como no protótipo.
// Quando "senha" é true, esconde o texto e mostra o botão de olho.
import { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons';

import { cores } from '../theme/cores';
import { familias, fonte } from '../theme/fontes';

export default function CampoTexto({
  rotulo,
  valor,
  aoAlterar,
  erro,
  senha = false,
  estilo,
  ...propsDoInput
}) {
  const [senhaVisivel, setSenhaVisivel] = useState(false);
  const coresDaBorda = erro
    ? [cores.erro, cores.erro]
    : [cores.bordaInicio, cores.bordaFim];

  return (
    <View style={estilo}>
      <LinearGradient
        colors={coresDaBorda}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={estilos.borda}
      >
        <View style={estilos.caixa}>
          <TextInput
            style={estilos.input}
            value={valor}
            onChangeText={aoAlterar}
            secureTextEntry={senha && !senhaVisivel}
            accessibilityLabel={rotulo}
            {...propsDoInput}
          />

          {senha && (
            <Pressable
              onPress={() => setSenhaVisivel(!senhaVisivel)}
              accessibilityLabel={
                senhaVisivel ? 'Ocultar senha' : 'Mostrar senha'
              }
              hitSlop={8}
            >
              <Feather
                name={senhaVisivel ? 'eye' : 'eye-off'}
                size={24}
                color={cores.link}
              />
            </Pressable>
          )}
        </View>
      </LinearGradient>

      <Text style={estilos.rotulo}>{rotulo}</Text>

      {erro && <Text style={estilos.mensagemErro}>{erro}</Text>}
    </View>
  );
}

const estilos = StyleSheet.create({
  borda: {
    height: 47,
    borderRadius: 6,
    padding: 2,
  },
  caixa: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 4,
    paddingLeft: 9,
    paddingRight: 24,
    backgroundColor: cores.fundo,
  },
  input: {
    flex: 1,
    ...fonte(familias.regular, 15),
    color: cores.texto,
  },
  rotulo: {
    position: 'absolute',
    top: -10,
    left: 8,
    paddingHorizontal: 3,
    ...fonte(familias.regular, 14),
    color: cores.texto,
    backgroundColor: cores.fundo,
  },
  mensagemErro: {
    marginTop: 4,
    ...fonte(familias.regular, 13),
    color: cores.erro,
  },
});
