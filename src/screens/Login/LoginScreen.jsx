// Tela de Login do TREVO.
// Requisito atendido: RF 02 (o usuário deve conseguir fazer login).
import { useState } from 'react';
import {
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome } from '@expo/vector-icons';

import Botao from '../../components/Botao';
import CaixaSelecao from '../../components/CaixaSelecao';
import CampoTexto from '../../components/CampoTexto';
import AuthService from '../../services/AuthService';
import { validarLogin } from '../../utils/validacoes';
import { cores } from '../../theme/cores';
import estilos from './styles';

const logo = require('../../../assets/images/logo-trevo.png');
const iconeGoogle = require('../../../assets/images/google.png');

// Telas e logins sociais que ainda serão feitos em etapas futuras.
function avisarEmBreve() {
  Alert.alert('Em breve', 'Essa funcionalidade estará disponível em breve.');
}

export default function LoginScreen() {
  const [identificador, setIdentificador] = useState('');
  const [senha, setSenha] = useState('');
  const [lembrarMe, setLembrarMe] = useState(false);
  const [erros, setErros] = useState({});
  const [carregando, setCarregando] = useState(false);

  async function entrar() {
    const errosEncontrados = validarLogin(identificador, senha);
    setErros(errosEncontrados);

    if (Object.keys(errosEncontrados).length > 0) {
      return;
    }

    setCarregando(true);

    try {
      const usuario = await AuthService.login(identificador, senha);
      Alert.alert('Login realizado', `Bem-vindo(a), ${usuario.nome}!`);
    } catch (erro) {
      setErros({ senha: erro.message });
    } finally {
      setCarregando(false);
    }
  }

  return (
    <SafeAreaView style={estilos.tela}>
      <KeyboardAvoidingView
        style={estilos.tela}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          contentContainerStyle={estilos.conteudo}
          keyboardShouldPersistTaps="handled"
        >
          <Image
            source={logo}
            style={estilos.logo}
            resizeMode="contain"
            accessibilityLabel="Logo do TREVO"
          />

          <CampoTexto
            rotulo="E-mail ou usuário"
            valor={identificador}
            aoAlterar={setIdentificador}
            erro={erros.identificador}
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
          />

          <CampoTexto
            rotulo="Senha"
            valor={senha}
            aoAlterar={setSenha}
            erro={erros.senha}
            senha
          />

          <View style={estilos.linhaOpcoes}>
            <CaixaSelecao
              texto="Lembrar-me"
              marcada={lembrarMe}
              aoAlternar={() => setLembrarMe(!lembrarMe)}
            />

            <Pressable onPress={avisarEmBreve}>
              <Text style={estilos.link}>Esqueceu sua senha?</Text>
            </Pressable>
          </View>

          <Botao
            titulo="Entrar"
            aoPressionar={entrar}
            carregando={carregando}
          />

          <View style={estilos.linhaCadastro}>
            <Text style={estilos.texto}>Não tem uma conta? </Text>
            <Pressable onPress={avisarEmBreve}>
              <Text style={estilos.link}>Inscreva-se</Text>
            </Pressable>
          </View>

          <View style={estilos.divisor}>
            <View style={estilos.linhaDivisor} />
            <Text style={estilos.textoDivisor}>ou faça login com</Text>
            <View style={estilos.linhaDivisor} />
          </View>

          <View style={estilos.redesSociais}>
            <Pressable
              onPress={avisarEmBreve}
              accessibilityLabel="Entrar com Facebook"
            >
              <FontAwesome name="facebook" size={32} color={cores.facebook} />
            </Pressable>

            <Pressable
              onPress={avisarEmBreve}
              accessibilityLabel="Entrar com Google"
            >
              <Image source={iconeGoogle} style={estilos.iconeGoogle} />
            </Pressable>

            <Pressable
              onPress={avisarEmBreve}
              accessibilityLabel="Entrar com Apple"
            >
              <FontAwesome name="apple" size={34} color={cores.texto} />
            </Pressable>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
