// Tela da Trilha do Saber: conteúdos curtos de educação financeira.
// Aberta pelo botão "TRILHA DO SABER" das Opções. "Continuar" leva ao quiz,
// para a pessoa praticar o que acabou de ler.
import { Pressable, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

import BotaoVoltar, { voltar } from '../../components/BotaoVoltar';
import TelaJogo from '../../components/TelaJogo';
import TextoDestaque from '../../components/TextoDestaque';
import { CONTEUDOS_TRILHA } from '../../catalogos/trilhaSaber';
import { cores } from '../../theme/cores';
import estilos from './styles';

export default function TrilhaScreen({ navigation }) {
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
        <TextoDestaque texto="TRILHA DO SABER" tamanho={40} centralizado />
        <Text style={estilos.subtitulo}>Aprofunde seus conhecimentos</Text>
      </View>

      <View style={estilos.lista}>
        {CONTEUDOS_TRILHA.map((conteudo) => (
          <View key={conteudo.titulo} style={estilos.cartao}>
            <Text style={estilos.titulo}>{conteudo.titulo}</Text>
            <Text style={estilos.texto}>{conteudo.texto}</Text>
          </View>
        ))}
      </View>

      <Pressable
        style={estilos.botao}
        onPress={() => navigation.navigate('Quiz')}
        accessibilityRole="button"
      >
        <TextoDestaque texto="CONTINUAR" tamanho={32} />
        <Feather name="arrow-right" size={24} color={cores.fundo} />
      </Pressable>
    </TelaJogo>
  );
}
