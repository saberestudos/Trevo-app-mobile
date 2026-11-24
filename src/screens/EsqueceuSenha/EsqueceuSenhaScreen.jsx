// Tela "Esqueceu a senha?": primeira etapa da recuperação de senha.
// Requisito atendido: RF 03 (recuperar senha por código enviado ao e-mail).
import { useState } from 'react';
import { Text, View } from 'react-native';

import Botao from '../../components/Botao';
import CampoTexto from '../../components/CampoTexto';
import Logo from '../../components/Logo';
import Tela from '../../components/Tela';
import AuthService from '../../services/AuthService';
import { validarEmailRecuperacao } from '../../utils/validacoes';
import estilosAcesso from '../estilosAcesso';
import estilos from './styles';

export default function EsqueceuSenhaScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [erros, setErros] = useState({});
  const [carregando, setCarregando] = useState(false);

  async function enviar() {
    const errosEncontrados = validarEmailRecuperacao(email);
    setErros(errosEncontrados);

    if (Object.keys(errosEncontrados).length > 0) {
      return;
    }

    setCarregando(true);

    try {
      await AuthService.enviarCodigoRecuperacao(email);
      navigation.navigate('Codigo');
    } catch (erro) {
      setErros({ email: erro.message });
    } finally {
      setCarregando(false);
    }
  }

  return (
    <Tela estiloConteudo={estilosAcesso.conteudo}>
      <Logo />

      <View style={estilos.cabecalho}>
        <Text style={estilosAcesso.titulo}>Esqueceu a senha?</Text>
        <Text style={estilos.subtitulo}>Redefina a senha em duas etapas</Text>
      </View>

      <CampoTexto
        estilo={estilos.campo}
        rotulo="Digite seu e-mail"
        valor={email}
        aoAlterar={setEmail}
        erro={erros.email}
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType="email-address"
      />

      <Botao
        estilo={estilos.botao}
        titulo="Enviar"
        aoPressionar={enviar}
        carregando={carregando}
      />
    </Tela>
  );
}
