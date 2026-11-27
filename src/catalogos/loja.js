// Itens à venda na Loja do Avatar (RF 09), na ordem do protótipo.
// "categoria" e "id" apontam para o item do avatar (catálogo do avatar);
// depois de comprado, ele aparece na vitrine da Minha Conta.
const imagem = {
  gorroNatal: require('../../assets/images/loja/gorro-natal.png'),
  oculosVerde: require('../../assets/images/loja/oculos-verde.png'),
  chapeuRoxo: require('../../assets/images/loja/chapeu-roxo.png'),
  tenis: require('../../assets/images/loja/tenis.png'),
  chapeuBruxa: require('../../assets/images/loja/chapeu-bruxa.png'),
  heroi: require('../../assets/images/loja/fantasia-heroi.png'),
  urso: require('../../assets/images/loja/fantasia-urso.png'),
};

export const ITENS_LOJA = [
  {
    categoria: 'chapeu',
    id: 'gorro-natal',
    nome: 'Gorro de Natal',
    preco: 100,
    imagem: imagem.gorroNatal,
  },
  {
    categoria: 'oculos',
    id: 'verde',
    nome: 'Óculos de sol verde',
    preco: 50,
    imagem: imagem.oculosVerde,
  },
  {
    categoria: 'chapeu',
    id: 'chapeu-roxo',
    nome: 'Chapéu bucket roxo',
    preco: 25,
    imagem: imagem.chapeuRoxo,
  },
  {
    categoria: 'calcado',
    id: 'tenis',
    nome: 'Tênis',
    preco: 150,
    imagem: imagem.tenis,
  },
  {
    categoria: 'chapeu',
    id: 'chapeu-bruxa',
    nome: 'Chapéu de bruxa',
    preco: 320,
    imagem: imagem.chapeuBruxa,
  },
  {
    categoria: 'fantasia',
    id: 'heroi',
    nome: 'Fantasia de herói',
    preco: 450,
    imagem: imagem.heroi,
  },
  {
    categoria: 'fantasia',
    id: 'urso',
    nome: 'Fantasia de urso',
    preco: 380,
    imagem: imagem.urso,
  },
];

// Chave única de um item, juntando categoria e id (ex.: "chapeu:gorro-natal").
export function chaveDoItem(categoria, id) {
  return `${categoria}:${id}`;
}
