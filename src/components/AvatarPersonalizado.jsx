// Desenha o avatar com o que ele está usando, empilhando imagens:
// base (com ou sem boné) → camiseta → calça → óculos → chapéu.
// Com fantasia, ela cobre o corpo e esconde camiseta, calça e chapéu.
import { Image, StyleSheet, View } from 'react-native';

import {
  BASES,
  CAMADAS,
  CHAPEUS,
  FANTASIAS,
  OCULOS,
  POSICAO_OCULOS,
} from '../catalogos/avatar';

function Camada({ imagem, posicao }) {
  return (
    <Image
      source={imagem}
      style={[estilos.camada, posicao]}
      resizeMode="contain"
    />
  );
}

export default function AvatarPersonalizado({ visual, estilo }) {
  const { chapeu, oculos, camiseta, calca, fantasia } = visual;
  const base = !fantasia && chapeu === 'bone' ? 'bone' : 'padrao';
  const camadas = CAMADAS[base];

  return (
    <View style={estilo}>
      <Camada imagem={BASES[base]} />

      {fantasia ? (
        <Camada imagem={FANTASIAS[fantasia]} />
      ) : (
        <>
          {camadas.camiseta[camiseta] && (
            <Camada imagem={camadas.camiseta[camiseta]} />
          )}
          {camadas.calca[calca] && <Camada imagem={camadas.calca[calca]} />}
        </>
      )}

      {oculos && (
        <Camada imagem={OCULOS[oculos]} posicao={POSICAO_OCULOS[base]} />
      )}

      {!fantasia && CHAPEUS[chapeu] && (
        <Camada
          imagem={CHAPEUS[chapeu].imagem}
          posicao={CHAPEUS[chapeu].posicao}
        />
      )}
    </View>
  );
}

const estilos = StyleSheet.create({
  camada: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
  },
});
