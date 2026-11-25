// Catálogo do avatar: imagens das bases, camadas de roupa, acessórios,
// fantasias e as categorias da vitrine da tela Minha Conta (RF 09).
// As posições estão em porcentagem da caixa do avatar, então valem para qualquer tamanho.
// Obs.: o require do React Native precisa do caminho escrito por inteiro.

// Bases: o boneco sem boné e o boneco já desenhado com boné.
export const BASES = {
  padrao: require('../../assets/images/avatar/base-padrao.png'),
  bone: require('../../assets/images/avatar/base-bone.png'),
};

// Camadas que trocam a cor da camiseta e a calça, uma para cada base.
export const CAMADAS = {
  padrao: {
    camiseta: {
      azul: require('../../assets/images/avatar/camadas/padrao-camiseta-azul.png'),
      verde: require('../../assets/images/avatar/camadas/padrao-camiseta-verde.png'),
      amarela: require('../../assets/images/avatar/camadas/padrao-camiseta-amarela.png'),
      preta: require('../../assets/images/avatar/camadas/padrao-camiseta-preta.png'),
    },
    calca: {
      'bermuda-vermelha': require('../../assets/images/avatar/camadas/padrao-bermuda-vermelha.png'),
      'bermuda-azul': require('../../assets/images/avatar/camadas/padrao-bermuda-azul.png'),
    },
  },
  bone: {
    camiseta: {
      azul: require('../../assets/images/avatar/camadas/bone-camiseta-azul.png'),
      verde: require('../../assets/images/avatar/camadas/bone-camiseta-verde.png'),
      amarela: require('../../assets/images/avatar/camadas/bone-camiseta-amarela.png'),
      preta: require('../../assets/images/avatar/camadas/bone-camiseta-preta.png'),
    },
    calca: {
      'bermuda-vermelha': require('../../assets/images/avatar/camadas/bone-bermuda-vermelha.png'),
      'bermuda-azul': require('../../assets/images/avatar/camadas/bone-bermuda-azul.png'),
    },
  },
};

// Chapéus desenhados por cima da base sem boné.
export const CHAPEUS = {
  chapeu: {
    imagem: require('../../assets/images/avatar/itens/chapeu.png'),
    posicao: { left: '8%', top: '-0.9%', width: '82%', height: '19.9%' },
  },
  'chapeu-mago': {
    imagem: require('../../assets/images/avatar/itens/chapeu-mago.png'),
    posicao: { left: '19%', top: '-6%', width: '60%', height: '24.5%' },
  },
};

export const OCULOS = {
  amarelo: require('../../assets/images/avatar/itens/oculos-amarelo.png'),
  preto: require('../../assets/images/avatar/itens/oculos-preto.png'),
};

// Onde os óculos ficam em cada base (os olhos mudam um pouco de lugar).
export const POSICAO_OCULOS = {
  padrao: { left: '21.7%', top: '24%', width: '50%', height: '8.1%' },
  bone: { left: '21%', top: '23.1%', width: '50%', height: '8.1%' },
};

export const FANTASIAS = {
  dinossauro: require('../../assets/images/avatar/fantasias/dinossauro.png'),
  astronauta: require('../../assets/images/avatar/fantasias/astronauta.png'),
  abelha: require('../../assets/images/avatar/fantasias/abelha.png'),
};

const miniatura = {
  nenhum: require('../../assets/images/avatar/miniaturas/nenhum.png'),
  bone: require('../../assets/images/avatar/miniaturas/bone.png'),
};

// Categorias e itens da vitrine. "id: null" é a opção "nenhum" (tira o item).
export const CATEGORIAS_VITRINE = [
  {
    id: 'chapeu',
    nome: 'Chapéus',
    icone: require('../../assets/images/conta/abas/bone.png'),
    itens: [
      { id: null, nome: 'Sem chapéu', miniatura: miniatura.nenhum },
      { id: 'bone', nome: 'Boné', miniatura: miniatura.bone },
      { id: 'chapeu', nome: 'Chapéu', miniatura: CHAPEUS.chapeu.imagem },
      {
        id: 'chapeu-mago',
        nome: 'Chapéu de mago',
        miniatura: CHAPEUS['chapeu-mago'].imagem,
      },
    ],
  },
  {
    id: 'oculos',
    nome: 'Óculos',
    icone: require('../../assets/images/conta/abas/oculos.png'),
    itens: [
      { id: null, nome: 'Sem óculos', miniatura: miniatura.nenhum },
      { id: 'amarelo', nome: 'Óculos amarelo', miniatura: OCULOS.amarelo },
      { id: 'preto', nome: 'Óculos preto', miniatura: OCULOS.preto },
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
        miniatura: require('../../assets/images/avatar/miniaturas/camiseta-vermelha.png'),
      },
      {
        id: 'azul',
        nome: 'Camiseta azul',
        miniatura: require('../../assets/images/avatar/miniaturas/camiseta-azul.png'),
      },
      {
        id: 'verde',
        nome: 'Camiseta verde',
        miniatura: require('../../assets/images/avatar/miniaturas/camiseta-verde.png'),
      },
      {
        id: 'amarela',
        nome: 'Camiseta amarela',
        miniatura: require('../../assets/images/avatar/miniaturas/camiseta-amarela.png'),
      },
      {
        id: 'preta',
        nome: 'Camiseta preta',
        miniatura: require('../../assets/images/avatar/miniaturas/camiseta-preta.png'),
      },
    ],
  },
  {
    id: 'calca',
    nome: 'Calças e bermudas',
    icone: require('../../assets/images/conta/abas/bermuda.png'),
    itens: [
      {
        id: 'jeans',
        nome: 'Calça jeans',
        miniatura: require('../../assets/images/avatar/miniaturas/calca-jeans.png'),
      },
      {
        id: 'bermuda-vermelha',
        nome: 'Bermuda vermelha',
        miniatura: require('../../assets/images/avatar/miniaturas/bermuda-vermelha.png'),
      },
      {
        id: 'bermuda-azul',
        nome: 'Bermuda azul',
        miniatura: require('../../assets/images/avatar/miniaturas/bermuda-azul.png'),
      },
    ],
  },
  {
    id: 'fantasia',
    nome: 'Fantasias',
    icone: require('../../assets/images/avatar/miniaturas/fantasia-dinossauro.png'),
    itens: [
      { id: null, nome: 'Sem fantasia', miniatura: miniatura.nenhum },
      {
        id: 'dinossauro',
        nome: 'Fantasia de dinossauro',
        miniatura: require('../../assets/images/avatar/miniaturas/fantasia-dinossauro.png'),
      },
      {
        id: 'astronauta',
        nome: 'Fantasia de astronauta',
        miniatura: require('../../assets/images/avatar/miniaturas/fantasia-astronauta.png'),
      },
      {
        id: 'abelha',
        nome: 'Fantasia de abelha',
        miniatura: require('../../assets/images/avatar/miniaturas/fantasia-abelha.png'),
      },
    ],
  },
];
