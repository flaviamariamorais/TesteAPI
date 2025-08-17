# API de Transferências

Esta API permite o registro, login, consulta de usuários e transferências de valores entre usuários, com regras de negócio para aprendizado de testes e automação de API.

## Tecnologias
- Node.js
- Express
- Swagger (documentação)

## Instalação

1. Clone o repositório ou copie os arquivos para sua máquina.
2. Instale as dependências:
   ```
npm install express swagger-ui-express
   ```

## Como rodar

- Para iniciar o servidor:
  ```
  node server.js
  ```
- O servidor rodará na porta 3000 por padrão.

## Endpoints

- `POST /register` — Registra um novo usuário. Campos obrigatórios: `username`, `password`. Opcional: `isFavored` (boolean).
- `POST /login` — Realiza login. Campos obrigatórios: `username`, `password`.
- `GET /users` — Lista todos os usuários cadastrados (exceto senha).
- `POST /transfer` — Realiza transferência. Campos obrigatórios: `from`, `to`, `amount` (number).

## Regras de Negócio

1. Não é permitido registrar usuários duplicados.
2. Login exige usuário e senha corretos.
3. Transferências para destinatários não favorecidos só podem ser feitas se o valor for menor que R$ 5.000,00.

## Documentação Swagger

Acesse a documentação interativa em: [http://localhost:3000/api-docs](http://localhost:3000/api-docs)

## Observações
- O banco de dados é em memória (os dados são perdidos ao reiniciar o servidor).
- O projeto está dividido em camadas: `controller`, `service`, `model`.
- Para testes automatizados, importe o `app.js` em seu framework de testes (ex: Supertest).

---

Para dúvidas ou sugestões, abra uma issue ou entre em contato.
