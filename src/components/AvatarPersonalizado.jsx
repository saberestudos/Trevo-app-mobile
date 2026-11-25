// Desenha o avatar com o que ele está usando, empilhando imagens do mesmo tamanho:
// corpo → camiseta → pernas (calça ou bermuda) → alto da cabeça (cabelo ou chapéu) → óculos.
// Com fantasia, ela é o boneco inteiro e aparece sozinha.
import { Image, StyleSheet, View } from 'react-native';

import {
  CABECAS,
  CAMISETAS,
  CORPO,
  FANTASIAS,
  OCULOS,
  PERNAS,
  POSICAO_CAMADAS,
} from '../catalogos/avatar';

function Camada({ imagem }) {
  return (
    <Image source={imagem} style={estilos.camada} resizeMode="contain" />
  );
}

export default function AvatarPersonalizado({ visual, estilo }) {
  const { chapeu, oculos, camiseta, calca, fantasia } = visual;

  return (
    <View style={estilo}>
      <View style={[estilos.palco, POSICAO_CAMADAS]}>
        {fantasia ? (
          <Camada imagem={FANTASIAS[fantasia]} />
        ) : (
          <>
            <Camada imagem={CORPO} />
            {CAMISETAS[camiseta] && <Camada imagem={CAMISETAS[camiseta]} />}
            <Camada imagem={PERNAS[calca] ?? PERNAS.jeans} />
            <Camada imagem={CABECAS[chapeu] ?? CABECAS.padrao} />
            {OCULOS[oculos] && <Camada imagem={OCULOS[oculos]} />}
          </>
        )}
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  palco: {
    position: 'absolute',
  },
  camada: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
  },
});
