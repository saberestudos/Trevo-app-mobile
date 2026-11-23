// Estilos da tela de Login, separados para deixar o componente mais limpo.
import { StyleSheet } from 'react-native';

import { cores } from '../../theme/cores';
import { fontes } from '../../theme/fontes';

const estilos = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: cores.fundo,
  },
  conteudo: {
    flexGrow: 1,
    paddingHorizontal: 32,
    paddingTop: 40,
    paddingBottom: 24,
  },
  logo: {
    width: 180,
    height: 192,
    alignSelf: 'center',
    marginBottom: 48,
  },
  linhaOpcoes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  linhaCadastro: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
  },
  texto: {
    color: cores.texto,
    fontSize: fontes.normal,
  },
  link: {
    color: cores.link,
    fontSize: fontes.normal,
    textDecorationLine: 'underline',
  },
  divisor: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 56,
    marginBottom: 24,
  },
  linhaDivisor: {
    flex: 1,
    height: 1,
    backgroundColor: cores.divisor,
  },
  textoDivisor: {
    marginHorizontal: 10,
    color: cores.textoSecundario,
    fontSize: fontes.normal,
  },
  redesSociais: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 32,
  },
  iconeGoogle: {
    width: 34,
    height: 34,
  },
});

export default estilos;
