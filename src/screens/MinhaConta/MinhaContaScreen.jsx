// Tela Minha Conta: avatar, personalização e estatísticas do usuário.
// Requisito atendido: RF 09 (avatar e loja), com estatísticas de RF 05 e RF 08.
// Por enquanto, só bonés/chapéus e óculos aparecem desenhados no avatar.
import { useEffect, useState } from 'react';
import { Image, Pressable, View } from 'react-native';

import BarraTopo from '../../components/BarraTopo';
import BotaoVoltar from '../../components/BotaoVoltar';
import TelaJogo from '../../components/TelaJogo';
import TextoDestaque from '../../components/TextoDestaque';
import ProgressoService from '../../services/ProgressoService';
import { avisarEmBreve } from '../../utils/avisos';
import { cores } from '../../theme/cores';
import { CATEGORIAS_AVATAR } from './itensAvatar';
import estilos from './styles';

const imagens = {
  avatar: require('../../../assets/images/home/avatar.png'),
  adicionarAmigos: require('../../../assets/images/conta/adicionar-amigos.png'),
  trofeu: require('../../../assets/images/home/trofeu-pequeno.png'),
  podio: require('../../../assets/images/conta/podio.png'),
  amigo: require('../../../assets/images/conta/amigo-laranja.png'),
  calendario: require('../../../assets/images/conta/calendario.png'),
  grafico: require('../../../assets/images/conta/grafico-barras.png'),
};

// "1 DIA" no singular; os outros números no plural.
function textoComPlural(numero, singular, plural) {
  return `${numero} ${numero === 1 ? singular : plural}`;
}

export default function MinhaContaScreen({ navigation }) {
  const [progresso, setProgresso] = useState(null);
  const [indiceCategoria, setIndiceCategoria] = useState(0);
  const [indiceItem, setIndiceItem] = useState(0);
  const [itensUsados, setItensUsados] = useState({});

  useEffect(() => {
    ProgressoService.buscar().then(setProgresso);
  }, []);

  const categoria = CATEGORIAS_AVATAR[indiceCategoria];
  const item = categoria.itens[indiceItem];

  function escolherCategoria(indice) {
    setIndiceCategoria(indice);
    setIndiceItem(0);
  }

  // As setas passam pelos itens da categoria e voltam ao começo no fim da lista.
  function trocarItem(passo) {
    const total = categoria.itens.length;
    setIndiceItem((indiceItem + passo + total) % total);
  }

  function usarItem() {
    if (!categoria.noAvatar) {
      avisarEmBreve();
      return;
    }
    setItensUsados({ ...itensUsados, [categoria.id]: item });
  }

  if (!progresso) {
    return <TelaJogo navigation={navigation} />;
  }

  return (
    <TelaJogo navigation={navigation}>
      <BarraTopo
        moedas={progresso.moedas}
        trofeus={progresso.trofeus}
        aoAbrirTrofeus={() => navigation.navigate('Trofeus')}
      />

      <View style={estilos.cabecalho}>
        <BotaoVoltar aoPressionar={() => navigation.goBack()} />
        <TextoDestaque
          texto="MINHA CONTA"
          tamanho={36}
          estilo={estilos.titulo}
        />
      </View>

      <View style={estilos.areaAvatar}>
        <View style={estilos.painelAvatar}>
          <Image
            source={imagens.avatar}
            style={estilos.avatar}
            resizeMode="contain"
            accessibilityLabel="Seu avatar"
          />
          {itensUsados.oculos && (
            <Image
              source={itensUsados.oculos.imagem}
              style={estilos.oculosNoAvatar}
              resizeMode="contain"
            />
          )}
          {itensUsados.cabeca && (
            <Image
              source={itensUsados.cabeca.imagem}
              style={estilos.chapeuNoAvatar}
              resizeMode="contain"
            />
          )}
        </View>

        <TextoDestaque
          texto={'PERSONALIZE O\nSEU AVATAR'}
          tamanho={32}
          centralizado
          estilo={estilos.tituloPersonalizar}
        />

        <View style={estilos.cartaoItens}>
          <View style={estilos.abas}>
            {CATEGORIAS_AVATAR.map((cat, indice) => (
              <Pressable
                key={cat.id}
                style={[
                  estilos.aba,
                  indice === indiceCategoria && estilos.abaAtiva,
                ]}
                onPress={() => escolherCategoria(indice)}
                accessibilityLabel={cat.nome}
              >
                <Image
                  source={cat.icone}
                  style={estilos.iconeAba}
                  resizeMode="contain"
                />
              </Pressable>
            ))}
          </View>
          <Image
            source={item.imagem}
            style={estilos.itemSelecionado}
            resizeMode="contain"
            accessibilityLabel={item.nome}
          />
        </View>

        <Pressable
          style={[estilos.seta, estilos.setaEsquerda]}
          onPress={() => trocarItem(-1)}
          accessibilityLabel="Item anterior"
        />
        <Pressable
          style={[estilos.seta, estilos.setaDireita]}
          onPress={() => trocarItem(1)}
          accessibilityLabel="Próximo item"
        />

        <Pressable style={estilos.botaoUsar} onPress={usarItem}>
          <TextoDestaque texto="USAR" tamanho={36} centralizado />
        </Pressable>
      </View>

      <Pressable style={estilos.botaoAmigos} onPress={avisarEmBreve}>
        <TextoDestaque texto="ADICIONAR AMIGOS" tamanho={36} />
        <Image source={imagens.adicionarAmigos} style={estilos.iconeAmigos} />
      </Pressable>

      <TextoDestaque
        texto="ESTATÍSTICAS"
        tamanho={32}
        estilo={estilos.tituloEstatisticas}
      />

      <View style={estilos.linhaEstatisticas}>
        <View style={[estilos.estatistica, estilos.estatisticaPequena]}>
          <Image source={imagens.trofeu} style={estilos.iconeTrofeu} />
          <TextoDestaque
            texto={progresso.trofeus}
            tamanho={40}
            cor={cores.texto}
            estilo={estilos.numero}
          />
        </View>
        <View style={[estilos.estatistica, estilos.estatisticaPequena]}>
          <Image source={imagens.podio} style={estilos.iconePodio} />
          <TextoDestaque
            texto={progresso.ranking()}
            tamanho={40}
            cor={cores.texto}
            estilo={estilos.numeroAfastado}
          />
        </View>
        <View style={[estilos.estatistica, estilos.estatisticaPequena]}>
          <Image source={imagens.amigo} style={estilos.iconeAmigo} />
          <TextoDestaque
            texto={progresso.amigos}
            tamanho={40}
            cor={cores.texto}
            estilo={estilos.numeroAfastado}
          />
        </View>
      </View>

      <View style={[estilos.linhaEstatisticas, estilos.linhaGrande]}>
        <View style={[estilos.estatistica, estilos.estatisticaGrande]}>
          <Image source={imagens.calendario} style={estilos.iconeCalendario} />
          <TextoDestaque
            texto={`${textoComPlural(progresso.diasSemApostar(), 'DIA', 'DIAS')} SEM\nAPOSTAR`}
            tamanho={24}
            cor={cores.texto}
            estilo={estilos.textoDias}
          />
        </View>
        <View style={[estilos.estatistica, estilos.estatisticaGrande]}>
          <Image source={imagens.grafico} style={estilos.iconeGrafico} />
          <TextoDestaque
            texto={textoComPlural(progresso.ativos, 'ATIVO', 'ATIVOS')}
            tamanho={40}
            cor={cores.texto}
            estilo={estilos.numero}
          />
        </View>
      </View>
    </TelaJogo>
  );
}
