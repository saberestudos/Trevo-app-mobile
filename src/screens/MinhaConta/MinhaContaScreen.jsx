// Tela Minha Conta: avatar, vitrine de personalização e estatísticas do usuário.
// Requisito atendido: RF 09 (avatar e loja), com estatísticas de RF 05 e RF 08.
import { useEffect, useState } from 'react';
import { Image, Pressable, View } from 'react-native';

import { VISUAL_PADRAO } from '../../catalogos/avatar';
import AvatarPersonalizado from '../../components/AvatarPersonalizado';
import BarraTopo from '../../components/BarraTopo';
import BotaoVoltar, { voltar } from '../../components/BotaoVoltar';
import TelaJogo from '../../components/TelaJogo';
import TextoDestaque from '../../components/TextoDestaque';
import VitrineAvatar from '../../components/VitrineAvatar';
import AvatarService from '../../services/AvatarService';
import ProgressoService from '../../services/ProgressoService';
import { avisarEmBreve } from '../../utils/avisos';
import { cores } from '../../theme/cores';
import estilos from './styles';

const imagens = {
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
  const [visual, setVisual] = useState(null);

  useEffect(() => {
    ProgressoService.buscar().then(setProgresso);
    AvatarService.buscar().then(setVisual);
  }, []);

  // Veste o item escolhido na vitrine e guarda o novo visual.
  // - "Sem roupa" (⊘ das fantasias) tira tudo: depois disso, cada roupa
  //   escolhida entra sozinha, sem trazer de volta o que estava antes.
  // - Escolher uma roupa ou acessório tira a fantasia, para o item aparecer.
  function vestir(categoria, item) {
    let novoVisual;
    if (categoria === 'fantasia' && item === 'sem-roupa') {
      novoVisual = { ...VISUAL_PADRAO, fantasia: 'sem-roupa' };
    } else if (categoria === 'fantasia') {
      novoVisual = { ...visual, fantasia: item };
    } else {
      novoVisual = { ...visual, [categoria]: item, fantasia: null };
    }
    AvatarService.salvar(novoVisual).then(setVisual);
  }

  if (!progresso || !visual) {
    return <TelaJogo navigation={navigation} />;
  }

  return (
    <TelaJogo navigation={navigation}>
      <BarraTopo
        moedas={progresso.moedas}
        trofeus={progresso.trofeus}
        aoAbrirTrofeus={() => navigation.navigate('Trofeus')}
        aoAbrirOpcoes={() => navigation.navigate('Opcoes')}
      />

      <View style={estilos.cabecalho}>
        <BotaoVoltar aoPressionar={() => voltar(navigation)} />
        <TextoDestaque
          texto="MINHA CONTA"
          tamanho={36}
          estilo={estilos.titulo}
        />
      </View>

      <View style={estilos.areaAvatar}>
        <View style={estilos.painelAvatar}>
          <AvatarPersonalizado visual={visual} estilo={estilos.avatar} />
        </View>

        <TextoDestaque
          texto={'PERSONALIZE O\nSEU AVATAR'}
          tamanho={32}
          centralizado
          estilo={estilos.tituloPersonalizar}
        />

        <VitrineAvatar
          visual={visual}
          aoEscolher={vestir}
          estilo={estilos.vitrine}
        />
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
