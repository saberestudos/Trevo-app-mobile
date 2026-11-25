# TREVO | App Mobile

Aplicativo mobile gamificado de educação financeira para prevenir e combater o vício em apostas online (ludopatia digital). Projeto acadêmico do grupo TREVO (UNIT-PE).

Esta é a versão MVP do **front-end**. Os dados ainda são simulados (mock) e não há backend.

## Tecnologias

- JavaScript
- React Native com Expo
- React Navigation (native stack)
- StyleSheet do React Native
- Fonte Inter (`@expo-google-fonts/inter`) e degradê das bordas (`expo-linear-gradient`), como no protótipo
- Fonte HIGHSENS na Home (`assets/fonts`). Ela é **gratuita só para uso pessoal** e não tem letras acentuadas: o componente `TextoDestaque` desenha os acentos

## Telas prontas

| Tela | Requisito |
|---|---|
| Login | RF 02 |
| Cadastro | RF 01 |
| Esqueceu a senha? | RF 03 |
| Código | RF 03 |
| Quantos dias por semana jogou? (onboarding, com modal de boas-vindas em 4 etapas) | RF 04 |
| Home (contador de dias sem apostar, nível, moedas e troféus) | RF 05 |
| Troféus (minha coleção) | RF 08 |
| Minha Conta (avatar, personalização e estatísticas) | RF 09 |
| Opções (engrenagem do topo: Minha Conta e Sair; as outras opções mostram "Em breve") | — |

Fluxo (igual ao protótipo): Login → Home → Troféus (troféu do topo ou da barra), Minha Conta (botão LOJA) e Opções (engrenagem). Login → "Inscreva-se" → Cadastro → Onboarding → Home. Login → "Esqueceu sua senha?" → Esqueceu a senha? → Código → Login.

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

Para ver no navegador do computador, use `npx expo start --web`.

Depois, leia o QR Code com o Expo Go (Android) ou com a câmera (iOS). O celular e o computador precisam estar na mesma rede Wi-Fi.

> Se o Expo Go avisar que a versão do projeto não é compatível, atualize o Expo com `npx expo install expo@latest`, rode `npx expo install --fix` e faça commit do `package.json` atualizado.

## Usuário de teste (mock)

| Campo | Valor |
|---|---|
| E-mail | teste@trevo.com |
| Usuário | teste |
| Senha | 123456 |
| Código de recuperação | 12345 |

Os cadastros feitos no app ficam guardados no navegador (não somem ao recarregar a página). No celular, ficam só na memória até o backend existir.

## Estrutura de pastas

```
src/
├── catalogos/    imagens e categorias do avatar (corpo, cabeças, roupas, óculos e fantasias)
├── components/   peças reutilizáveis (Botao, CampoTexto, CampoCodigo, Contador...)
├── mocks/        dados simulados, usados até o backend existir
├── models/       classes de dados (Usuario, RespostaOnboarding, Progresso, Trofeu)
├── navigation/   rotas do app
├── screens/      uma pasta por tela, com o componente e os estilos
├── services/     classes que hoje usam o mock e depois chamarão a API
├── theme/        cores e tamanhos de fonte do protótipo
└── utils/        validações, lista de horários e avisos
```

## Padrões do projeto

- `.jsx` para telas e componentes visuais; `.js` para lógica, dados e estilos.
- PascalCase para telas, componentes e classes; camelCase para funções e variáveis.
- Cores e fontes só em `src/theme`, nunca direto nas telas.
- Toda busca de dados passa pelos `services`.
- Trabalho na branch `develop`; a `main` recebe só versões revisadas.
- Commits em português: `feat:`, `style:`, `chore:`, `docs:`.
