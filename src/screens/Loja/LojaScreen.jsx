// Loja do Avatar: itens comprados com moedas (RF 09).
// Aberta pelo botão LOJA do topo. O item comprado aparece na vitrine da Minha Conta.
import { useCallback, useState } from 'react';
import { Image, Pressable, View } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import { ITENS_LOJA, chaveDoItem } from '../../catalogos/loja';
import BarraTopo from '../../components/BarraTopo';
import BotaoVoltar, { voltar } from '../../components/BotaoVoltar';
import TelaJogo from '../../components/TelaJogo';
import TextoDestaque from '../../components/TextoDestaque';
import AvatarService from '../../services/AvatarService';
import LojaService from '../../services/LojaService';
import ProgressoService from '../../services/ProgressoService';
import { cores } from '../../theme/cores';
import { avisar, confirmar } from '../../utils/avisos';
import estilos from './styles';

const moeda = require('../../../assets/images/home/moeda.png');

export default function LojaScreen({ navigation }) {
  const [progresso, setProgresso] = useState(null);
  const [comprados, setComprados] = useState([]);

  useFocusEffect(
    useCallback(() => {
      ProgressoService.buscar().then(setProgresso);
      AvatarService.buscarComprados().then(setComprados);
    }, []),
  );

  async function comprar(item) {
    if (comprados.includes(chaveDoItem(item.categoria, item.id))) {
      avisar('Você já tem esse item', 'Vista ele na Minha Conta.');
      return;
    }
    if (progresso.moedas < item.preco) {
      avisar(
        'Moedas insuficientes',
        `Faltam ${item.preco - progresso.moedas} moedas. Faça missões e o quiz para ganhar mais.`,
      );
      return;
    }

    const quer = await confirmar(
      `Comprar ${item.nome}?`,
      `Custa ${item.preco} moedas.`,
      'Comprar',
    );
    if (!quer) return;

    try {
      const resultado = await LojaService.comprar(item);
      setProgresso(resultado.progresso);
      setComprados(resultado.comprados);
      avisar('Comprado!', 'Vista o item novo na Minha Conta.');
    } catch (erro) {
      avisar('Não deu para comprar', erro.message);
    }
  }

  if (!progresso) {
    return <TelaJogo navigation={navigation} />;
  }

  return (
    <TelaJogo navigation={navigation}>
      <BarraTopo
        moedas={progresso.moedas}
        trofeus={progresso.trofeus}
        navigation={navigation}
      />

      <View style={estilos.cabecalho}>
        <BotaoVoltar aoPressionar={() => voltar(navigation)} />
        <TextoDestaque
          texto="LOJA DO AVATAR"
          tamanho={34}
          estilo={estilos.titulo}
        />
      </View>

      <View style={estilos.grade}>
        {ITENS_LOJA.map((item) => {
          const comprado = comprados.includes(
            chaveDoItem(item.categoria, item.id),
          );
          return (
            <View key={chaveDoItem(item.categoria, item.id)}>
              <Pressable
                style={estilos.cartao}
                onPress={() => comprar(item)}
                accessibilityRole="button"
                accessibilityLabel={`${item.nome}, ${item.preco} moedas`}
              >
                <Image
                  source={item.imagem}
                  style={estilos.imagem}
                  resizeMode="contain"
                />
              </Pressable>

              <View style={estilos.preco}>
                {comprado ? (
                  <>
                    <Feather
                      name="check-circle"
                      size={22}
                      color={cores.fundo}
                    />
                    <TextoDestaque texto="COMPRADO" tamanho={22} />
                  </>
                ) : (
                  <>
                    <Image source={moeda} style={estilos.moeda} />
                    <TextoDestaque texto={item.preco} tamanho={25} />
                  </>
                )}
              </View>
            </View>
          );
        })}
      </View>
    </TelaJogo>
  );
}
