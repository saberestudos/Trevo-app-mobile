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

      {/* Título: selo com coroa, nome do pacote, frase e preço. */}
      <View style={estilos.destaque}>
        <View style={estilos.linhaSelo}>
          <MaterialCommunityIcons
            name="leaf"
            size={22}
            color={cores.destaqueAmarelo}
            style={estilos.folhaEsquerda}
          />
          <LinearGradient
            colors={[cores.ouroInicio, cores.ouroFim]}
            style={estilos.selo}
          >
            <View style={estilos.coroa}>
              <MaterialCommunityIcons
                name="crown"
                size={34}
                color={cores.cartaoEscuro}
              />
            </View>
          </LinearGradient>
          <MaterialCommunityIcons
            name="leaf"
            size={22}
            color={cores.destaqueAmarelo}
            style={estilos.folhaDireita}
          />
        </View>

        <TextoDestaque texto="PACOTE PREMIUM" tamanho={44} centralizado />
        <Text style={estilos.frase}>
          Desbloqueie toda a sua jornada financeira
        </Text>

        <View style={estilos.linhaPreco}>
          <TextoDestaque texto={PRECO_MENSAL} tamanho={40} />
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
