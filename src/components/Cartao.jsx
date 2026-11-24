// Cartão branco de cantos arredondados, usado para agrupar conteúdos na tela.
import { StyleSheet, View } from 'react-native';

import { cores } from '../theme/cores';

export default function Cartao({ children, estilo }) {
  return <View style={[estilos.cartao, estilo]}>{children}</View>;
}

const estilos = StyleSheet.create({
  cartao: {
    paddingTop: 14,
    paddingHorizontal: 14,
    paddingBottom: 16,
    borderRadius: 16,
    backgroundColor: cores.fundo,
    shadowColor: cores.texto,
    shadowOpacity: 0.05,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 1,
  },
});
