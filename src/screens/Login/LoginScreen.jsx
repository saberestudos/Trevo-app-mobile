// Tela de Login do TREVO.
// Requisito atendido: RF 02 (o usuário deve conseguir fazer login).
import { useState } from 'react';
import { Pressable, Text, View } from 'react-native';

import Botao from '../../components/Botao';
import CaixaSelecao from '../../components/CaixaSelecao';
import CampoTexto from '../../components/CampoTexto';
import Divisor from '../../components/Divisor';
import Logo from '../../components/Logo';
import RedesSociais from '../../components/RedesSociais';
import Tela from '../../components/Tela';
import AuthService from '../../services/AuthService';
import { avisarEmBreve } from '../../utils/avisos';
import { validarLogin } from '../../utils/validacoes';
import estilosAcesso from '../estilosAcesso';
import estilos from './styles';

export default function LoginScreen({ navigation }) {
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
      await AuthService.login(identificador, senha);
      // "reset" troca a pilha de telas: ao voltar, o app não retorna para o login.
      navigation.reset({ index: 0, routes: [{ name: 'Home' }] });
    } catch (erro) {
      setErros({ senha: erro.message });
    } finally {
      setCarregando(false);
    }
  }

  return (
    <Tela estiloConteudo={estilosAcesso.conteudo}>
      <Logo />

      <CampoTexto
        estilo={estilos.primeiroCampo}
        rotulo="E-mail ou usuário"
        valor={identificador}
        aoAlterar={setIdentificador}
        erro={erros.identificador}
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType="email-address"
      />

      <CampoTexto
        estilo={estilos.campo}
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

        <Pressable onPress={() => navigation.navigate('EsqueceuSenha')}>
          <Text style={estilosAcesso.link}>Esqueceu sua senha?</Text>
        </Pressable>
      </View>

      <Botao
        estilo={estilos.botao}
        titulo="Entrar"
        aoPressionar={entrar}
        carregando={carregando}
      />

      <View style={[estilosAcesso.linhaTextoComLink, estilos.linhaCadastro]}>
        <Text style={estilosAcesso.texto}>Não tem uma conta? </Text>
        <Pressable onPress={() => navigation.navigate('Cadastro')}>
          <Text style={estilosAcesso.link}>Inscreva-se</Text>
        </Pressable>
      </View>

      <Divisor
        estilo={estilos.divisor}
        texto="ou faça login com"
        espacamento={10}
      />

      <RedesSociais
        estilo={estilos.redesSociais}
        aoPressionar={avisarEmBreve}
      />
    </Tela>
  );
}
