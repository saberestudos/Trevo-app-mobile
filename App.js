// Componente raiz do TREVO: carrega as fontes (Inter e HIGHSENS), prepara a área segura
// da tela e carrega a navegação.
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {
  useFonts,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
} from '@expo-google-fonts/inter';

import AppNavigator from './src/navigation/AppNavigator';

export default function App() {
  const [fontesCarregadas] = useFonts({
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    HIGHSENS: require('./assets/fonts/HIGHSENS.otf'),
  });

  if (!fontesCarregadas) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <StatusBar style="dark" />
      <AppNavigator />
    </SafeAreaProvider>
  );
}
