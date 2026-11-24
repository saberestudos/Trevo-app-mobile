// Caixinhas para digitar o código de verificação, um dígito em cada.
// Ao digitar, o foco passa sozinho para a próxima caixa;
// ao apagar numa caixa vazia, volta para a anterior.
import { useRef } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

import { cores } from '../theme/cores';
import { familias, fonte } from '../theme/fontes';

export default function CampoCodigo({ digitos, aoAlterar, erro, estilo }) {
  const caixas = useRef([]);

  function alterarDigito(indice, texto) {
    const digito = texto.replace(/[^0-9]/g, '').slice(-1);
    const novosDigitos = [...digitos];
    novosDigitos[indice] = digito;
    aoAlterar(novosDigitos);

    if (digito && indice < digitos.length - 1) {
      caixas.current[indice + 1].focus();
    }
  }

  function voltarAoApagar(indice, evento) {
    if (
      evento.nativeEvent.key === 'Backspace' &&
      !digitos[indice] &&
      indice > 0
    ) {
      caixas.current[indice - 1].focus();
    }
  }

  return (
    <View style={estilo}>
      <View style={estilos.linha}>
        {digitos.map((digito, indice) => (
          <TextInput
            key={indice}
            ref={(caixa) => (caixas.current[indice] = caixa)}
            style={[estilos.caixa, erro && estilos.caixaComErro]}
            value={digito}
            onChangeText={(texto) => alterarDigito(indice, texto)}
            onKeyPress={(evento) => voltarAoApagar(indice, evento)}
            keyboardType="number-pad"
            maxLength={1}
            cursorColor={cores.primaria}
            selectionColor={cores.primaria}
            accessibilityLabel={`Dígito ${indice + 1} do código`}
          />
        ))}
      </View>

      {erro && <Text style={estilos.mensagemErro}>{erro}</Text>}
    </View>
  );
}

const estilos = StyleSheet.create({
  linha: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 5,
  },
  caixa: {
    width: 43,
    height: 43,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: cores.primaria,
    textAlign: 'center',
    outlineStyle: 'none',
    ...fonte(familias.semiNegrito, 24),
    color: cores.primaria,
  },
  caixaComErro: {
    borderColor: cores.erro,
  },
  mensagemErro: {
    marginTop: 6,
    textAlign: 'center',
    ...fonte(familias.regular, 13),
    color: cores.erro,
  },
});
