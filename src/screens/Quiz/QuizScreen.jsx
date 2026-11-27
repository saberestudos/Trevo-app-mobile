// Tela do Quiz de educação financeira.
// Acertou: a alternativa fica verde e aparece "Continuar".
// Errou: fica vermelha, perde uma vida (coração) e aparece "Tentar novamente".
// Ao terminar todas as perguntas, a missão "Jogue o quiz" fica feita.
import { useCallback, useState } from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

import BotaoVoltar, { voltar } from '../../components/BotaoVoltar';
import TelaJogo from '../../components/TelaJogo';
import TextoDestaque from '../../components/TextoDestaque';
import {
  PERGUNTAS_QUIZ,
  PONTOS_POR_ACERTO,
  VIDAS_POR_DIA,
} from '../../catalogos/perguntasQuiz';
import QuizService from '../../services/QuizService';
import { cores } from '../../theme/cores';
import { avisar } from '../../utils/avisos';
import estilos from './styles';

const LETRAS = ['A', 'B', 'C', 'D'];
// Alternativas mais compridas usam letra menor, como no protótipo.
const TEXTO_LONGO = 40;

const coracoes = {
  cheio: require('../../../assets/images/quiz/coracao.png'),
  vazio: require('../../../assets/images/quiz/coracao-vazio.png'),
};

export default function QuizScreen({ navigation }) {
  const [indice, setIndice] = useState(0);
  const [escolhida, setEscolhida] = useState(null);
  const [vidas, setVidas] = useState(VIDAS_POR_DIA);
  const [acertos, setAcertos] = useState(0);
  const [valePontos, setValePontos] = useState(true);

  useFocusEffect(
    useCallback(() => {
      QuizService.buscarVidas().then(setVidas);
      QuizService.valePontos().then(setValePontos);
    }, []),
  );

  const pergunta = PERGUNTAS_QUIZ[indice];
  const respondeu = escolhida !== null;
  const acertou = respondeu && escolhida === pergunta.correta;
  const ultima = indice === PERGUNTAS_QUIZ.length - 1;

  async function responder(opcao) {
    if (respondeu) return;
    if (vidas === 0) {
      avisarSemVidas();
      return;
    }

    setEscolhida(opcao);
    if (opcao === pergunta.correta) {
      setAcertos(acertos + 1);
      if (valePontos) await QuizService.registrarAcerto();
    } else {
      setVidas(await QuizService.perderVida());
    }
  }

  function avisarSemVidas() {
    avisar(
      'Suas vidas acabaram',
      'Volte amanhã para jogar de novo. No Pacote Premium, as vidas são ilimitadas.',
    );
  }

  async function continuar() {
    if (!acertou) {
      // Tentar novamente: mesma pergunta, sem resposta marcada.
      setEscolhida(null);
      if (vidas === 0) avisarSemVidas();
      return;
    }
    if (!ultima) {
      setIndice(indice + 1);
      setEscolhida(null);
      return;
    }

    await QuizService.concluir();
    avisar(
      'Quiz concluído!',
      valePontos
        ? `Você ganhou ${acertos * PONTOS_POR_ACERTO} pontos. A missão "Jogue o quiz" foi concluída: receba a recompensa nas Missões.`
        : 'Você já tinha feito o quiz hoje, então esta rodada não vale pontos.',
    );
    voltar(navigation);
  }

  function corDaAlternativa(opcao) {
    if (opcao !== escolhida) return null;
    return acertou ? estilos.alternativaCerta : estilos.alternativaErrada;
  }

  let subtitulo = `${indice + 1}/${PERGUNTAS_QUIZ.length}`;
  if (respondeu) subtitulo = acertou ? 'VOCÊ ACERTOU!' : 'VOCÊ ERROU!';

  return (
    <TelaJogo
      navigation={navigation}
      fundo={[cores.quizFundoInicio, cores.quizFundoFim]}
      estiloConteudo={estilos.conteudo}
    >
      <View style={estilos.cabecalho}>
        <BotaoVoltar
          aoPressionar={() => voltar(navigation)}
          estilo={estilos.voltar}
        />
        <TextoDestaque texto="QUIZ" tamanho={40} centralizado />
        <Text style={estilos.subtitulo}>{subtitulo}</Text>
      </View>

      <View style={estilos.vidas}>
        {Array.from({ length: VIDAS_POR_DIA }, (_, posicao) => (
          <Image
            key={posicao}
            source={posicao < vidas ? coracoes.cheio : coracoes.vazio}
            style={estilos.coracao}
          />
        ))}
      </View>

      <View style={estilos.cartao}>
        <Text style={estilos.pergunta}>
          {`${indice + 1}. ${pergunta.pergunta}`}
        </Text>

        <View style={estilos.alternativas}>
          {pergunta.alternativas.map((texto, opcao) => (
            <Pressable
              key={texto}
              style={[estilos.alternativa, corDaAlternativa(opcao)]}
              onPress={() => responder(opcao)}
              accessibilityRole="button"
              accessibilityLabel={`${LETRAS[opcao]}: ${texto}`}
            >
              <View style={estilos.circulo}>
                <Text style={estilos.letra}>{LETRAS[opcao]}</Text>
              </View>
              <Text
                style={[
                  estilos.textoAlternativa,
                  texto.length > TEXTO_LONGO && estilos.textoAlternativaLongo,
                ]}
                numberOfLines={2}
              >
                {texto}
              </Text>
            </Pressable>
          ))}
        </View>
      </View>

      {respondeu && (
        <Pressable
          style={estilos.botao}
          onPress={continuar}
          accessibilityRole="button"
        >
          <Text style={estilos.textoBotao}>
            {acertou ? 'CONTINUAR' : 'TENTAR NOVAMENTE'}
          </Text>
        </Pressable>
      )}
    </TelaJogo>
  );
}
