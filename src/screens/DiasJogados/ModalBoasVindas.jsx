// Modal de boas-vindas que aparece antes das perguntas do onboarding.
// Mostra uma etapa por vez, com Próximo, Voltar e Pular.
import { useState } from 'react';
import { Image, Modal, Pressable, StyleSheet, Text, View } from 'react-native';

import Botao from '../../components/Botao';
import { cores } from '../../theme/cores';
import { familias, fonte } from '../../theme/fontes';
import { ETAPAS_BOAS_VINDAS } from './etapasBoasVindas';

export default function ModalBoasVindas({ visivel, aoFechar }) {
  const [indiceEtapa, setIndiceEtapa] = useState(0);

  const etapa = ETAPAS_BOAS_VINDAS[indiceEtapa];
  const primeiraEtapa = indiceEtapa === 0;
  const ultimaEtapa = indiceEtapa === ETAPAS_BOAS_VINDAS.length - 1;

  function avancar() {
    if (ultimaEtapa) {
      aoFechar();
      return;
    }
    setIndiceEtapa(indiceEtapa + 1);
  }

  return (
    <Modal
      visible={visivel}
      transparent
      animationType="fade"
      onRequestClose={aoFechar}
    >
      <View style={estilos.fundo}>
        <View style={estilos.cartao}>
          <Pressable
            style={[estilos.pular, ultimaEtapa && estilos.oculto]}
            onPress={aoFechar}
            disabled={ultimaEtapa}
          >
            <Text style={estilos.textoPular}>Pular</Text>
          </Pressable>

          <View style={estilos.areaImagem}>
            <Image
              source={etapa.imagem}
              style={estilos.imagem}
              resizeMode="contain"
            />
          </View>

          <Text style={estilos.titulo}>{etapa.titulo}</Text>
          <Text style={estilos.texto}>{etapa.texto}</Text>

          <View style={estilos.pontos}>
            {ETAPAS_BOAS_VINDAS.map((item, indice) => (
              <View
                key={item.titulo}
                style={[
                  estilos.ponto,
                  indice === indiceEtapa && estilos.pontoAtivo,
                ]}
              />
            ))}
          </View>

          <Botao
            estilo={estilos.botao}
            titulo={ultimaEtapa ? 'Começar' : 'Próximo'}
            aoPressionar={avancar}
          />

          <Pressable
            style={primeiraEtapa && estilos.oculto}
            onPress={() => setIndiceEtapa(indiceEtapa - 1)}
            disabled={primeiraEtapa}
          >
            <Text style={estilos.voltar}>Voltar</Text>
          </Pressable>
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
    paddingBottom: 18,
    borderRadius: 16,
    backgroundColor: cores.fundo,
  },
  pular: {
    alignSelf: 'flex-end',
  },
  textoPular: {
    ...fonte(familias.regular, 15),
    color: cores.link,
    textDecorationLine: 'underline',
  },
  oculto: {
    opacity: 0,
  },
  areaImagem: {
    width: '100%',
    height: 210,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    backgroundColor: cores.fundoIlustracao,
  },
  imagem: {
    width: 260,
    height: 180,
  },
  titulo: {
    marginTop: 22,
    ...fonte(familias.semiNegrito, 20),
    color: cores.texto,
    textAlign: 'center',
  },
  texto: {
    minHeight: 60,
    marginTop: 10,
    ...fonte(familias.regular, 15),
    lineHeight: 20,
    color: cores.textoDescricao,
    textAlign: 'center',
  },
  pontos: {
    flexDirection: 'row',
    gap: 6,
    marginTop: 20,
  },
  ponto: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: cores.pontoInativo,
  },
  pontoAtivo: {
    width: 24,
    backgroundColor: cores.primaria,
  },
  botao: {
    alignSelf: 'stretch',
    marginTop: 20,
  },
  voltar: {
    marginTop: 12,
    ...fonte(familias.media, 16),
    color: cores.texto,
  },
});
