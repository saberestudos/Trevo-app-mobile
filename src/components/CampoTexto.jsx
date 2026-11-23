// Campo de texto com rótulo sobre a borda, como no protótipo.
// Quando "senha" é true, esconde o texto e mostra o botão de olho.
import { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { cores } from '../theme/cores';
import { fontes } from '../theme/fontes';

export default function CampoTexto({
  rotulo,
  valor,
  aoAlterar,
  erro,
  senha = false,
  ...propsDoInput
}) {
  const [senhaVisivel, setSenhaVisivel] = useState(false);

  return (
    <View style={estilos.container}>
      <View style={[estilos.caixa, erro && estilos.caixaComErro]}>
        <Text style={estilos.rotulo}>{rotulo}</Text>

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
            <Ionicons
              name={senhaVisivel ? 'eye-outline' : 'eye-off-outline'}
              size={24}
              color={cores.icone}
            />
          </Pressable>
        )}
      </View>

      {erro && <Text style={estilos.mensagemErro}>{erro}</Text>}
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  caixa: {
    height: 48,
    borderWidth: 2,
    borderColor: cores.borda,
    borderRadius: 6,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  caixaComErro: {
    borderColor: cores.erro,
  },
  rotulo: {
    position: 'absolute',
    top: -10,
    left: 8,
    paddingHorizontal: 2,
    backgroundColor: cores.fundo,
    color: cores.texto,
    fontSize: fontes.pequena,
  },
  input: {
    flex: 1,
    color: cores.texto,
    fontSize: fontes.normal,
  },
  mensagemErro: {
    marginTop: 4,
    color: cores.erro,
    fontSize: fontes.pequena,
  },
});
