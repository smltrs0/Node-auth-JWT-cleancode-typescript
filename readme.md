# Auth JWT Token using clean architecture

## Description

This project is a simple example of how to use JWT Token in a clean architecture and god practices in typescript and nodejs/express

## Motivation

This project was created to study and practice clean architecture and god practices in typescript and nodejs/express, don't stop to learn and practice is the key to success.

## Tech/framework used

Built with:

- [NodeJS](https://nodejs.org/en/)
- [Typescript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/)
- [Mongoose](https://mongoosejs.com/)
- [JWT](https://jwt.io/)
- [Bcrypt](https://www.npmjs.com/package/bcrypt)
- [Jest](https://jestjs.io/) - In progress

## Installation

```bash
npm install
```

## Running the app

```bash
# prisma migration
$ npx prisma migrate dev
# development
$ npm run dev
```
Information migration prisma
[a link](https://www.prisma.io/docs/getting-started/quickstart#3-run-a-migration-to-create-your-database-tables-with-prisma-migrate)
## Test

```bash
# unit tests

$ npm run test
```

## U are new using clean architecture?

### What is clean architecture?

Clean architecture is a software design philosophy that separates the elements of a design into ring levels. An important goal of clean architecture is to provide developers with a way to organize code in such a way that it encapsulates the business logic but keeps it separate from the delivery mechanism.

### Why use clean architecture?

The main reason to use clean architecture is to decouple the business logic from the infrastructure. This allows the business logic to be tested independently from the delivery mechanism, and also allows the delivery mechanism to be changed without affecting the business logic as long as the interface between the two remains the same.

### How to use clean architecture?

The clean architecture is divided into four layers:

- Entities: This layer contains enterprise-wide business rules. These rules are applied to all use cases and entities in the application.
- Use cases: This layer contains application-specific business rules. These rules are applied to a specific use case.
- Interface adapters: This layer contains code that converts data from the format most convenient for the use cases and entities, to the format most convenient for some external agency such as the database or the web.
- Frameworks and drivers: This layer contains any frameworks and tools you use to build the rest of the system. This layer is where all the details go.

### Folder structure

    ```bash
    ├── src
    │   ├── aplication  # Application layer (use cases)
    │   │   ├── auth
    │   │   │   ├── GetUserListUseCase.ts
    │   │   │   ├── LoginUseCase.ts
    │   │   │   ├── LogoutUseCase.ts
    │   │   │   ├── RegisterUseCase.ts
    │   │   │   └── types.ts
    │   │   └── Users
    │   │   │   ├── CreateUserUseCase.ts
    │   │   │   ├── DeleteUserUseCase.ts
    │   │   │   ├── GetUserListUseCase.ts
    │   │   │   ├── GetUserUseCase.ts
    │   │   │   └── types.ts
    │   │   └── Roles
    │   │   │   ├── CreateRoleUseCase.ts
    │   │   │   ├── DeleteRoleUseCase.ts
    │   │   │   ├── GetRoleListUseCase.ts
    │   │   │   ├── GetRoleUseCase.ts
    │   │   │   └── types.ts
    │   ├── domain # Business rules
    │   │   ├── datasources
    │   │   └── dtos # Data transfer objects (DTOs)
    │   │   │    ├── auth
    │   │   │    ├── users
    │   │   ├── entities
    │   │   ├── errors
    │   │   └─── repositories
    │   ├── infrastructure # Frameworks, drivers, tools, etc
    │   │   ├── datasources
    │   │   ├── mappers
    │   │   └── repositories
    │   └── presentation # User interface and input adapters
    │       ├── auth
    │       ├── middlewares
    │       ├── routes.ts
    │       └─ server.ts

## Todo

- [x] Implement clean architecture
- [x] Implement JWT Token
- [x] Implement Bcrypt
- [x] Implement Mongoose
- [ ] Implement Jest
- [ ] Implement Swagger
- [x] Implement Docker
- [ ] Implement CI/CD
- [ ] Implement AWS
- [ ] Implement Kubernetes

## License

[MIT](https://choosealicense.com/licenses/mit/)
