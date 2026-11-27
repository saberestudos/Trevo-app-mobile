// Tela inicial (Home) do TREVO.
// Requisito atendido: RF 05 (contador de dias sem apostar).
// Moedas, troféus e nível são a parte de gamificação, por enquanto com dados simulados.
import { useCallback, useState } from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

import AvatarPersonalizado from '../../components/AvatarPersonalizado';
import BarraNivel from '../../components/BarraNivel';
import BarraTopo from '../../components/BarraTopo';
import ModalPresente from '../../components/ModalPresente';
import TelaJogo from '../../components/TelaJogo';
import TextoDestaque from '../../components/TextoDestaque';
import AvatarService from '../../services/AvatarService';
import ProgressoService, {
  MOEDAS_BOAS_VINDAS,
} from '../../services/ProgressoService';
import { avisarEmBreve } from '../../utils/avisos';
import estilos from './styles';

// Antes da primeira missão, comemora o começo; depois, mostra o progresso.
const MENSAGEM_INICIO = 'VOCÊ DEU O\nPRIMEIRO PASSO!';
const MENSAGEM_PROGRESSO = 'BOA! VOCÊ ESTÁ\nINDO BEM!';

const imagens = {
  investimentos: require('../../../assets/images/home/investimentos.png'),
  missoes: require('../../../assets/images/home/missoes.png'),
};

export default function HomeScreen({ navigation }) {
  const [progresso, setProgresso] = useState(null);
  const [visual, setVisual] = useState(null);
  const [presenteVisivel, setPresenteVisivel] = useState(false);
  const [premioNivel, setPremioNivel] = useState(null);

  // Recarrega sempre que a Home aparece de novo
  // (por exemplo, depois de trocar a roupa ou de gastar moedas na loja).
  // Na primeira vez, a pessoa ganha o presente de boas-vindas.
  useFocusEffect(
    useCallback(() => {
      // Na ordem: presente de boas-vindas, prêmio de nível novo e o progresso atualizado.
      async function carregar() {
        if (await ProgressoService.receberBonusBoasVindas()) {
          setPresenteVisivel(true);
        }
        const premio = await ProgressoService.receberPremioDeNivel();
        if (premio) setPremioNivel(premio);
        setProgresso(await ProgressoService.buscar());
      }
      carregar();
      AvatarService.buscar().then(setVisual);
    }, []),
  );

  return (
    <TelaJogo navigation={navigation}>
      {progresso && (
        <>
          <BarraTopo
            moedas={progresso.moedas}
            trofeus={progresso.trofeus}
            navigation={navigation}
          />

          <View style={estilos.cartaoNivel}>
            <TextoDestaque
              texto={
                progresso.jaFezMissao() ? MENSAGEM_PROGRESSO : MENSAGEM_INICIO
              }
              tamanho={35}
              centralizado
            />

            <View style={estilos.linhaNiveis}>
              <Text style={estilos.nivel}>LEVEL {progresso.nivelAtual()}</Text>
              <Text style={estilos.nivel}>
                LEVEL {progresso.proximoNivel()}
              </Text>
            </View>

            <BarraNivel
              porcentagem={progresso.porcentagemDoNivel()}
              mostrarTexto={progresso.jaFezMissao()}
            />
          </View>

          <View style={estilos.meio}>
            <View style={estilos.avatar}>
              {visual && (
                <AvatarPersonalizado
                  visual={visual}
                  estilo={estilos.imagemAvatar}
                />
              )}
            </View>

            <Text style={estilos.rotuloDias}>DIAS SEM APOSTAS</Text>
            <View style={estilos.caixaDias}>
              <Text style={estilos.numeroDias}>
                {progresso.diasSemApostar()}
              </Text>
            </View>

            <Pressable
              style={estilos.botaoInvestimentos}
              onPress={avisarEmBreve}
              accessibilityLabel="Investimentos"
            >
              <Image
                source={imagens.investimentos}
                style={estilos.investimentos}
              />
            </Pressable>

            <Pressable
              style={estilos.botaoMissoes}
              onPress={() => navigation.navigate('Missoes')}
              accessibilityLabel="Missões"
            >
              <Image source={imagens.missoes} style={estilos.missoes} />
            </Pressable>
          </View>
        </>
      )}

      <ModalPresente
        visivel={presenteVisivel}
        moedas={MOEDAS_BOAS_VINDAS}
        titulo="Parabéns por chegar até aqui!"
        texto="Começar já é uma conquista. Use essas moedas na Loja do Avatar."
        aoFechar={() => setPresenteVisivel(false)}
      />

      {/* Prêmio de nível: aparece depois do presente de boas-vindas, se os dois vierem juntos. */}
      <ModalPresente
        visivel={Boolean(premioNivel) && !presenteVisivel}
        moedas={premioNivel?.moedas ?? 0}
        titulo={`Você chegou ao nível ${premioNivel?.nivel}!`}
        texto="Parabéns pela evolução! Continue fazendo as missões e o quiz para subir mais."
        aoFechar={() => setPremioNivel(null)}
      />
    </TelaJogo>
  );
}
