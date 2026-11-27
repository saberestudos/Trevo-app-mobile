// Fonte do protótipo (Inter) e seus pesos.
// Os nomes abaixo são os mesmos carregados no App.js.
export const familias = {
  leve: 'Inter_300Light',
  regular: 'Inter_400Regular',
  media: 'Inter_500Medium',
  semiNegrito: 'Inter_600SemiBold',
  destaque: 'HIGHSENS',
  quiz: 'BebasNeue_400Regular',
};

// Monta o estilo de texto com a altura de linha "normal" do Figma
// para a Inter (cerca de 1,21 vezes o tamanho da fonte).
export function fonte(familia, tamanho) {
  return {
    fontFamily: familia,
    fontSize: tamanho,
    lineHeight: Math.round(tamanho * 1.21),
  };
}

// Fonte de destaque da Home (HIGHSENS). Nela, a altura de linha "normal"
// do Figma é igual ao tamanho da fonte.
export function fonteDestaque(tamanho) {
  return {
    fontFamily: familias.destaque,
    fontSize: tamanho,
    lineHeight: tamanho,
  };
}

// Fonte das perguntas do quiz (Bebas Neue), com a altura de linha "normal" do Figma.
export function fonteQuiz(tamanho) {
  return {
    fontFamily: familias.quiz,
    fontSize: tamanho,
    lineHeight: Math.round(tamanho * 1.2),
  };
}
