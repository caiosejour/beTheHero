# Be The Hero

Plataforma para conectar ONGs a pessoas dispostas a ajudar em casos sociais. ONGs cadastram incidentes (casos) pelo painel web; usuários visualizam esses casos no app mobile e entram em contato para contribuir.

Projeto desenvolvido durante a **Semana OmniStack 11** (2020), com stack atualizada em 2026.

## Estrutura do repositório

```
beTheHero/
├── backend/     # API REST (Node.js + Express + SQLite)
├── frontend/    # Painel web da ONG (React)
├── mobile/      # App para doadores (React Native + Expo)
└── .nvmrc       # Node.js 20
```

## Tecnologias

| Camada   | Stack |
|----------|-------|
| Backend  | Node.js, Express, Knex, SQLite, Celebrate/Joi, Jest |
| Frontend | React 18, React Router 6, Axios, Create React App |
| Mobile   | React Native, Expo SDK 54, React Navigation, Axios |

## Pré-requisitos

- [Node.js 20](https://nodejs.org/) (`nvm use` na raiz do projeto)
- npm
- Para mobile: [Expo Go](https://expo.dev/go) no celular ou simulador iOS/Android

## Como rodar localmente

Os três apps rodam em paralelo. O backend precisa estar ativo antes do frontend e do mobile.

### 1. Backend (porta 3333)

```bash
cd backend
npm install
npm run migrate   # apenas na primeira vez ou após reset do banco
npm start
```

Scripts úteis:

```bash
npm run dev       # nodemon (reload automático)
npm test          # testes automatizados
```

### 2. Frontend (porta 3000)

```bash
cd frontend
npm install
npm start
```

Crie o arquivo `frontend/.env` (ou use o existente) apontando para a API local:

```env
REACT_APP_API_URL=http://localhost:3333
```

Build de produção:

```bash
npm run build
```

### 3. Mobile (Expo)

```bash
cd mobile
npm install
npx expo start
```

- Pressione `i` para simulador iOS ou `a` para Android
- Ou escaneie o QR code com o **Expo Go** (celular na mesma rede Wi-Fi do computador)

A URL da API é detectada automaticamente em desenvolvimento via `expo-constants`.

> **Expo Go:** o mobile usa **Expo SDK 54**, compatível com a versão do Expo Go disponível na App Store. Versões mais novas do SDK (56+) exigem build próprio via TestFlight.

## Fluxo da aplicação

1. **ONG** se cadastra e faz login no frontend (`/register` → `/`)
2. **ONG** cria casos em `/incidents/new` e gerencia no perfil (`/profile`)
3. **Usuário** abre o app mobile, vê a lista de casos e acessa detalhes
4. No detalhe, pode entrar em contato por WhatsApp ou e-mail

## API (endpoints principais)

| Método | Rota | Descrição |
|--------|------|-----------|
| `POST` | `/ongs` | Cadastrar ONG |
| `POST` | `/sessions` | Login da ONG (body: `{ id }`) |
| `GET` | `/profile` | Listar casos da ONG (header: `Authorization`) |
| `POST` | `/incidents` | Criar caso (header: `Authorization`) |
| `GET` | `/incidents?page=1` | Listar casos (paginado, header `X-Total-Count`) |
| `DELETE` | `/incidents/:id` | Remover caso |

## Testes

```bash
# Backend
cd backend && npm test

# Frontend
cd frontend && npm test
```

Para um guia detalhado de smoke tests ponta a ponta, consulte [LOCAL_TESTING.md](./LOCAL_TESTING.md).

## Licença

ISC (backend). Consulte os arquivos de licença em cada pacote, quando aplicável.
