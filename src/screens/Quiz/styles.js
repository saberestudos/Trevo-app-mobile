// Estilos do Quiz, com as medidas do protótipo (tela de 402 x 874).
import { StyleSheet } from 'react-native';

import { cores } from '../../theme/cores';
import { familias, fonte, fonteQuiz } from '../../theme/fontes';
import { sombraPadrao } from '../../theme/sombras';

const estilos = StyleSheet.create({
  // O quiz tem cabeçalho próprio, de ponta a ponta, sem a barra do topo.
  conteudo: {
    paddingTop: 0,
    paddingHorizontal: 0,
    paddingBottom: 24,
  },
  // Cabeçalho verde-escuro com os cantos de baixo arredondados.
  cabecalho: {
    height: 199,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 16,
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
    backgroundColor: cores.quizCabecalho,
    ...sombraPadrao,
  },
  voltar: {
    position: 'absolute',
    left: 9,
    top: 100,
  },
  subtitulo: {
    marginTop: 2,
    ...fonte(familias.regular, 32),
    color: cores.fundo,
  },
  progresso: {
    flexDirection: 'row',
    gap: 6,
    marginTop: 10,
  },
  segmento: {
    width: 36,
    height: 6,
    borderRadius: 3,
    backgroundColor: cores.segmentoQuiz,
  },
  segmentoFeito: {
    backgroundColor: cores.destaqueAmarelo,
  },
  segmentoAtual: {
    backgroundColor: cores.fundo,
  },
  // Corações dentro de uma pílula clara.
  vidas: {
    alignSelf: 'center',
    flexDirection: 'row',
    gap: 6,
    marginTop: 12,
    paddingVertical: 5,
    paddingHorizontal: 12,
    borderRadius: 18,
    backgroundColor: cores.fundoVidas,
  },
  coracao: {
    width: 25,
    height: 25,
  },
  cartao: {
    alignSelf: 'center',
    width: 307,
    minHeight: 456,
    alignItems: 'center',
    marginTop: 10,
    paddingTop: 20,
    paddingHorizontal: 13,
    paddingBottom: 24,
    borderRadius: 20,
    backgroundColor: cores.fundo,
    ...sombraPadrao,
  },
  pergunta: {
    minHeight: 96,
    ...fonteQuiz(40),
    color: cores.quizCabecalho,
    textAlign: 'center',
  },
  alternativas: {
    gap: 19,
    marginTop: 12,
  },
  alternativa: {
    width: 255,
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingLeft: 8,
    paddingRight: 10,
    borderRadius: 14,
    backgroundColor: cores.botaoQuiz,
    ...sombraPadrao,
  },
  alternativaCerta: {
    backgroundColor: cores.quizCerto,
  },
  alternativaErrada: {
    backgroundColor: cores.quizErrado,
  },
  alternativaApagada: {
    opacity: 0.5,
  },
  // Letra num círculo branco, com a cor da alternativa.
  circulo: {
    width: 46,
    height: 46,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 23,
    backgroundColor: cores.fundo,
  },
  letra: {
    marginTop: 4,
    ...fonteQuiz(36),
    color: cores.botaoQuiz,
  },
  letraCerta: {
    color: cores.quizCerto,
  },
  letraErrada: {
    color: cores.quizErrado,
  },
  textoAlternativa: {
    flex: 1,
    ...fonteQuiz(20),
    color: cores.fundo,
  },
  textoAlternativaLongo: {
    ...fonteQuiz(16),
  },
  botao: {
    alignSelf: 'center',
    width: 255,
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    marginTop: 22,
    borderRadius: 14,
    backgroundColor: cores.quizEscuro,
    ...sombraPadrao,
  },
  botaoTentar: {
    marginTop: 22,
  },
  textoBotao: {
    marginTop: 3,
    ...fonteQuiz(32),
    color: cores.fundo,
  },
});

export default estilos;
