// Rotas do app. Cada nova tela do MVP deve ser registrada aqui.
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CadastroScreen from '../screens/Cadastro/CadastroScreen';
import CodigoScreen from '../screens/Codigo/CodigoScreen';
import DiasJogadosScreen from '../screens/DiasJogados/DiasJogadosScreen';
import EsqueceuSenhaScreen from '../screens/EsqueceuSenha/EsqueceuSenhaScreen';
import HomeScreen from '../screens/Home/HomeScreen';
import LoginScreen from '../screens/Login/LoginScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Cadastro" component={CadastroScreen} />
        <Stack.Screen name="EsqueceuSenha" component={EsqueceuSenhaScreen} />
        <Stack.Screen name="Codigo" component={CodigoScreen} />
        <Stack.Screen name="DiasJogados" component={DiasJogadosScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
