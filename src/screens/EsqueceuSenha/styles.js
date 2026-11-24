// Espaçamentos da tela "Esqueceu a senha?", medidos no protótipo.
import { StyleSheet } from 'react-native';

import { cores } from '../../theme/cores';
import { familias, fonte } from '../../theme/fontes';

const estilos = StyleSheet.create({
  cabecalho: {
    marginTop: 28,
  },
  subtitulo: {
    ...fonte(familias.leve, 16),
    color: cores.texto,
    textAlign: 'center',
  },
  campo: {
    marginTop: 49,
  },
  botao: {
    marginTop: 43,
  },
});

export default estilos;
