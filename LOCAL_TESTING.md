# Testar beTheHero localmente

## Pré-requisitos

- Node 20 (`nvm use` na raiz do repo)
- Backend: SQLite local (sem serviços externos)
- Frontend: navegador moderno
- Mobile: Expo Go atualizado ou simulador iOS/Android

## Terminal 1 — Backend

```bash
cd backend
npm install
npm run migrate    # primeira vez ou após reset do banco
npm start          # http://localhost:3333
npm test           # testes automatizados
```

## Terminal 2 — Frontend

```bash
cd frontend
npm install
npm start          # http://localhost:3000
```

API local configurada em `frontend/.env`:

```
REACT_APP_API_URL=http://localhost:3333
```

Build de produção:

```bash
npm run build
```

## Terminal 3 — Mobile

```bash
cd mobile
npm install
npx expo start
```

- `i` — simulador iOS
- `a` — emulador Android
- QR code — Expo Go no celular (mesma rede Wi-Fi do backend)

A URL da API é detectada automaticamente via `expo-constants` em `mobile/src/services/api.js`.

## Smoke test ponta a ponta

1. **Backend:** `npm test` + curl:

```bash
curl -X POST http://localhost:3333/ongs \
  -H "Content-Type: application/json" \
  -d '{"name":"APAE","email":"a@b.com","whatsapp":"11999999999","city":"SP","uf":"SP"}'
```

2. **Frontend:** registrar ONG em `/register` → login em `/` → criar incidente → ver na lista do perfil

3. **Mobile:** abrir app → listar incidentes → abrir detalhe

4. **Regressão:** deletar incidente no frontend e confirmar na lista mobile (refresh)

## Troubleshooting

| Problema | Solução |
|----------|---------|
| `sqlite3` não compila | Node 20 + Xcode CLI tools |
| Frontend não conecta | Conferir `REACT_APP_API_URL` e CORS no backend |
| Mobile não vê API | Mesmo Wi-Fi; firewall liberado na porta 3333 |
| Expo Go incompatível | Projeto usa **Expo SDK 54** (compatível com Expo Go da App Store). SDK 56+ não funciona no Expo Go iOS |
