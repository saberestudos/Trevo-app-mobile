// Avisos rápidos para quem usa o app.
// No navegador o Alert do React Native não aparece, então lá usamos o alert do próprio navegador.
import { Alert, Platform } from 'react-native';

export function avisar(titulo, mensagem) {
  if (Platform.OS === 'web') {
    globalThis.alert(`${titulo}\n\n${mensagem}`);
  } else {
    Alert.alert(titulo, mensagem);
  }
}

// Aviso para botões de funcionalidades que ainda serão feitas.
export function avisarEmBreve() {
  avisar('Em breve', 'Essa funcionalidade estará disponível em breve.');
}

// Pergunta "sim ou não" e devolve uma Promise com a resposta (true = confirmou).
export function confirmar(titulo, mensagem, textoConfirmar = 'Confirmar') {
  if (Platform.OS === 'web') {
    return Promise.resolve(globalThis.confirm(`${titulo}\n\n${mensagem}`));
  }
  return new Promise((resolve) => {
    Alert.alert(titulo, mensagem, [
      { text: 'Cancelar', style: 'cancel', onPress: () => resolve(false) },
      { text: textoConfirmar, onPress: () => resolve(true) },
    ]);
  });
}
