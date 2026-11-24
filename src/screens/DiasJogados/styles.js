// Estilos da tela "Quantos dias por semana jogou?", medidos no protótipo.
import { StyleSheet } from 'react-native';

import { cores } from '../../theme/cores';
import { familias, fonte } from '../../theme/fontes';

const estilos = StyleSheet.create({
  topo: {
    height: 127,
    backgroundColor: cores.fundo,
  },
  conteudo: {
    flexGrow: 1,
    paddingHorizontal: 36,
    paddingBottom: 39,
    backgroundColor: cores.fundoCinza,
  },
  titulo: {
    marginTop: 30,
    ...fonte(familias.semiNegrito, 20),
    color: cores.texto,
    textAlign: 'center',
  },
  rotulo: {
    ...fonte(familias.regular, 14),
    color: cores.texto,
  },
  rotuloDias: {
    marginTop: 37,
  },
  linhaDias: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  dia: {
    width: 43,
    height: 43,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: cores.primaria,
  },
  diaSelecionado: {
    backgroundColor: cores.primaria,
  },
  siglaDia: {
    ...fonte(familias.semiNegrito, 24),
    color: cores.primaria,
  },
  siglaDiaSelecionado: {
    color: cores.fundo,
  },
  rotuloHorarios: {
    marginTop: 8,
  },
  linhaHorario: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 9,
  },
  linhaHorarioSeguinte: {
    marginTop: 15,
  },
  ate: {
    marginHorizontal: 20,
    ...fonte(familias.regular, 14),
    color: cores.texto,
  },
  mensagemErro: {
    marginTop: 4,
    ...fonte(familias.regular, 13),
    color: cores.erro,
  },
  textoQuantidade: {
    marginTop: 18,
    marginBottom: 6,
    ...fonte(familias.regular, 16),
    color: cores.texto,
    textAlign: 'center',
  },
  espacador: {
    flex: 1,
    minHeight: 24,
  },
  botaoContinuar: {
    width: 291,
    height: 81,
    alignSelf: 'center',
  },
  voltar: {
    marginTop: 15,
    ...fonte(familias.media, 20),
    color: cores.texto,
    textAlign: 'center',
  },
});

export default estilos;
