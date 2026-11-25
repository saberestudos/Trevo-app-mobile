// Tela "Código": segunda etapa da recuperação de senha.
// Requisito atendido: RF 03 (recuperar senha por código enviado ao e-mail).
import { useState } from 'react';
import { Pressable, Text, View } from 'react-native';

import Botao from '../../components/Botao';
import { voltar } from '../../components/BotaoVoltar';
import CampoCodigo from '../../components/CampoCodigo';
import Logo from '../../components/Logo';
import Tela from '../../components/Tela';
import AuthService from '../../services/AuthService';
import { avisar } from '../../utils/avisos';
import { validarCodigo } from '../../utils/validacoes';
import estilosAcesso from '../estilosAcesso';
import estilos from './styles';

const CODIGO_VAZIO = ['', '', '', '', ''];

export default function CodigoScreen({ navigation }) {
  const [digitos, setDigitos] = useState(CODIGO_VAZIO);
  const [erros, setErros] = useState({});
  const [carregando, setCarregando] = useState(false);

  async function enviar() {
    const errosEncontrados = validarCodigo(digitos);
    setErros(errosEncontrados);

    if (Object.keys(errosEncontrados).length > 0) {
      return;
    }

    setCarregando(true);

    try {
      await AuthService.verificarCodigo(digitos.join(''));
      avisar('Código verificado', 'Seu código foi confirmado.');
      navigation.navigate('Login');
    } catch (erro) {
      setErros({ codigo: erro.message });
    } finally {
      setCarregando(false);
    }
  }

  return (
    <Tela estiloConteudo={estilosAcesso.conteudo}>
      <Logo />

      <Text style={[estilosAcesso.titulo, estilos.titulo]}>
        {'Acabamos de enviar um código\npara o seu e-mail'}
      </Text>
      <Text style={estilos.subtitulo}>
        {
          'Insira no campo abaixo o código de verificação de\n5 dígitos enviado para o seu e-mail'
        }
      </Text>

      <CampoCodigo
        estilo={estilos.codigo}
        digitos={digitos}
        aoAlterar={setDigitos}
        erro={erros.codigo}
      />

      <Botao
        estilo={estilos.botao}
        titulo="Enviar"
        aoPressionar={enviar}
        carregando={carregando}
      />

      <View style={estilosAcesso.espacador} />

      <Pressable onPress={() => voltar(navigation, 'Login')}>
        <Text style={estilosAcesso.voltar}>Voltar</Text>
      </Pressable>
    </Tela>
  );
}
