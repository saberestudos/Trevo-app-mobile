// Barra de progresso do nível, com o texto "VOCÊ JÁ VENCEU X%".
// O texto aparece duas vezes: verde por baixo (sobre a parte branca)
// e branco por cima, só dentro da parte preenchida.
// Assim ele fica legível em qualquer porcentagem, de 0% a 100%.
// Com "mostrarTexto" falso (antes da primeira missão), a barra aparece vazia, sem texto.
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import TextoDestaque from './TextoDestaque';
import { cores } from '../theme/cores';

const ESPACO_INTERNO = 5;

export default function BarraNivel({ porcentagem, mostrarTexto = true }) {
  const [larguraBarra, setLarguraBarra] = useState(0);
  const texto = `VOCÊ JÁ VENCEU ${porcentagem}%`;

  return (
    <View
      style={estilos.barra}
      onLayout={(evento) => setLarguraBarra(evento.nativeEvent.layout.width)}
    >
      {mostrarTexto && (
        <TextoDestaque
          texto={texto}
          tamanho={20}
          cor={cores.primaria}
          centralizado
          estilo={estilos.texto}
        />
      )}

      <View style={[estilos.preenchimento, { width: `${porcentagem}%` }]}>
        <LinearGradient
          colors={[cores.nivelInicio, cores.nivelFim]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={StyleSheet.absoluteFill}
        />
        {mostrarTexto && (
          <TextoDestaque
            texto={texto}
            tamanho={20}
            centralizado
            estilo={[estilos.textoBranco, { width: larguraBarra }]}
          />
        )}
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  barra: {
    height: 38,
    padding: ESPACO_INTERNO,
    borderRadius: 8,
    backgroundColor: cores.fundo,
  },
  texto: {
    position: 'absolute',
    top: 11,
    left: 0,
    right: 0,
  },
  preenchimento: {
    height: 28,
    borderRadius: 8,
    overflow: 'hidden',
  },
  textoBranco: {
    position: 'absolute',
    top: 11 - ESPACO_INTERNO,
    left: -ESPACO_INTERNO,
  },
});
