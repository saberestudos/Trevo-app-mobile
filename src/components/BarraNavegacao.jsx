// Barra verde de navegação do rodapé (Início, Troféus, Comunidade e Chat).
// As posições dos ícones seguem o protótipo, em porcentagem da largura da tela.
import { Image, Pressable, StyleSheet, View } from 'react-native';

import { cores } from '../theme/cores';

const ITENS = [
  {
    id: 'Home',
    descricao: 'Início',
    icone: require('../../assets/images/home/barra/inicio.png'),
    esquerda: '11.9%',
    largura: 53,
    altura: 47,
  },
  {
    id: 'Trofeus',
    descricao: 'Troféus',
    icone: require('../../assets/images/home/barra/trofeu.png'),
    esquerda: '35.6%',
    largura: 50,
    altura: 50,
  },
  {
    id: 'Comunidade',
    descricao: 'Comunidade',
    icone: require('../../assets/images/home/barra/comunidade.png'),
    esquerda: '57.2%',
    largura: 49,
    altura: 43,
  },
  {
    id: 'Chat',
    descricao: 'Chat',
    icone: require('../../assets/images/home/barra/chat.png'),
    esquerda: '77.1%',
    largura: 51,
    altura: 40,
  },
];

export default function BarraNavegacao({ aoSelecionar }) {
  return (
    <View style={estilos.barra}>
      {ITENS.map((item) => (
        <Pressable
          key={item.id}
          style={[estilos.item, { left: item.esquerda }]}
          onPress={() => aoSelecionar(item.id)}
          accessibilityRole="button"
          accessibilityLabel={item.descricao}
        >
          <Image
            source={item.icone}
            style={{ width: item.largura, height: item.altura }}
            resizeMode="contain"
          />
        </Pressable>
      ))}
    </View>
  );
}

const estilos = StyleSheet.create({
  barra: {
    height: 70,
    backgroundColor: cores.primaria,
  },
  item: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    justifyContent: 'center',
  },
});
