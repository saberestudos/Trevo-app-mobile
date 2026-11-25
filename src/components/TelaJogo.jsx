// Estrutura das telas de jogo (Home, Troféus, Minha Conta):
// fundo verde em degradê, conteúdo com rolagem e a barra de navegação embaixo.
import { ScrollView, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';

import BarraNavegacao from './BarraNavegacao';
import { avisarEmBreve } from '../utils/avisos';
import { cores } from '../theme/cores';

// Abas da barra de baixo que já têm tela. As outras mostram "Em breve".
const ABAS_PRONTAS = ['Home', 'Trofeus'];

export default function TelaJogo({ navigation, children }) {
  function abrirAba(aba) {
    if (ABAS_PRONTAS.includes(aba)) {
      navigation.navigate(aba);
    } else {
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
      <ScrollView contentContainerStyle={estilos.conteudo}>
        {children}
      </ScrollView>
      <BarraNavegacao aoSelecionar={abrirAba} />
    </LinearGradient>
  );
}

const estilos = StyleSheet.create({
  tela: {
    flex: 1,
  },
  conteudo: {
    flexGrow: 1,
    paddingTop: 65,
    paddingHorizontal: 16,
  },
});
