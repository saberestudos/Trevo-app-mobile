// Catálogo do avatar: as camadas de imagem e as categorias da vitrine
// da tela Minha Conta (RF 09).
// Todas as camadas têm o mesmo tamanho e o boneco no mesmo lugar, então
// basta empilhar uma em cima da outra.
// Obs.: o require do React Native precisa do caminho escrito por inteiro.

// Corpo sem o alto da cabeça e sem as pernas (essas partes vêm das camadas abaixo).
export const CORPO = require('../../assets/images/avatar/corpo.png');

// Alto da cabeça: cabelo ou chapéu. "padrao" é sem chapéu.
export const CABECAS = {
  padrao: require('../../assets/images/avatar/cabecas/padrao.png'),
  bone: require('../../assets/images/avatar/cabecas/bone.png'),
  chapeu: require('../../assets/images/avatar/cabecas/chapeu.png'),
  'chapeu-mago': require('../../assets/images/avatar/cabecas/chapeu-mago.png'),
  coroa: require('../../assets/images/avatar/cabecas/coroa.png'),
  viking: require('../../assets/images/avatar/cabecas/viking.png'),
};

// A camiseta vermelha já faz parte do corpo; as outras cores vão por cima.
export const CAMISETAS = {
  azul: require('../../assets/images/avatar/camisetas/azul.png'),
  verde: require('../../assets/images/avatar/camisetas/verde.png'),
  amarela: require('../../assets/images/avatar/camisetas/amarela.png'),
  preta: require('../../assets/images/avatar/camisetas/preta.png'),
  roxa: require('../../assets/images/avatar/camisetas/roxa.png'),
  laranja: require('../../assets/images/avatar/camisetas/laranja.png'),
};

export const PERNAS = {
  jeans: require('../../assets/images/avatar/pernas/jeans.png'),
  'bermuda-vermelha': require('../../assets/images/avatar/pernas/bermuda-vermelha.png'),
  'bermuda-azul': require('../../assets/images/avatar/pernas/bermuda-azul.png'),
  'bermuda-verde': require('../../assets/images/avatar/pernas/bermuda-verde.png'),
  'bermuda-preta': require('../../assets/images/avatar/pernas/bermuda-preta.png'),
};

export const OCULOS = {
  preto: require('../../assets/images/avatar/oculos/preto.png'),
  amarelo: require('../../assets/images/avatar/oculos/amarelo.png'),
  vermelho: require('../../assets/images/avatar/oculos/vermelho.png'),
  azul: require('../../assets/images/avatar/oculos/azul.png'),
};

// A fantasia é o boneco inteiro: cobre roupa, chapéu e óculos.
// "sem-roupa" é o boneco só de bermuda e chinelo (o ⊘ da aba de fantasias).
export const FANTASIAS = {
  'sem-roupa': require('../../assets/images/avatar/sem-roupa.png'),
  dinossauro: require('../../assets/images/avatar/fantasias/dinossauro.png'),
  astronauta: require('../../assets/images/avatar/fantasias/astronauta.png'),
  abelha: require('../../assets/images/avatar/fantasias/abelha.png'),
  'dinossauro-verde': require('../../assets/images/avatar/fantasias/dinossauro-verde.png'),
  'abelha-rosa': require('../../assets/images/avatar/fantasias/abelha-rosa.png'),
};

// Visual básico: sem chapéu, sem óculos, camiseta vermelha e calça jeans.
export const VISUAL_PADRAO = {
  chapeu: null,
  oculos: null,
  camiseta: 'vermelha',
  calca: 'jeans',
  fantasia: null,
};

// As imagens têm sobra em volta (para o chapéu de mago e as asas da abelha).
// Esta posição encaixa essa sobra inteira dentro da caixa do avatar,
// para nenhum item passar por cima do resto da tela.
export const POSICAO_CAMADAS = {
  left: '-5.04%',
  top: '-0.87%',
  width: '107.91%',
  height: '101.30%',
};

const miniatura = {
  nenhum: require('../../assets/images/avatar/miniaturas/nenhum.png'),
  bone: require('../../assets/images/avatar/miniaturas/bone.png'),
  chapeu: require('../../assets/images/avatar/miniaturas/chapeu.png'),
  chapeuMago: require('../../assets/images/avatar/miniaturas/chapeu-mago.png'),
  oculosPreto: require('../../assets/images/avatar/miniaturas/oculos-preto.png'),
  oculosAmarelo: require('../../assets/images/avatar/miniaturas/oculos-amarelo.png'),
  camisetaVermelha: require('../../assets/images/avatar/miniaturas/camiseta-vermelha.png'),
  camisetaAzul: require('../../assets/images/avatar/miniaturas/camiseta-azul.png'),
  camisetaVerde: require('../../assets/images/avatar/miniaturas/camiseta-verde.png'),
  camisetaAmarela: require('../../assets/images/avatar/miniaturas/camiseta-amarela.png'),
  camisetaPreta: require('../../assets/images/avatar/miniaturas/camiseta-preta.png'),
  jeans: require('../../assets/images/avatar/miniaturas/jeans.png'),
  bermudaVermelha: require('../../assets/images/avatar/miniaturas/bermuda-vermelha.png'),
  bermudaAzul: require('../../assets/images/avatar/miniaturas/bermuda-azul.png'),
  dinossauro: require('../../assets/images/avatar/miniaturas/fantasia-dinossauro.png'),
  astronauta: require('../../assets/images/avatar/miniaturas/fantasia-astronauta.png'),
  abelha: require('../../assets/images/avatar/miniaturas/fantasia-abelha.png'),
  coroa: require('../../assets/images/avatar/miniaturas/coroa.png'),
  viking: require('../../assets/images/avatar/miniaturas/viking.png'),
  oculosVermelho: require('../../assets/images/avatar/miniaturas/oculos-vermelho.png'),
  oculosAzul: require('../../assets/images/avatar/miniaturas/oculos-azul.png'),
  camisetaRoxa: require('../../assets/images/avatar/miniaturas/camiseta-roxa.png'),
  camisetaLaranja: require('../../assets/images/avatar/miniaturas/camiseta-laranja.png'),
  bermudaVerde: require('../../assets/images/avatar/miniaturas/bermuda-verde.png'),
  bermudaPreta: require('../../assets/images/avatar/miniaturas/bermuda-preta.png'),
  dinossauroVerde: require('../../assets/images/avatar/miniaturas/fantasia-dinossauro-verde.png'),
  abelhaRosa: require('../../assets/images/avatar/miniaturas/fantasia-abelha-rosa.png'),
};

// Nível em que os itens bloqueados são liberados.
const NIVEL_ITEM_RARO = 3;
const NIVEL_ITEM_EPICO = 5;

// Categorias e itens da vitrine. "id: null" é a opção "nenhum" (tira o item).
// Itens com "nivelMinimo" aparecem bloqueados até a pessoa chegar nesse nível.
export const CATEGORIAS_VITRINE = [
  {
    id: 'chapeu',
    nome: 'Chapéus',
    icone: require('../../assets/images/conta/abas/bone.png'),
    itens: [
      { id: null, nome: 'Sem chapéu', miniatura: miniatura.nenhum },
      { id: 'bone', nome: 'Boné', miniatura: miniatura.bone },
      { id: 'chapeu', nome: 'Chapéu', miniatura: miniatura.chapeu },
      {
        id: 'chapeu-mago',
        nome: 'Chapéu de mago',
        miniatura: miniatura.chapeuMago,
      },
      {
        id: 'coroa',
        nome: 'Coroa',
        miniatura: miniatura.coroa,
        nivelMinimo: NIVEL_ITEM_RARO,
      },
      {
        id: 'viking',
        nome: 'Capacete viking',
        miniatura: miniatura.viking,
        nivelMinimo: NIVEL_ITEM_EPICO,
      },
    ],
  },
  {
    id: 'oculos',
    nome: 'Óculos',
    icone: require('../../assets/images/conta/abas/oculos.png'),
    itens: [
      { id: null, nome: 'Sem óculos', miniatura: miniatura.nenhum },
      { id: 'preto', nome: 'Óculos preto', miniatura: miniatura.oculosPreto },
      {
        id: 'amarelo',
        nome: 'Óculos amarelo',
        miniatura: miniatura.oculosAmarelo,
      },
      {
        id: 'vermelho',
        nome: 'Óculos vermelho',
        miniatura: miniatura.oculosVermelho,
        nivelMinimo: NIVEL_ITEM_RARO,
      },
      {
        id: 'azul',
        nome: 'Óculos azul',
        miniatura: miniatura.oculosAzul,
        nivelMinimo: NIVEL_ITEM_EPICO,
      },
    ],
  },
  {
    id: 'camiseta',
    nome: 'Camisetas',
    icone: require('../../assets/images/conta/abas/camiseta.png'),
    itens: [
      {
        id: 'vermelha',
        nome: 'Camiseta vermelha',
        miniatura: miniatura.camisetaVermelha,
      },
      { id: 'azul', nome: 'Camiseta azul', miniatura: miniatura.camisetaAzul },
      {
        id: 'verde',
        nome: 'Camiseta verde',
        miniatura: miniatura.camisetaVerde,
      },
      {
        id: 'amarela',
        nome: 'Camiseta amarela',
        miniatura: miniatura.camisetaAmarela,
      },
      {
        id: 'preta',
        nome: 'Camiseta preta',
        miniatura: miniatura.camisetaPreta,
      },
      {
        id: 'roxa',
        nome: 'Camiseta roxa',
        miniatura: miniatura.camisetaRoxa,
        nivelMinimo: NIVEL_ITEM_RARO,
      },
      {
        id: 'laranja',
        nome: 'Camiseta laranja',
        miniatura: miniatura.camisetaLaranja,
        nivelMinimo: NIVEL_ITEM_EPICO,
      },
    ],
  },
  {
    id: 'calca',
    nome: 'Calças e bermudas',
    icone: require('../../assets/images/conta/abas/bermuda.png'),
    itens: [
      { id: 'jeans', nome: 'Calça jeans', miniatura: miniatura.jeans },
      {
        id: 'bermuda-vermelha',
        nome: 'Bermuda vermelha',
        miniatura: miniatura.bermudaVermelha,
      },
      {
        id: 'bermuda-azul',
        nome: 'Bermuda azul',
        miniatura: miniatura.bermudaAzul,
      },
      {
        id: 'bermuda-verde',
        nome: 'Bermuda verde',
        miniatura: miniatura.bermudaVerde,
        nivelMinimo: NIVEL_ITEM_RARO,
      },
      {
        id: 'bermuda-preta',
        nome: 'Bermuda preta',
        miniatura: miniatura.bermudaPreta,
        nivelMinimo: NIVEL_ITEM_EPICO,
      },
    ],
  },
  {
    id: 'fantasia',
    nome: 'Fantasias',
    icone: miniatura.dinossauro,
    itens: [
      { id: 'sem-roupa', nome: 'Sem roupa', miniatura: miniatura.nenhum },
      {
        id: 'dinossauro',
        nome: 'Fantasia de dinossauro',
        miniatura: miniatura.dinossauro,
      },
      {
        id: 'astronauta',
        nome: 'Fantasia de astronauta',
        miniatura: miniatura.astronauta,
      },
      { id: 'abelha', nome: 'Fantasia de abelha', miniatura: miniatura.abelha },
      {
        id: 'dinossauro-verde',
        nome: 'Dinossauro verde',
        miniatura: miniatura.dinossauroVerde,
        nivelMinimo: NIVEL_ITEM_RARO,
      },
      {
        id: 'abelha-rosa',
        nome: 'Abelha rosa',
        miniatura: miniatura.abelhaRosa,
        nivelMinimo: NIVEL_ITEM_EPICO,
      },
    ],
  },
];
