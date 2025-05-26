# 🚀 Repository Rating API

A modular RESTful API built with **Express**, **TypeScript**, and a layered architecture.
Supports clean separation of concerns across **controllers**, **services**, **repositories**,
and **mappers** — ready for in-memory use or migration to a persistent database.

---

## 📦 Tech Stack

- **Express** – minimal and performant HTTP server
- **Layered architecture** – Controller → Service → Repository → Mapper

---

## 🛠 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the development server

```bash
npm run dev
```

> Uses `ts-node-dev` for hot reloading.

---

## 🗂 Project Structure

```
src/
├── controllers/       # Express route handlers
├── services/          # Business logic
├── repository/        # In-memory or future database access
│   └── mappers/       # Transform data between layers
├── models/            # Domain models and entities
├── app.ts             # Express app setup
└── server.ts          # App bootstrap
```

---

## 🧪 Linting & Formatting

### Run linter

```bash
npm run lint
```

### Auto-fix issues

```bash
npm run lint:fix
```

Linting is powered by:

- `@typescript-eslint`
- `eslint-plugin-import`
- `eslint-plugin-perfectionist`

---

## 🚧 Roadmap

- [ ] Add persistence with SQLite or PostgreSQL
- [ ] Input validation with Zod
- [ ] Error handling middleware improvements
- [ ] OpenAPI / Swagger documentation
- [ ] Docker support
- [ ] Test suite with Vitest or Jest

---

## 🛡 License

MIT – feel free to fork, contribute, and build on top of it.
