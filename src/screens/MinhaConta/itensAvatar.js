// Categorias e itens para personalizar o avatar (RF 09).
// "noAvatar" diz se o item já aparece desenhado no avatar quando é usado.
export const CATEGORIAS_AVATAR = [
  {
    id: 'cabeca',
    nome: 'Bonés e chapéus',
    icone: require('../../../assets/images/conta/abas/bone.png'),
    noAvatar: true,
    itens: [
      {
        id: 'bone',
        nome: 'Boné',
        imagem: require('../../../assets/images/conta/itens/bone.png'),
      },
      {
        id: 'chapeu',
        nome: 'Chapéu',
        imagem: require('../../../assets/images/conta/itens/chapeu.png'),
      },
      {
        id: 'chapeu-mago',
        nome: 'Chapéu de mago',
        imagem: require('../../../assets/images/conta/itens/chapeu-mago.png'),
      },
    ],
  },
  {
    id: 'roupa',
    nome: 'Roupas',
    icone: require('../../../assets/images/conta/abas/camiseta.png'),
    noAvatar: false,
    itens: [
      {
        id: 'roupa-heroi',
        nome: 'Roupa de herói',
        imagem: require('../../../assets/images/conta/itens/roupa-heroi.png'),
      },
    ],
  },
  {
    id: 'oculos',
    nome: 'Óculos',
    icone: require('../../../assets/images/conta/abas/oculos.png'),
    noAvatar: true,
    itens: [
      {
        id: 'oculos',
        nome: 'Óculos',
        imagem: require('../../../assets/images/conta/itens/oculos.png'),
      },
    ],
  },
  {
    id: 'bermuda',
    nome: 'Bermudas',
    icone: require('../../../assets/images/conta/abas/bermuda.png'),
    noAvatar: false,
    itens: [
      {
        id: 'bermuda',
        nome: 'Bermuda',
        imagem: require('../../../assets/images/conta/itens/bermuda.png'),
      },
    ],
  },
];
