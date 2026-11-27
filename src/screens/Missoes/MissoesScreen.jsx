// Tela de Missões Diárias (metas do dia).
// Aberta pelo ícone de missões da Home. A pessoa marca o que fez e,
// depois, toca em "Receber recompensas" para ganhar troféus e moedas.
import { useCallback, useState } from 'react';
import { Image, Pressable, View } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import BarraTopo from '../../components/BarraTopo';
import BotaoVoltar, { voltar } from '../../components/BotaoVoltar';
import TelaJogo from '../../components/TelaJogo';
import TextoDestaque from '../../components/TextoDestaque';
import MissaoService from '../../services/MissaoService';
import ProgressoService from '../../services/ProgressoService';
import { cores } from '../../theme/cores';
import { avisar, avisarEmBreve } from '../../utils/avisos';
import estilos from './styles';

const icones = {
  trofeus: require('../../../assets/images/home/trofeu-pequeno.png'),
  moedas: require('../../../assets/images/home/moeda.png'),
};

// Monta a frase do que foi ganho. Ex.: "50 troféus e 55 moedas".
function textoDoGanho({ trofeus, moedas }) {
  const partes = [];
  if (trofeus > 0) partes.push(`${trofeus} troféus`);
  if (moedas > 0) partes.push(`${moedas} moedas`);
  return partes.join(' e ');
}

export default function MissoesScreen({ navigation }) {
  const [progresso, setProgresso] = useState(null);
  const [missoes, setMissoes] = useState([]);

  useFocusEffect(
    useCallback(() => {
      ProgressoService.buscar().then(setProgresso);
      MissaoService.listar().then(setMissoes);
    }, []),
  );

  const temRecompensa = missoes.some(
    (missao) => missao.feita && !missao.resgatada,
  );

  function alternar(missao) {
    if (missao.resgatada) {
      avisar('Missão concluída', 'Você já recebeu a recompensa dessa missão.');
      return;
    }
    MissaoService.alternar(missao.id).then(setMissoes);
  }

  async function receber() {
    const ganho = await MissaoService.receberRecompensas();
    setMissoes(await MissaoService.listar());
    setProgresso(await ProgressoService.buscar());
    avisar('Parabéns!', `Você ganhou ${textoDoGanho(ganho)}.`);
  }

  if (!progresso) {
    return <TelaJogo navigation={navigation} />;
  }

  return (
    <TelaJogo navigation={navigation}>
      <BarraTopo
        moedas={progresso.moedas}
        trofeus={progresso.trofeus}
        navigation={navigation}
      />

      <View style={estilos.cabecalho}>
        <BotaoVoltar aoPressionar={() => voltar(navigation)} />
        <TextoDestaque
          texto="MISSÕES DIÁRIAS"
          tamanho={34}
          estilo={estilos.titulo}
        />
      </View>

      <View style={estilos.cartao}>
        <View style={estilos.lista}>
          {missoes.map((missao) => (
            <View key={missao.id}>
              <Pressable
                style={estilos.linhaMissao}
                onPress={() => alternar(missao)}
                accessibilityRole="checkbox"
                accessibilityState={{ checked: missao.feita }}
                accessibilityLabel={missao.texto.replace('\n', ' ')}
              >
                <View style={estilos.caixa}>
                  {missao.feita && (
                    <Feather
                      name="check"
                      size={22}
                      color={cores.fundo}
                      style={estilos.visto}
                    />
                  )}
                </View>
                <View
                  style={[
                    estilos.pilulaMissao,
                    missao.feita && estilos.pilulaFeita,
                  ]}
                >
                  <TextoDestaque texto={missao.texto} tamanho={25} />
                </View>
              </Pressable>

              <View style={estilos.linhaRecompensa}>
                <TextoDestaque
                  texto="RECEBA:"
                  tamanho={20}
                  cor={cores.textoRecompensa}
                  estilo={estilos.receba}
                />
                <Image
                  source={icones[missao.recompensa.tipo]}
                  style={estilos.iconeRecompensa}
                />
                <TextoDestaque
                  texto={missao.recompensa.quantidade}
                  tamanho={25}
                  cor={cores.textoRecompensa}
                />
              </View>
            </View>
          ))}
        </View>

        <Pressable
          style={estilos.botaoQuiz}
          onPress={avisarEmBreve}
          accessibilityRole="button"
        >
          <TextoDestaque texto="RESPONDER QUIZ" tamanho={36} />
        </Pressable>
      </View>

      <Pressable
        style={[estilos.botaoReceber, temRecompensa && estilos.botaoAtivo]}
        onPress={receber}
        disabled={!temRecompensa}
        accessibilityRole="button"
        accessibilityState={{ disabled: !temRecompensa }}
      >
        <TextoDestaque
          texto="RECEBER RECOMPENSAS"
          tamanho={36}
          cor={temRecompensa ? cores.fundo : cores.textoDesativado}
        />
      </Pressable>
    </TelaJogo>
  );
}
