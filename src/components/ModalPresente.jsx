// Modal de parabéns quando a pessoa ganha moedas (ex.: presente de boas-vindas).
// Segue o mesmo estilo do modal de boas-vindas do onboarding.
import { Image, Modal, StyleSheet, Text, View } from 'react-native';

import Botao from './Botao';
import TextoDestaque from './TextoDestaque';
import { cores } from '../theme/cores';
import { familias, fonte } from '../theme/fontes';

const moeda = require('../../assets/images/home/moeda.png');

export default function ModalPresente({
  visivel,
  moedas,
  titulo,
  texto,
  aoFechar,
}) {
  return (
    <Modal
      visible={visivel}
      transparent
      animationType="fade"
      onRequestClose={aoFechar}
    >
      <View style={estilos.fundo}>
        <View style={estilos.cartao}>
          <View style={estilos.areaMoeda}>
            <Image source={moeda} style={estilos.moedaGrande} />
            <View style={estilos.ganho}>
              <TextoDestaque
                texto={`+${moedas}`}
                tamanho={40}
                cor={cores.primaria}
              />
            </View>
          </View>

          <Text style={estilos.titulo}>{titulo}</Text>
          <Text style={estilos.texto}>{texto}</Text>

          <Botao
            estilo={estilos.botao}
            titulo="Pegar moedas"
            aoPressionar={aoFechar}
          />
        </View>
      </View>
    </Modal>
  );
}

const estilos = StyleSheet.create({
  fundo: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
    backgroundColor: cores.sobreposicao,
  },
  cartao: {
    alignItems: 'center',
    paddingTop: 20,
    paddingHorizontal: 20,
    paddingBottom: 22,
    borderRadius: 16,
    backgroundColor: cores.fundo,
  },
  areaMoeda: {
    width: '100%',
    height: 160,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    borderRadius: 12,
    backgroundColor: cores.fundoIlustracao,
  },
  moedaGrande: {
    width: 90,
    height: 90,
  },
  ganho: {
    marginTop: 2,
  },
  titulo: {
    marginTop: 20,
    ...fonte(familias.semiNegrito, 20),
    color: cores.texto,
    textAlign: 'center',
  },
  texto: {
    marginTop: 10,
    ...fonte(familias.regular, 15),
    lineHeight: 20,
    color: cores.textoDescricao,
    textAlign: 'center',
  },
  botao: {
    alignSelf: 'stretch',
    marginTop: 20,
  },
});
