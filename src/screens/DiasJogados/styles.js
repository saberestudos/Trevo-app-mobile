// Estilos da tela "Quantos dias por semana jogou?" (versão com cartões).
import { StyleSheet } from 'react-native';

import { cores } from '../../theme/cores';
import { familias, fonte } from '../../theme/fontes';

const estilos = StyleSheet.create({
  conteudo: {
    flexGrow: 1,
    paddingTop: 62,
    paddingHorizontal: 36,
    paddingBottom: 39,
    backgroundColor: cores.fundoCinza,
  },
  titulo: {
    marginTop: 26,
    ...fonte(familias.semiNegrito, 20),
    color: cores.texto,
    textAlign: 'center',
  },
  cartao: {
    marginTop: 14,
  },
  rotulo: {
    ...fonte(familias.regular, 14),
    color: cores.texto,
  },
  dica: {
    marginTop: 3,
    ...fonte(familias.regular, 12),
    color: cores.textoDica,
  },
  linhaDias: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  dia: {
    width: 40,
    height: 40,
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
    ...fonte(familias.semiNegrito, 22),
    color: cores.primaria,
  },
  siglaDiaSelecionado: {
    color: cores.fundo,
  },
  linhaHorario: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 9,
  },
  linhaHorarioSeguinte: {
    marginTop: 12,
  },
  ate: {
    marginHorizontal: 20,
    ...fonte(familias.regular, 14),
    color: cores.texto,
  },
  mensagemErro: {
    marginTop: 6,
    ...fonte(familias.regular, 13),
    color: cores.erro,
  },
  textoQuantidade: {
    marginBottom: 10,
    ...fonte(familias.regular, 16),
    color: cores.texto,
    textAlign: 'center',
  },
  espacador: {
    flex: 1,
    minHeight: 24,
  },
  botaoContinuar: {
    height: 64,
  },
  voltar: {
    marginTop: 15,
    ...fonte(familias.media, 20),
    color: cores.texto,
    textAlign: 'center',
  },
});

export default estilos;
