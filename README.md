# 🚀 NestJS Boilerplate

Boilerplate desenvolvido para acelerar a criação de aplicações escaláveis utilizando **NestJS**, **TypeORM** e **TypeScript**, já trazendo recursos essenciais para APIs modernas, como validação de dados, documentação automática, criptografia, autenticação baseada em JWT, cache, seeds de banco de dados e suporte a Docker.

O objetivo deste projeto é eliminar a configuração repetitiva presente no início de novos sistemas, permitindo que o desenvolvimento seja focado diretamente nas regras de negócio.

---

# 📖 Índice

- [Visão Geral](#-visão-geral)
- [Funcionalidades](#-funcionalidades)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Criptografia e Segurança](#-criptografia-e-segurança)
- [Validação de Dados](#-validação-de-dados)
- [Banco de Dados](#-banco-de-dados)
- [Cache](#-cache)
- [Documentação Swagger](#-documentação-swagger)
- [Docker](#-docker)
- [Testes](#-testes)
- [Instalação](#-instalação)
- [Scripts Disponíveis](#-scripts-disponíveis)
- [Próximas Melhorias](#-próximas-melhorias)

---

# 📌 Visão Geral

Este boilerplate foi construído com foco em:

- Arquitetura modular;
- Escalabilidade;
- Segurança;
- Padronização de código;
- Desenvolvimento orientado a APIs REST;
- Integração simplificada com bancos relacionais;
- Configuração pronta para ambientes Docker.

---

# ⚙️ Funcionalidades

## Core

- NestJS 11
- TypeScript
- TypeORM
- Configuração por variáveis de ambiente
- Arquitetura modular
- DTOs
- Providers
- Services
- Controllers

---

## Segurança

- Hash de senhas com Bcrypt
- Geração de JWT
- Utilitários criptográficos
- Variáveis sensíveis isoladas em `.env`

---

## Banco de Dados

- PostgreSQL
- MySQL
- TypeORM 0.3+
- Database Seeds
- Criação automática de banco
- Remoção automática de banco
- Reset completo de ambiente

---

## Qualidade de Código

- ESLint
- Prettier
- Jest
- Testes unitários
- Testes E2E

---

## Produtividade

- Swagger integrado
- Docker Compose
- Cache Manager
- Redis Ready
- Validação com Zod
- Validação com Class Validator

---

# 🛠 Tecnologias Utilizadas

## Framework

- NestJS

https://nestjs.com

---

## ORM

- TypeORM

https://typeorm.io

---

## Banco de Dados

- PostgreSQL
- MySQL

---

## Validação

### Zod

https://zod.dev

### Class Validator

https://github.com/typestack/class-validator

---

## Criptografia

### bcryptjs

Utilizado para hash de senhas.

Exemplo:

```ts
const hashedPassword = await bcrypt.hash(password, 10);
```

---

### jsonwebtoken

Utilizado para autenticação baseada em tokens JWT.

Exemplo:

```ts
jwt.sign(payload, secret);
```

---

### crypto

Biblioteca nativa utilizada para geração de hashes, tokens e operações criptográficas adicionais.

---

## Cache

### Cache Manager

https://github.com/jaredwray/cacheable

Compatível com:

- Memory Cache
- Redis Cache

---

## Documentação

### Swagger

https://swagger.io

Documentação automática baseada nos decorators do NestJS.

---

# 📂 Estrutura do Projeto

```text
src/
│
├── modules/
│   ├── auth/
│   ├── users/
│   ├── cache/
│   └── ...
│
├── common/
│   ├── dto/
│   ├── decorators/
│   ├── guards/
│   ├── filters/
│   ├── interceptors/
│   └── utils/
│
├── database/
│   ├── seeds/
│   └── factories/
│
├── config/
│
├── app.module.ts
└── main.ts

test/
│
├── unit/
└── e2e/
```

*A estrutura acima é uma sugestão arquitetural recomendada para evolução do projeto.*

---

# 🔐 Criptografia e Segurança

O boilerplate já possui dependências necessárias para implementação de:

## Hash de Senhas

```ts
import bcrypt from "bcryptjs";

const hash = await bcrypt.hash(password, 10);
```

Validação:

```ts
const valid = await bcrypt.compare(
  password,
  hash
);
```

---

## JWT

```ts
import jwt from "jsonwebtoken";

const token = jwt.sign(
  payload,
  process.env.JWT_SECRET
);
```

Validação:

```ts
jwt.verify(
  token,
  process.env.JWT_SECRET
);
```

---

## Crypto

```ts
import crypto from "crypto";

const token =
  crypto.randomBytes(32).toString("hex");
```

---

# ✅ Validação de Dados

O projeto suporta duas abordagens:

## Zod

```ts
const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});
```

---

## Class Validator

```ts
export class CreateUserDto {
  @IsEmail()
  email: string;

  @MinLength(8)
  password: string;
}
```

---

# 🗄 Banco de Dados

O projeto já inclui:

- PostgreSQL
- MySQL
- TypeORM Extension
- Factories
- Seeds

---

## Criar Banco

```bash
npm run db:create
```

---

## Popular Banco

```bash
npm run db:seed
```

---

## Remover Banco

```bash
npm run db:drop
```

---

## Reset Completo

```bash
npm run db:reset
```

---

# ⚡ Cache

O boilerplate já está preparado para utilização de cache.

Dependências instaladas:

```json
"cache-manager"
"cache-manager-redis-store"
```

Exemplo:

```ts
await cacheManager.set(
  "users",
  users,
  60000
);
```

---

# 📚 Documentação Swagger

Após iniciar a aplicação:

```bash
npm run start:dev
```

A documentação poderá ser acessada em:

```text
http://localhost:3000/api
```

Exemplo:

```ts
@ApiTags("Users")
@Controller("users")
export class UsersController {}
```

---

# 🐳 Docker

O projeto já possui scripts preparados para utilização com Docker.

Subir containers:

```bash
npm run docker:up
```

Parar containers:

```bash
npm run docker:down
```

Reiniciar:

```bash
npm run docker:restart
```

Logs:

```bash
npm run docker:logs
```

Reconstruir:

```bash
npm run docker:rebuild
```

---

# 🧪 Testes

## Testes Unitários

```bash
npm test
```

---

## Watch Mode

```bash
npm run test:watch
```

---

## Coverage

```bash
npm run test:cov
```

---

## Debug

```bash
npm run test:debug
```

---

## E2E

```bash
npm run test:e2e
```

---

# 🚀 Instalação

Clone o projeto:

```bash
git clone https://github.com/seu-usuario/nestjs-boilerplate.git
```

Entre na pasta:

```bash
cd nestjs-boilerplate
```

Instale as dependências:

```bash
npm install
```

Configure o arquivo `.env`:

```env
PORT=3000

DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=postgres
DB_DATABASE=nestjs

JWT_SECRET=super-secret-key
```

Execute:

```bash
npm run start:dev
```

---

# 📜 Scripts Disponíveis

## Aplicação

```bash
npm run start
npm run start:dev
npm run start:debug
npm run start:prod
```

---

## Build

```bash
npm run build
```

---

## Lint

```bash
npm run lint
```

---

## Format

```bash
npm run format
```

---

## Docker

```bash
npm run docker:up
npm run docker:down
npm run docker:restart
npm run docker:logs
npm run docker:rebuild
```

---

## Banco de Dados

```bash
npm run db:create
npm run db:drop
npm run db:seed
npm run db:reset
```

---

## Testes

```bash
npm test
npm run test:watch
npm run test:cov
npm run test:e2e
```

---

# 🔮 Próximas Melhorias

Algumas evoluções naturais para este boilerplate incluem:

- Autenticação JWT pronta para uso
- Refresh Tokens
- Controle de acesso baseado em Roles (RBAC)
- Guards globais
- Rate Limiting
- Upload de arquivos
- Integração com Redis completa
- Logger estruturado
- Observabilidade (OpenTelemetry)
- CI/CD com GitHub Actions
- Migrations automáticas
- Multi-tenant support

---

# 👨‍💻 Autor

**Davi Batista**

- GitHub: https://github.com/odavibatista
- LinkedIn: https://linkedin.com/in/odavibatista

---

Desenvolvido como base para acelerar a criação de aplicações backend modernas utilizando o ecossistema NestJS.
