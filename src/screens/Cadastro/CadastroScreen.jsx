// Tela de Cadastro do TREVO.
// Requisito atendido: RF 01 (o usuário deve conseguir se cadastrar).
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
import { validarCadastro } from '../../utils/validacoes';
import estilosAcesso from '../estilosAcesso';
import estilos from './styles';

export default function CadastroScreen({ navigation }) {
  const [identificador, setIdentificador] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmacaoSenha, setConfirmacaoSenha] = useState('');
  const [aceitouTermos, setAceitouTermos] = useState(false);
  const [erros, setErros] = useState({});
  const [carregando, setCarregando] = useState(false);

  async function cadastrar() {
    const errosEncontrados = validarCadastro({
      identificador,
      senha,
      confirmacaoSenha,
      aceitouTermos,
    });
    setErros(errosEncontrados);

    if (Object.keys(errosEncontrados).length > 0) {
      return;
    }

    setCarregando(true);

    try {
      const usuario = await AuthService.cadastrar(identificador, senha);
      navigation.navigate('DiasJogados', {
        nome: usuario.nomeDeExibicao(),
        iniciais: usuario.iniciais(),
      });
    } catch (erro) {
      setErros({ identificador: erro.message });
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

      <CampoTexto
        estilo={estilos.campo}
        rotulo="Confirmar senha"
        valor={confirmacaoSenha}
        aoAlterar={setConfirmacaoSenha}
        erro={erros.confirmacaoSenha}
        senha
      />

      <View style={estilos.termos}>
        <CaixaSelecao
          texto="Eu aceito os termos & condições"
          marcada={aceitouTermos}
          aoAlternar={() => setAceitouTermos(!aceitouTermos)}
        />
        {erros.termos && (
          <Text style={estilosAcesso.mensagemErro}>{erros.termos}</Text>
        )}
      </View>

      <Botao
        estilo={estilos.botao}
        titulo="Cadastrar-se"
        aoPressionar={cadastrar}
        carregando={carregando}
      />

      <View style={[estilosAcesso.linhaTextoComLink, estilos.linhaLogin]}>
        <Text style={estilosAcesso.texto}>Já tem uma conta? </Text>
        <Pressable onPress={() => navigation.navigate('Login')}>
          <Text style={estilosAcesso.link}>Clique aqui</Text>
        </Pressable>
      </View>

      <Divisor estilo={estilos.divisor} texto="ou" espacamento={19} />

      <RedesSociais
        estilo={estilos.redesSociais}
        aoPressionar={avisarEmBreve}
      />
    </Tela>
  );
}
