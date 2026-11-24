// Modal de boas-vindas que aparece antes das perguntas do onboarding.
// Mostra uma etapa por vez. Dá para avançar e voltar pelos botões (seta e Próximo),
// arrastando para os lados ou tocando nas bolinhas.
// Ao fechar, volta para a etapa 1, para quem quiser rever a introdução.
import { useState } from 'react';
import {
  Image,
  Modal,
  PanResponder,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { Feather } from '@expo/vector-icons';

import Botao from '../../components/Botao';
import { cores } from '../../theme/cores';
import { familias, fonte } from '../../theme/fontes';
import { ETAPAS_BOAS_VINDAS } from './etapasBoasVindas';

// Distância mínima, em pixels, para o arrasto contar como troca de etapa.
const DISTANCIA_MINIMA_ARRASTO = 50;

export default function ModalBoasVindas({ visivel, aoFechar }) {
  const [indiceEtapa, setIndiceEtapa] = useState(0);

  const etapa = ETAPAS_BOAS_VINDAS[indiceEtapa];
  const primeiraEtapa = indiceEtapa === 0;
  const ultimaEtapa = indiceEtapa === ETAPAS_BOAS_VINDAS.length - 1;

  function fechar() {
    setIndiceEtapa(0);
    aoFechar();
  }

  function avancar() {
    if (ultimaEtapa) {
      fechar();
      return;
    }
    setIndiceEtapa(indiceEtapa + 1);
  }

  function voltar() {
    if (!primeiraEtapa) {
      setIndiceEtapa(indiceEtapa - 1);
    }
  }

  // Arrastar para a esquerda avança; para a direita, volta.
  // Na última etapa, arrastar não fecha o modal: isso fica para o botão Começar.
  const arrasto = PanResponder.create({
    onMoveShouldSetPanResponder: (_, gesto) =>
      Math.abs(gesto.dx) > 15 && Math.abs(gesto.dx) > Math.abs(gesto.dy),
    onPanResponderRelease: (_, gesto) => {
      if (gesto.dx < -DISTANCIA_MINIMA_ARRASTO && !ultimaEtapa) {
        setIndiceEtapa(indiceEtapa + 1);
      } else if (gesto.dx > DISTANCIA_MINIMA_ARRASTO) {
        voltar();
      }
    },
  });

  return (
    <Modal
      visible={visivel}
      transparent
      animationType="fade"
      onRequestClose={fechar}
    >
      <View style={estilos.fundo}>
        <View style={estilos.cartao} {...arrasto.panHandlers}>
          <View style={estilos.topo}>
            <Pressable
              style={[estilos.seta, primeiraEtapa && estilos.oculto]}
              onPress={voltar}
              disabled={primeiraEtapa}
              accessibilityLabel="Voltar para a etapa anterior"
            >
              <Feather name="chevron-left" size={20} color={cores.primaria} />
            </Pressable>

            <Pressable
              style={ultimaEtapa && estilos.oculto}
              onPress={fechar}
              disabled={ultimaEtapa}
            >
              <Text style={estilos.textoPular}>Pular</Text>
            </Pressable>
          </View>

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
              <Pressable
                key={item.titulo}
                onPress={() => setIndiceEtapa(indice)}
                hitSlop={6}
                accessibilityLabel={`Ir para a etapa ${indice + 1}`}
              >
                <View
                  style={[
                    estilos.ponto,
                    indice === indiceEtapa && estilos.pontoAtivo,
                  ]}
                />
              </Pressable>
            ))}
          </View>

          <Botao
            estilo={estilos.botao}
            titulo={ultimaEtapa ? 'Começar' : 'Próximo'}
            aoPressionar={avancar}
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
    paddingTop: 16,
    paddingHorizontal: 20,
    paddingBottom: 22,
    borderRadius: 16,
    backgroundColor: cores.fundo,
  },
  topo: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  seta: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: cores.fundoIlustracao,
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
});
