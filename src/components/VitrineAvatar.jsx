// Vitrine para personalizar o avatar: abas de categoria e os itens em cartões.
// Tocar num item já veste o avatar; o item em uso ganha borda verde e um ✓.
import { useState } from 'react';
import { Image, Pressable, StyleSheet, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { CATEGORIAS_VITRINE } from '../catalogos/avatar';
import { cores } from '../theme/cores';
import { sombraPadrao } from '../theme/sombras';

export default function VitrineAvatar({ visual, aoEscolher, estilo }) {
  const [indiceCategoria, setIndiceCategoria] = useState(0);
  const categoria = CATEGORIAS_VITRINE[indiceCategoria];

  return (
    <View style={[estilos.cartao, estilo]}>
      <View style={estilos.abas}>
        {CATEGORIAS_VITRINE.map((cat, indice) => {
          const ativa = indice === indiceCategoria;
          return (
            <Pressable
              key={cat.id}
              style={[estilos.aba, ativa && estilos.abaAtiva]}
              onPress={() => setIndiceCategoria(indice)}
              accessibilityLabel={cat.nome}
              accessibilityState={{ selected: ativa }}
            >
              <Image
                source={cat.icone}
                style={estilos.iconeAba}
                resizeMode="contain"
              />
            </Pressable>
          );
        })}
      </View>

      <View style={estilos.grade}>
        {categoria.itens.map((item) => {
          const emUso = visual[categoria.id] === item.id;
          return (
            <Pressable
              key={item.nome}
              style={[estilos.item, emUso && estilos.itemEmUso]}
              onPress={() => aoEscolher(categoria.id, item.id)}
              accessibilityLabel={item.nome}
              accessibilityState={{ selected: emUso }}
            >
              <Image
                source={item.miniatura}
                style={estilos.miniatura}
                resizeMode="contain"
              />
              {emUso && (
                <View style={estilos.selo}>
                  <Feather name="check" size={11} color={cores.fundo} />
                </View>
              )}
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  cartao: {
    paddingVertical: 8,
    paddingHorizontal: 7,
    borderRadius: 12,
    backgroundColor: cores.fundo,
    ...sombraPadrao,
  },
  abas: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 4,
  },
  aba: {
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: cores.homeFundoInicio,
    opacity: 0.75,
  },
  abaAtiva: {
    backgroundColor: cores.primaria,
    opacity: 1,
  },
  iconeAba: {
    width: 22,
    height: 20,
  },
  // 3 colunas fixas (3 x 54 + 2 x 8 = 178): a última linha começa
  // pela esquerda, embaixo do primeiro item.
  grade: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignSelf: 'center',
    width: 178,
    gap: 8,
    marginTop: 10,
  },
  item: {
    width: 54,
    height: 54,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: 'transparent',
    borderRadius: 12,
    backgroundColor: cores.fundoItem,
  },
  itemEmUso: {
    borderColor: cores.primaria,
    backgroundColor: cores.fundoIlustracao,
  },
  miniatura: {
    width: 40,
    height: 40,
  },
  selo: {
    position: 'absolute',
    top: -8,
    right: -8,
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: cores.fundo,
    borderRadius: 10,
    backgroundColor: cores.primaria,
  },
});
