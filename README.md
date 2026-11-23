# TREVO | App Mobile

Aplicativo mobile gamificado de educação financeira para prevenir e combater o vício em apostas online (ludopatia digital). Projeto acadêmico do grupo TREVO (UNIT-PE).

Esta é a versão MVP do **front-end**. Os dados ainda são simulados (mock) e não há backend.

## Tecnologias

- JavaScript
- React Native com Expo
- React Navigation (native stack)
- StyleSheet do React Native

## Telas prontas

| Tela | Requisito |
|---|---|
| Login | RF 02 |

## Como rodar

Pré-requisitos: [Node.js](https://nodejs.org) (versão LTS) e o app **Expo Go** no celular.

```bash
git clone https://github.com/saberestudos/Trevo-app-mobile.git
cd Trevo-app-mobile
git checkout develop
npm install
npx expo install --fix
npx expo start
```

Depois, leia o QR Code com o Expo Go (Android) ou com a câmera (iOS). O celular e o computador precisam estar na mesma rede Wi-Fi.

> Se o Expo Go avisar que a versão do projeto não é compatível, atualize o Expo com `npx expo install expo@latest`, rode `npx expo install --fix` e faça commit do `package.json` atualizado.

## Usuário de teste (mock)

| Campo | Valor |
|---|---|
| E-mail | teste@trevo.com |
| Usuário | teste |
| Senha | 123456 |

## Estrutura de pastas

```
src/
├── components/   peças reutilizáveis (Botao, CampoTexto, CaixaSelecao)
├── mocks/        dados simulados, usados até o backend existir
├── models/       classes de dados (Usuario)
├── navigation/   rotas do app
├── screens/      uma pasta por tela, com o componente e os estilos
├── services/     classes que hoje usam o mock e depois chamarão a API
├── theme/        cores e tamanhos de fonte do protótipo
└── utils/        validações dos formulários
```

## Padrões do projeto

- `.jsx` para telas e componentes visuais; `.js` para lógica, dados e estilos.
- PascalCase para telas, componentes e classes; camelCase para funções e variáveis.
- Cores e fontes só em `src/theme`, nunca direto nas telas.
- Toda busca de dados passa pelos `services`.
- Trabalho na branch `develop`; a `main` recebe só versões revisadas.
- Commits em português: `feat:`, `style:`, `chore:`, `docs:`.
