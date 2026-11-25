// Tela de Opções: aberta pela engrenagem do topo das telas de jogo.
// "Minha conta" abre a tela da conta e "Sair" volta para o Login.
// As outras opções ainda serão feitas e mostram "Em breve".
import { useCallback, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

import BarraTopo from '../../components/BarraTopo';
import TelaJogo from '../../components/TelaJogo';
import ProgressoService from '../../services/ProgressoService';
import { avisarEmBreve } from '../../utils/avisos';
import estilos from './styles';

export default function OpcoesScreen({ navigation }) {
  const [progresso, setProgresso] = useState(null);

  useFocusEffect(
    useCallback(() => {
      ProgressoService.buscar().then(setProgresso);
    }, []),
  );

  function sair() {
    navigation.reset({ index: 0, routes: [{ name: 'Login' }] });
  }

  // Medidas do protótipo: "topo" é a distância do botão até o alto do cartão
  // e "espaco" é a distância do texto até a borda esquerda do botão.
  const opcoes = [
    {
      texto: 'BLOQUEAR APPS',
      espaco: 29.5,
      topo: 51.5,
      aoPressionar: avisarEmBreve,
    },
    {
      texto: 'BLOQUEAR SITES',
      espaco: 29.5,
      topo: 126,
      aoPressionar: avisarEmBreve,
    },
    {
      texto: 'MINHA CONTA',
      espaco: 45.3,
      topo: 200,
      aoPressionar: () => navigation.navigate('MinhaConta'),
    },
    {
      texto: 'TRILHA DO SABER',
      espaco: 23.3,
      topo: 276,
      aoPressionar: avisarEmBreve,
    },
    {
      texto: 'PLANO PREMIUM',
      espaco: 23.3,
      topo: 352,
      aoPressionar: avisarEmBreve,
    },
  ];

  return (
    <TelaJogo navigation={navigation}>
      {progresso && (
        <>
          <BarraTopo
            moedas={progresso.moedas}
            trofeus={progresso.trofeus}
            aoAbrirTrofeus={() => navigation.navigate('Trofeus')}
            aoAbrirOpcoes={() => navigation.goBack()}
          />

          <View style={estilos.cartao}>
            {opcoes.map((opcao) => (
              <Pressable
                key={opcao.texto}
                style={[estilos.botao, { top: opcao.topo }]}
                onPress={opcao.aoPressionar}
                accessibilityRole="button"
              >
                <Text style={[estilos.textoBotao, { left: opcao.espaco }]}>
                  {opcao.texto}
                </Text>
              </Pressable>
            ))}

            <Pressable
              style={[estilos.botao, estilos.botaoSair]}
              onPress={sair}
              accessibilityRole="button"
            >
              <Text style={[estilos.textoBotao, estilos.textoSair]}>SAIR</Text>
            </Pressable>

            <Pressable
              style={estilos.fechar}
              onPress={() => navigation.goBack()}
              accessibilityRole="button"
              accessibilityLabel="Fechar opções"
            >
              <Text style={estilos.textoFechar}>X</Text>
            </Pressable>
          </View>
        </>
      )}
    </TelaJogo>
  );
}
