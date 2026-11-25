// Texto na fonte de destaque (HIGHSENS).
// Essa fonte não tem letras acentuadas: no protótipo, os acentos foram
// desenhados à mão. Aqui fazemos o mesmo: para cada letra com acento,
// mostramos a letra sem acento e desenhamos o acento por cima.
import { StyleSheet, Text, View } from 'react-native';

import { cores } from '../theme/cores';
import { fonteDestaque } from '../theme/fontes';

const LETRAS_ACENTUADAS = {
  Á: { letra: 'A', acento: 'agudo' },
  É: { letra: 'E', acento: 'agudo' },
  Í: { letra: 'I', acento: 'agudo' },
  Ó: { letra: 'O', acento: 'agudo' },
  Ú: { letra: 'U', acento: 'agudo' },
  Â: { letra: 'A', acento: 'circunflexo' },
  Ê: { letra: 'E', acento: 'circunflexo' },
  Ô: { letra: 'O', acento: 'circunflexo' },
};

// Divide uma linha em pedaços de texto normal e letras acentuadas.
// Ex.: "VOCÊ JÁ" vira ["VOC", Ê, " J", Á].
function separarEmPartes(linha) {
  const partes = [];
  let textoNormal = '';

  for (const caractere of linha) {
    const acentuada = LETRAS_ACENTUADAS[caractere];
    if (acentuada) {
      if (textoNormal) partes.push({ texto: textoNormal });
      partes.push(acentuada);
      textoNormal = '';
    } else {
      textoNormal += caractere;
    }
  }
  if (textoNormal) partes.push({ texto: textoNormal });

  return partes;
}

function Acento({ tipo, tamanho, cor }) {
  const traco = {
    width: tamanho * 0.085,
    height: tamanho * 0.2,
    borderRadius: tamanho * 0.04,
    backgroundColor: cor,
  };
  // Afasta os dois traços do circunflexo para que as pontas de cima se encontrem.
  const deslocamento = tamanho * 0.028;

  return (
    <View style={[estilos.acento, { top: -tamanho * 0.13 }]}>
      {tipo === 'agudo' ? (
        <View style={[traco, { transform: [{ rotate: '45deg' }] }]} />
      ) : (
        <View style={estilos.circunflexo}>
          <View
            style={[
              traco,
              {
                transform: [{ translateX: -deslocamento }, { rotate: '45deg' }],
              },
            ]}
          />
          <View
            style={[
              traco,
              {
                transform: [{ translateX: deslocamento }, { rotate: '-45deg' }],
              },
            ]}
          />
        </View>
      )}
    </View>
  );
}

export default function TextoDestaque({
  texto,
  tamanho,
  cor = cores.fundo,
  centralizado = false,
  estilo,
}) {
  const estiloTexto = { ...fonteDestaque(tamanho), color: cor };
  const linhas = String(texto).split('\n');

  return (
    <View style={estilo}>
      {linhas.map((linha, indiceLinha) => (
        <View
          key={indiceLinha}
          style={[estilos.linha, centralizado && estilos.linhaCentralizada]}
        >
          {separarEmPartes(linha).map((parte, indiceParte) =>
            parte.acento ? (
              <View key={indiceParte}>
                <Text style={estiloTexto}>{parte.letra}</Text>
                <Acento tipo={parte.acento} tamanho={tamanho} cor={cor} />
              </View>
            ) : (
              <Text key={indiceParte} style={estiloTexto}>
                {parte.texto}
              </Text>
            ),
          )}
        </View>
      ))}
    </View>
  );
}

const estilos = StyleSheet.create({
  linha: {
    flexDirection: 'row',
  },
  linhaCentralizada: {
    justifyContent: 'center',
  },
  acento: {
    position: 'absolute',
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  circunflexo: {
    flexDirection: 'row',
  },
});
