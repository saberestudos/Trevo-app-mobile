// Estilos do chat com a Sofia, com as medidas do protótipo (tela de 402 x 874).
import { StyleSheet } from 'react-native';

import { cores } from '../../theme/cores';
import { familias, fonte } from '../../theme/fontes';
import { sombraPadrao } from '../../theme/sombras';

const estilos = StyleSheet.create({
  tela: {
    flex: 1,
  },
  cabecalho: {
    height: 167,
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 6,
    paddingLeft: 9,
    paddingBottom: 16,
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
    backgroundColor: cores.quizCabecalho,
    ...sombraPadrao,
  },
  foto: {
    width: 76,
    height: 76,
    borderRadius: 38,
  },
  status: {
    ...fonte(familias.regular, 18),
    color: cores.fundo,
  },
  corpo: {
    flex: 1,
  },
  lista: {
    gap: 12,
    paddingTop: 20,
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  linhaSofia: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 8,
    maxWidth: 320,
  },
  fotoPequena: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  // Sofia: balão verde com sombra suave e o canto de baixo "apontando" para a foto.
  balaoSofia: {
    flexShrink: 1,
    paddingTop: 8,
    paddingHorizontal: 14,
    paddingBottom: 6,
    borderRadius: 18,
    borderBottomLeftRadius: 4,
    backgroundColor: cores.balaoSofia,
    ...sombraPadrao,
  },
  nomeSofia: {
    marginBottom: 2,
    ...fonte(familias.semiNegrito, 13),
    color: cores.destaqueAmarelo,
  },
  textoSofia: {
    ...fonte(familias.regular, 15),
    lineHeight: 21,
    color: cores.fundo,
  },
  // A pessoa: balão verde-escuro translúcido à direita (sem fundo branco).
  balaoPessoa: {
    alignSelf: 'flex-end',
    maxWidth: 260,
    paddingTop: 8,
    paddingHorizontal: 14,
    paddingBottom: 6,
    borderRadius: 18,
    borderBottomRightRadius: 4,
    backgroundColor: cores.balaoPessoa,
  },
  textoPessoa: {
    ...fonte(familias.regular, 15),
    lineHeight: 21,
    color: cores.fundo,
  },
  hora: {
    alignSelf: 'flex-end',
    marginTop: 2,
    ...fonte(familias.regular, 11),
    color: cores.horaMensagem,
  },
  balaoDigitando: {
    paddingVertical: 12,
  },
  pontos: {
    flexDirection: 'row',
    gap: 4,
  },
  ponto: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: cores.horaMensagem,
  },
  linhaEnvio: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  campo: {
    flex: 1,
    height: 48,
    paddingHorizontal: 14,
    borderRadius: 10,
    backgroundColor: cores.fundo,
    ...fonte(familias.regular, 16),
    color: cores.texto,
    outlineStyle: 'none',
  },
  enviar: {
    width: 57,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: cores.botaoEnviar,
  },
  enviarApagado: {
    opacity: 0.6,
  },
});

export default estilos;
