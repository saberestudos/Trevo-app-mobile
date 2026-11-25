// Barra do topo das telas de jogo: moedas, Loja, troféus e engrenagem (opções).
import { Image, Pressable, StyleSheet, View } from 'react-native';

import Pilula from './Pilula';
import { avisarEmBreve } from '../utils/avisos';

const imagens = {
  moeda: require('../../assets/images/home/moeda.png'),
  trofeu: require('../../assets/images/home/trofeu-pequeno.png'),
  engrenagem: require('../../assets/images/home/engrenagem.png'),
};

export default function BarraTopo({ moedas, trofeus, aoAbrirTrofeus }) {
  return (
    <View style={estilos.topo}>
      <Pilula
        icone={imagens.moeda}
        texto={moedas}
        descricao="Moedas"
        aoPressionar={avisarEmBreve}
      />
      <Pilula texto="LOJA" descricao="Loja" aoPressionar={avisarEmBreve} />
      <Pilula
        icone={imagens.trofeu}
        texto={trofeus}
        descricao="Troféus"
        aoPressionar={aoAbrirTrofeus}
      />
      <Pressable onPress={avisarEmBreve} accessibilityLabel="Opções">
        <Image source={imagens.engrenagem} style={estilos.engrenagem} />
      </Pressable>
    </View>
  );
}

const estilos = StyleSheet.create({
  topo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  engrenagem: {
    width: 40,
    height: 40,
    margin: 2,
  },
});
