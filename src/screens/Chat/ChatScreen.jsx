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

export default function ChatScreen({ navigation }) {
  const [mensagens, setMensagens] = useState([
    { id: 0, autor: 'sofia', texto: BOAS_VINDAS },
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
      { id: atuais.length, autor: 'pessoa', texto: mensagem },
    ]);
    setDigitando(true);

    const resposta = await SofiaService.responder(mensagem);
    setDigitando(false);
    setMensagens((atuais) => [
      ...atuais,
      { id: atuais.length, autor: 'sofia', texto: resposta },
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
          {mensagens.map((mensagem) => (
            <View
              key={mensagem.id}
              style={[
                estilos.balao,
                mensagem.autor === 'sofia'
                  ? estilos.balaoSofia
                  : estilos.balaoPessoa,
              ]}
            >
              <Text
                style={
                  mensagem.autor === 'sofia'
                    ? estilos.textoSofia
                    : estilos.textoPessoa
                }
              >
                {mensagem.texto}
              </Text>
            </View>
          ))}

          {digitando && (
            <View style={[estilos.balao, estilos.balaoSofia]}>
              <Text style={estilos.textoSofia}>...</Text>
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
