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
  meio: {
    flex: 1,
    justifyContent: 'space-evenly',
    gap: 14,
    paddingVertical: 16,
  },
  // Uma linha só: 20 cabe na largura da tela (330).
  titulo: {
    ...fonte(familias.semiNegrito, 20),
    color: cores.texto,
    textAlign: 'center',
  },
  cartao: {},
  rotulo: {
    ...fonte(familias.media, 14),
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
  // Bolinhas dos dias: contorno cinza claro; selecionado fica verde cheio.
  dia: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1.5,
    borderRadius: 20,
    borderColor: cores.divisor,
    backgroundColor: cores.fundo,
  },
  diaSelecionado: {
    borderColor: cores.primaria,
    backgroundColor: cores.primaria,
  },
  siglaDia: {
    ...fonte(familias.semiNegrito, 12),
    color: cores.textoSecundario,
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
    marginBottom: 12,
    ...fonte(familias.media, 14),
    color: cores.texto,
    textAlign: 'center',
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
