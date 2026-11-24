// Espaçamentos da tela "Código", medidos no protótipo.
import { StyleSheet } from 'react-native';

import { cores } from '../../theme/cores';
import { familias, fonte } from '../../theme/fontes';

const estilos = StyleSheet.create({
  titulo: {
    marginTop: 28,
  },
  subtitulo: {
    marginTop: 5,
    ...fonte(familias.leve, 14),
    color: cores.texto,
    textAlign: 'center',
  },
  codigo: {
    marginTop: 45,
  },
  botao: {
    marginTop: 47,
  },
});

export default estilos;
