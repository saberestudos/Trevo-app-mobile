// Estilos repetidos nas telas de acesso (Login, Cadastro, Esqueceu a senha e Código).
// As medidas seguem o protótipo no Figma (tela de 402 x 874).
import { StyleSheet } from 'react-native';

import { cores } from '../theme/cores';
import { familias, fonte } from '../theme/fontes';

const estilosAcesso = StyleSheet.create({
  conteudo: {
    paddingTop: 98,
    paddingHorizontal: 39,
    paddingBottom: 39,
  },
  texto: {
    ...fonte(familias.regular, 15),
    color: cores.texto,
  },
  link: {
    ...fonte(familias.regular, 15),
    color: cores.link,
    textDecorationLine: 'underline',
  },
  linhaTextoComLink: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titulo: {
    ...fonte(familias.semiNegrito, 20),
    color: cores.texto,
    textAlign: 'center',
  },
  mensagemErro: {
    marginTop: 4,
    ...fonte(familias.regular, 13),
    color: cores.erro,
  },
  espacador: {
    flex: 1,
  },
  voltar: {
    ...fonte(familias.media, 20),
    color: cores.texto,
    textAlign: 'center',
  },
});

export default estilosAcesso;
