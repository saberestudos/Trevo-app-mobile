// Chat com a Sofia, a mentora digital do TREVO (chatbot simples).
// Aberta pelo ícone de chat da barra de baixo.
import { useRef, useState } from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { Feather } from '@expo/vector-icons';

import BarraNavegacao from '../../components/BarraNavegacao';
import BotaoVoltar, { voltar } from '../../components/BotaoVoltar';
import TextoDestaque from '../../components/TextoDestaque';
import { BOAS_VINDAS } from '../../catalogos/respostasSofia';
import SofiaService from '../../services/SofiaService';
import { cores } from '../../theme/cores';
import { avisarEmBreve } from '../../utils/avisos';
import estilos from './styles';

const fotoSofia = require('../../../assets/images/chat/sofia.png');

// Hora no formato 20:03, mostrada embaixo de cada mensagem.
function horaAgora() {
  const agora = new Date();
  const horas = String(agora.getHours()).padStart(2, '0');
  const minutos = String(agora.getMinutes()).padStart(2, '0');
  return `${horas}:${minutos}`;
}

export default function ChatScreen({ navigation }) {
  const [mensagens, setMensagens] = useState([
    { id: 0, autor: 'sofia', texto: BOAS_VINDAS, hora: horaAgora() },
  ]);
  const [texto, setTexto] = useState('');
  const [digitando, setDigitando] = useState(false);
  const rolagem = useRef(null);

  async function enviar(conteudo = texto) {
    const mensagem = conteudo.trim();
    if (!mensagem || digitando) return;

    setTexto('');
    setMensagens((atuais) => [
      ...atuais,
      {
        id: atuais.length,
        autor: 'pessoa',
        texto: mensagem,
        hora: horaAgora(),
      },
    ]);
    setDigitando(true);

    const resposta = await SofiaService.responder(mensagem);
    setDigitando(false);
    setMensagens((atuais) => [
      ...atuais,
      { id: atuais.length, autor: 'sofia', texto: resposta, hora: horaAgora() },
    ]);
  }

  function abrirAba(aba) {
    if (aba === 'Chat') return;
    if (aba === 'Home' || aba === 'Trofeus') {
      navigation.navigate(aba);
    } else {
      avisarEmBreve();
    }
  }

  return (
    <LinearGradient
      colors={[cores.quizFundoInicio, cores.quizFundoFim]}
      style={estilos.tela}
    >
      <StatusBar style="light" />

      <View style={estilos.cabecalho}>
        <BotaoVoltar aoPressionar={() => voltar(navigation)} />
        <Image source={fotoSofia} style={estilos.foto} />
        <View>
          <TextoDestaque texto="SOFIA" tamanho={40} />
          <Text style={estilos.status}>
            {digitando ? 'digitando...' : 'online'}
          </Text>
        </View>
      </View>

      <KeyboardAvoidingView
        style={estilos.corpo}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          ref={rolagem}
          contentContainerStyle={estilos.lista}
          onContentSizeChange={() =>
            rolagem.current?.scrollToEnd({ animated: true })
          }
          keyboardShouldPersistTaps="handled"
        >
          {mensagens.map((mensagem) =>
            mensagem.autor === 'sofia' ? (
              // Mensagem da Sofia: fotinho ao lado e o nome em cima.
              <View key={mensagem.id} style={estilos.linhaSofia}>
                <Image source={fotoSofia} style={estilos.fotoPequena} />
                <View style={estilos.balaoSofia}>
                  <Text style={estilos.nomeSofia}>Sofia</Text>
                  <Text style={estilos.textoSofia}>{mensagem.texto}</Text>
                  <Text style={estilos.hora}>{mensagem.hora}</Text>
                </View>
              </View>
            ) : (
              <View key={mensagem.id} style={estilos.balaoPessoa}>
                <Text style={estilos.textoPessoa}>{mensagem.texto}</Text>
                <Text style={estilos.hora}>{mensagem.hora}</Text>
              </View>
            ),
          )}

          {digitando && (
            <View style={estilos.linhaSofia}>
              <Image source={fotoSofia} style={estilos.fotoPequena} />
              <View style={[estilos.balaoSofia, estilos.balaoDigitando]}>
                <View style={estilos.pontos}>
                  <View style={estilos.ponto} />
                  <View style={estilos.ponto} />
                  <View style={estilos.ponto} />
                </View>
              </View>
            </View>
          )}
        </ScrollView>

        <View style={estilos.linhaEnvio}>
          <TextInput
            style={estilos.campo}
            value={texto}
            onChangeText={setTexto}
            placeholder="Escreva sua mensagem"
            placeholderTextColor={cores.textoSecundario}
            onSubmitEditing={() => enviar()}
            returnKeyType="send"
            selectionColor={cores.primaria}
          />
          <Pressable
            style={[estilos.enviar, !texto.trim() && estilos.enviarApagado]}
            onPress={() => enviar()}
            accessibilityRole="button"
            accessibilityLabel="Enviar mensagem"
          >
            <Feather name="send" size={26} color={cores.quizCabecalho} />
          </Pressable>
        </View>
      </KeyboardAvoidingView>

      <BarraNavegacao aoSelecionar={abrirAba} />
    </LinearGradient>
  );
}
