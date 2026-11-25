// Tela de Troféus ("Minha coleção").
// Requisito atendido: RF 08 (ranking e troféus).
// Troféus conquistados aparecem dourados; os outros, pretos com cadeado.
import { useEffect, useState } from 'react';
import { Image, View } from 'react-native';

import BarraTopo from '../../components/BarraTopo';
import BotaoVoltar, { voltar } from '../../components/BotaoVoltar';
import TelaJogo from '../../components/TelaJogo';
import TextoDestaque from '../../components/TextoDestaque';
import ProgressoService from '../../services/ProgressoService';
import TrofeuService from '../../services/TrofeuService';
import estilos from './styles';

const IMAGENS_TROFEU = {
  taca: {
    imagem: require('../../../assets/images/trofeus/taca.png'),
    largura: 66,
  },
  estrela: {
    imagem: require('../../../assets/images/trofeus/estrela.png'),
    largura: 47,
  },
  louros: {
    imagem: require('../../../assets/images/trofeus/louros.png'),
    largura: 56,
  },
};
const TROFEU_BLOQUEADO = {
  imagem: require('../../../assets/images/trofeus/bloqueado.png'),
  largura: 63,
};

export default function TrofeusScreen({ navigation }) {
  const [progresso, setProgresso] = useState(null);
  const [trofeus, setTrofeus] = useState([]);

  useEffect(() => {
    ProgressoService.buscar().then(setProgresso);
    TrofeuService.listar().then(setTrofeus);
  }, []);

  return (
    <TelaJogo navigation={navigation}>
      {progresso && (
        <>
          <BarraTopo
            moedas={progresso.moedas}
            trofeus={progresso.trofeus}
            navigation={navigation}
          />

          <View style={estilos.cabecalho}>
            <BotaoVoltar aoPressionar={() => voltar(navigation)} />
            <View style={estilos.titulos}>
              <TextoDestaque texto="MINHA COLEÇÃO" tamanho={36} centralizado />
              <TextoDestaque
                texto={`${progresso.ranking(true)} NO RANKING`}
                tamanho={32}
                centralizado
              />
            </View>
            {/* Espaço do mesmo tamanho da seta, para os títulos ficarem no centro da tela. */}
            <View style={estilos.espacoSeta} />
          </View>

          <View style={estilos.grade}>
            {trofeus.map((trofeu) => {
              const desenho = trofeu.conquistado
                ? IMAGENS_TROFEU[trofeu.tipo]
                : TROFEU_BLOQUEADO;
              return (
                <View key={trofeu.id} style={estilos.espaco}>
                  <Image
                    source={desenho.imagem}
                    style={[estilos.trofeu, { width: desenho.largura }]}
                    accessibilityLabel={
                      trofeu.conquistado
                        ? 'Troféu conquistado'
                        : 'Troféu bloqueado'
                    }
                  />
                </View>
              );
            })}
          </View>
        </>
      )}
    </TelaJogo>
  );
}
