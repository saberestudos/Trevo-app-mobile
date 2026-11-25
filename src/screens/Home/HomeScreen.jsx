// Tela inicial (Home) do TREVO.
// Requisito atendido: RF 05 (contador de dias sem apostar).
// Moedas, troféus e nível são a parte de gamificação, por enquanto com dados simulados.
import { useEffect, useState } from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';

import BarraNavegacao from '../../components/BarraNavegacao';
import BarraNivel from '../../components/BarraNivel';
import Pilula from '../../components/Pilula';
import TextoDestaque from '../../components/TextoDestaque';
import ProgressoService from '../../services/ProgressoService';
import { avisarEmBreve } from '../../utils/avisos';
import { cores } from '../../theme/cores';
import estilos from './styles';

// Antes da primeira missão, comemora o começo; depois, mostra o progresso.
const MENSAGEM_INICIO = 'VOCÊ DEU O\nPRIMEIRO PASSO!';
const MENSAGEM_PROGRESSO = 'BOA! VOCÊ ESTÁ\nINDO BEM!';

const imagens = {
  moeda: require('../../../assets/images/home/moeda.png'),
  trofeu: require('../../../assets/images/home/trofeu-pequeno.png'),
  engrenagem: require('../../../assets/images/home/engrenagem.png'),
  avatar: require('../../../assets/images/home/avatar.png'),
  investimentos: require('../../../assets/images/home/investimentos.png'),
  missoes: require('../../../assets/images/home/missoes.png'),
};

export default function HomeScreen() {
  const [progresso, setProgresso] = useState(null);

  useEffect(() => {
    ProgressoService.buscar().then(setProgresso);
  }, []);

  function abrirAba(aba) {
    if (aba !== 'Home') {
      avisarEmBreve();
    }
  }

  return (
    <LinearGradient
      colors={[cores.homeFundoInicio, cores.homeFundoFim]}
      locations={[0.428, 1]}
      style={estilos.tela}
    >
      <StatusBar style="light" />

      {progresso && (
        <View style={estilos.conteudo}>
          <View style={estilos.topo}>
            <Pilula
              icone={imagens.moeda}
              texto={progresso.moedas}
              descricao="Moedas"
              aoPressionar={avisarEmBreve}
            />
            <Pilula
              texto="LOJA"
              descricao="Loja"
              aoPressionar={avisarEmBreve}
            />
            <Pilula
              icone={imagens.trofeu}
              texto={progresso.trofeus}
              descricao="Troféus"
              aoPressionar={avisarEmBreve}
            />
            <Pressable onPress={avisarEmBreve} accessibilityLabel="Opções">
              <Image source={imagens.engrenagem} style={estilos.engrenagem} />
            </Pressable>
          </View>

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
            <Image
              source={imagens.avatar}
              style={estilos.avatar}
              resizeMode="contain"
              accessibilityLabel="Seu avatar"
            />

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
              onPress={avisarEmBreve}
              accessibilityLabel="Missões"
            >
              <Image source={imagens.missoes} style={estilos.missoes} />
            </Pressable>
          </View>
        </View>
      )}

      <BarraNavegacao aoSelecionar={abrirAba} />
    </LinearGradient>
  );
}
