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

### Refresh JWT

    `
    +--------+                                           +---------------+
    |        |--(A)------- Authorization Grant --------->|               |
    |        |                                           |               |
    |        |<-(B)----------- Access Token -------------|               |
    |        |               & Refresh Token             |               |
    |        |                                           |               |
    |        |                            +----------+   |               |
    |        |--(C)---- Access Token ---->|          |   |               |
    |        |                            |          |   |               |
    |        |<-(D)- Protected Resource --| Resource |   | Authorization |
    | Client |                            |  Server  |   |     Server    |
    |        |--(E)---- Access Token ---->|          |   |               |
    |        |                            |          |   |               |
    |        |<-(F)- Invalid Token Error -|          |   |               |
    |        |                            +----------+   |               |
    |        |                                           |               |
    |        |--(G)----------- Refresh Token ----------->|               |
    |        |                                           |               |
    |        |<-(H)----------- Access Token -------------|               |
    +--------+           & Optional Refresh Token        +---------------+
    
    (A)  The client requests an access token by authenticating with the
        authorization server and presenting an authorization grant.
    
    (B)  The authorization server authenticates the client and validates
        the authorization grant, and if valid, issues an access token
        and a refresh token.
    
    (C)  The client makes a protected resource request to the resource
        server by presenting the access token.
    
    (D)  The resource server validates the access token, and if valid,
        serves the request.
    
    (E)  Steps (C) and (D) repeat until the access token expires.  If the
        client knows the access token expired, it skips to step (G);
        otherwise, it makes another protected resource request.
    
    (F)  Since the access token is invalid, the resource server returns
        an invalid token error.
    
    (G)  The client requests a new access token by authenticating with
        the authorization server and presenting the refresh token.  The
        client authentication requirements are based on the client type
        and on the authorization server policies.
    
    (H)  The authorization server authenticates the client and validates
        the refresh token, and if valid, issues a new access token (and,
        optionally, a new refresh token).
    `

## Todo

- [x] Implement clean architecture
- [x] Implement JWT Token
- [ ] Refresher JWT Token
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
