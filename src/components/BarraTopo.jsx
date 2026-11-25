// Barra do topo das telas de jogo, seguindo o fluxo do protótipo (Figma):
// LOJA → personalizar o avatar (Minha Conta), troféu → Troféus,
// engrenagem → Opções (configurações). As moedas ainda não têm tela.
import { Image, Pressable, StyleSheet, View } from 'react-native';

import Pilula from './Pilula';
import { avisarEmBreve } from '../utils/avisos';

const imagens = {
  moeda: require('../../assets/images/home/moeda.png'),
  trofeu: require('../../assets/images/home/trofeu-pequeno.png'),
  engrenagem: require('../../assets/images/home/engrenagem.png'),
};

export default function BarraTopo({ moedas, trofeus, navigation }) {
  return (
    <View style={estilos.topo}>
      <Pilula
        icone={imagens.moeda}
        texto={moedas}
        descricao="Moedas"
        aoPressionar={avisarEmBreve}
      />
      <Pilula
        texto="LOJA"
        descricao="Loja"
        aoPressionar={() => navigation.navigate('MinhaConta')}
      />
      <Pilula
        icone={imagens.trofeu}
        texto={trofeus}
        descricao="Troféus"
        aoPressionar={() => navigation.navigate('Trofeus')}
      />
      <Pressable
        onPress={() => navigation.navigate('Opcoes')}
        accessibilityLabel="Configurações"
      >
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
