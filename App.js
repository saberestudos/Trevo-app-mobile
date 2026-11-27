// Componente raiz do TREVO: carrega as fontes (Inter, HIGHSENS e Bebas Neue), prepara a área segura
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
import { BebasNeue_400Regular } from '@expo-google-fonts/bebas-neue';

import AppNavigator from './src/navigation/AppNavigator';

export default function App() {
  const [fontesCarregadas] = useFonts({
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    HIGHSENS: require('./assets/fonts/HIGHSENS.otf'),
    BebasNeue_400Regular,
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
