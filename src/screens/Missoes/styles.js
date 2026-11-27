// Estilos da tela de Missões Diárias, com as medidas do protótipo (tela de 402 x 874).
import { StyleSheet } from 'react-native';

import { cores } from '../../theme/cores';
import { sombraPadrao } from '../../theme/sombras';

const estilos = StyleSheet.create({
  cabecalho: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginTop: 40,
    paddingLeft: 10,
  },
  titulo: {
    marginTop: 4,
  },
  cartao: {
    alignSelf: 'center',
    width: 331,
    height: 463,
    marginTop: 13,
    paddingTop: 14,
    paddingHorizontal: 12,
    paddingBottom: 35,
    justifyContent: 'space-between',
    borderRadius: 10,
    backgroundColor: cores.cartaoOpcoes,
  },
  lista: {
    gap: 8,
  },
  linhaMissao: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  caixa: {
    marginLeft: 5,
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: cores.fundo,
  },
  // O visto passa um pouco da caixinha, como no protótipo.
  visto: {
    position: 'absolute',
    top: -6,
    left: -1,
  },
  pilulaMissao: {
    flexShrink: 1,
    paddingTop: 8,
    paddingBottom: 3,
    paddingHorizontal: 5,
    borderRadius: 10,
    backgroundColor: cores.missaoPendente,
  },
  pilulaFeita: {
    backgroundColor: cores.primaria,
  },
  linhaRecompensa: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
    marginTop: 3,
    marginLeft: 33,
  },
  receba: {
    marginTop: 3,
  },
  iconeRecompensa: {
    width: 24,
    height: 24,
    marginLeft: 2,
  },
  botaoQuiz: {
    alignSelf: 'center',
    width: 263,
    height: 54,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 5,
    borderRadius: 10,
    backgroundColor: cores.botaoQuiz,
  },
  botaoReceber: {
    alignSelf: 'center',
    width: 330,
    height: 68,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    marginBottom: 20,
    paddingTop: 5,
    borderRadius: 10,
    backgroundColor: cores.botaoDesativado,
  },
  botaoAtivo: {
    backgroundColor: cores.primaria,
    ...sombraPadrao,
  },
});

export default estilos;
