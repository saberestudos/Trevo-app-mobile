// Tela de onboarding "Quantos dias por semana jogou?".
// Requisito atendido: RF 04 (perguntar em quantos dias por semana o usuário apostou).
import { useState } from 'react';
import { Alert, Pressable, Text, View } from 'react-native';

import Botao from '../../components/Botao';
import Cartao from '../../components/Cartao';
import Contador from '../../components/Contador';
import Saudacao from '../../components/Saudacao';
import SeletorHorario from '../../components/SeletorHorario';
import Tela from '../../components/Tela';
import OnboardingService from '../../services/OnboardingService';
import { validarHorarios } from '../../utils/validacoes';
import ModalBoasVindas from './ModalBoasVindas';
import estilos from './styles';

const DIAS_DA_SEMANA = [
  { id: 'segunda', sigla: 'S' },
  { id: 'terca', sigla: 'T' },
  { id: 'quarta', sigla: 'Q' },
  { id: 'quinta', sigla: 'Q' },
  { id: 'sexta', sigla: 'S' },
  { id: 'sabado', sigla: 'S' },
  { id: 'domingo', sigla: 'D' },
];

const FAIXAS_VAZIAS = [
  { inicio: null, fim: null },
  { inicio: null, fim: null },
];

export default function DiasJogadosScreen({ navigation, route }) {
  const { nome, iniciais } = route.params ?? {};
  const [diasSelecionados, setDiasSelecionados] = useState([]);
  const [faixasDeHorario, setFaixasDeHorario] = useState(FAIXAS_VAZIAS);
  const [vezesPorDia, setVezesPorDia] = useState(0);
  const [erros, setErros] = useState({});
  const [carregando, setCarregando] = useState(false);
  const [boasVindasVisivel, setBoasVindasVisivel] = useState(true);

  function alternarDia(id) {
    if (diasSelecionados.includes(id)) {
      setDiasSelecionados(diasSelecionados.filter((dia) => dia !== id));
    } else {
      setDiasSelecionados([...diasSelecionados, id]);
    }
  }

  function alterarHorario(indiceFaixa, campo, horario) {
    const novasFaixas = faixasDeHorario.map((faixa, indice) =>
      indice === indiceFaixa ? { ...faixa, [campo]: horario } : faixa,
    );
    setFaixasDeHorario(novasFaixas);
  }

  async function continuar() {
    const errosEncontrados = validarHorarios(faixasDeHorario);
    setErros(errosEncontrados);

    if (Object.keys(errosEncontrados).length > 0) {
      return;
    }

    setCarregando(true);

    try {
      await OnboardingService.salvar({
        diasDaSemana: diasSelecionados,
        horarios: faixasDeHorario,
        vezesPorDia,
      });
      Alert.alert(
        'Respostas salvas',
        'A tela inicial estará disponível em breve.',
      );
    } finally {
      setCarregando(false);
    }
  }

  return (
    <Tela>
      <View style={estilos.conteudo}>
        <Saudacao
          nome={nome}
          iniciais={iniciais}
          subtitulo="Conte sobre seus hábitos"
          aoPedirAjuda={() => setBoasVindasVisivel(true)}
        />

        <Text style={estilos.titulo}>{'Quantos dias\npor semana jogou?'}</Text>

        <Cartao estilo={estilos.cartao}>
          <Text style={estilos.rotulo}>Dias da semana jogados</Text>
          <View style={estilos.linhaDias}>
            {DIAS_DA_SEMANA.map((dia) => {
              const selecionado = diasSelecionados.includes(dia.id);
              return (
                <Pressable
                  key={dia.id}
                  style={[estilos.dia, selecionado && estilos.diaSelecionado]}
                  onPress={() => alternarDia(dia.id)}
                  accessibilityRole="checkbox"
                  accessibilityState={{ checked: selecionado }}
                  accessibilityLabel={dia.id}
                >
                  <Text
                    style={[
                      estilos.siglaDia,
                      selecionado && estilos.siglaDiaSelecionado,
                    ]}
                  >
                    {dia.sigla}
                  </Text>
                </Pressable>
              );
            })}
          </View>
        </Cartao>

        <Cartao estilo={estilos.cartao}>
          <Text style={estilos.rotulo}>Horários mais frequentes</Text>
          <Text style={estilos.dica}>
            Ex.: das 20:00 até 23:00. A segunda linha é opcional.
          </Text>
          {faixasDeHorario.map((faixa, indice) => (
            <View
              key={indice}
              style={[
                estilos.linhaHorario,
                indice > 0 && estilos.linhaHorarioSeguinte,
              ]}
            >
              <SeletorHorario
                descricao={`Início do horário ${indice + 1}`}
                valor={faixa.inicio}
                aoSelecionar={(horario) =>
                  alterarHorario(indice, 'inicio', horario)
                }
              />
              <Text style={estilos.ate}>até</Text>
              <SeletorHorario
                descricao={`Fim do horário ${indice + 1}`}
                valor={faixa.fim}
                aoSelecionar={(horario) =>
                  alterarHorario(indice, 'fim', horario)
                }
              />
            </View>
          ))}
          {erros.horarios && (
            <Text style={estilos.mensagemErro}>{erros.horarios}</Text>
          )}
        </Cartao>

        <Cartao estilo={estilos.cartao}>
          <Text style={estilos.textoQuantidade}>
            {'Quantidade de vezes jogadas no dia,\nem média.'}
          </Text>
          <Contador
            valor={vezesPorDia}
            aoAlterar={setVezesPorDia}
            unidade="vezes"
          />
        </Cartao>

        <View style={estilos.espacador} />

        <Botao
          estilo={estilos.botaoContinuar}
          titulo="Continuar"
          aoPressionar={continuar}
          carregando={carregando}
        />

        <Pressable onPress={() => navigation.goBack()}>
          <Text style={estilos.voltar}>Voltar</Text>
        </Pressable>
      </View>

      <ModalBoasVindas
        visivel={boasVindasVisivel}
        aoFechar={() => setBoasVindasVisivel(false)}
      />
    </Tela>
  );
}
