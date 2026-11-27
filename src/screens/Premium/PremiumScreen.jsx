// Tela do Pacote Premium: benefícios e botão de assinar.
// Aberta pelo botão "PLANO PREMIUM" das Opções. O pagamento ainda não existe.
import { useCallback, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import BarraTopo from '../../components/BarraTopo';
import BotaoVoltar, { voltar } from '../../components/BotaoVoltar';
import TelaJogo from '../../components/TelaJogo';
import TextoDestaque from '../../components/TextoDestaque';
import ProgressoService from '../../services/ProgressoService';
import { cores } from '../../theme/cores';
import { avisar } from '../../utils/avisos';
import estilos from './styles';

const PRECO_MENSAL = 'R$ 19,90';

// Benefícios na ordem do protótipo (\n quebra a linha, como no protótipo).
const BENEFICIOS = [
  'SEM ANÚNCIOS',
  'BLOQUEIO DE APPS E SITES\nILIMITADO',
  'CONTEÚDOS EXCLUSIVOS DE\nEDUCAÇÃO FINANCEIRA',
  'SUPORTE COM IA ILIMITADO',
  'VIDAS ILIMITADAS NO QUIZ',
  'TRILHA DE INVESTIMENTOS',
];

export default function PremiumScreen({ navigation }) {
  const [progresso, setProgresso] = useState(null);

  useFocusEffect(
    useCallback(() => {
      ProgressoService.buscar().then(setProgresso);
    }, []),
  );

  function adquirir() {
    avisar('Em breve', 'O pagamento do Pacote Premium ainda vai ser liberado.');
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

      <BotaoVoltar
        aoPressionar={() => voltar(navigation)}
        estilo={estilos.voltar}
      />

      {/* Título num cartão branco, com o selo da coroa encaixado em cima. */}
      <View style={estilos.cartaoTitulo}>
        <MaterialCommunityIcons
          name="star-four-points"
          size={16}
          color={cores.destaqueAmarelo}
          style={[estilos.brilho, estilos.brilhoEsquerdo]}
        />
        <MaterialCommunityIcons
          name="star-four-points"
          size={16}
          color={cores.destaqueAmarelo}
          style={[estilos.brilho, estilos.brilhoDireito]}
        />
        <LinearGradient
          colors={[cores.ouroInicio, cores.ouroFim]}
          style={estilos.selo}
        >
          <MaterialCommunityIcons
            name="crown"
            size={36}
            color={cores.cartaoEscuro}
          />
        </LinearGradient>

        <TextoDestaque
          texto="PACOTE PREMIUM"
          tamanho={42}
          cor={cores.primaria}
          centralizado
        />
        <Text style={estilos.frase}>
          Desbloqueie toda a sua jornada financeira
        </Text>

        <View style={estilos.caixaPreco}>
          <TextoDestaque
            texto={PRECO_MENSAL}
            tamanho={36}
            cor={cores.primaria}
          />
          <Text style={estilos.porMes}>/ mês</Text>
        </View>
      </View>

      <View style={estilos.lista}>
        {BENEFICIOS.map((beneficio) => (
          <View key={beneficio} style={estilos.beneficio}>
            <MaterialCommunityIcons
              name="check-circle"
              size={20}
              color={cores.destaqueAmarelo}
            />
            <TextoDestaque
              texto={beneficio}
              tamanho={22}
              estilo={estilos.textoBeneficio}
            />
          </View>
        ))}
      </View>

      <Pressable
        style={estilos.botao}
        onPress={adquirir}
        accessibilityRole="button"
      >
        <TextoDestaque texto="ADQUIRIR AGORA" tamanho={36} />
      </Pressable>
    </TelaJogo>
  );
}
