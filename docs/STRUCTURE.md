# STRUCTURE

```console
.
├── docs
│   ├── diagrams
│   ├── swagger
│   │   ├── build
│   │   │   ├── interface.ts
│   │   │   └── script.ts
│   │   ├── config
│   │   │   ├── authentication.json
│   │   │   ├── exceptions.json
│   │   │   └── info.json
│   │   └── resources
│   │       └── character
│   │           ├── paths.json
│   │           ├── requests.json
│   │           └── responses.json
│   ├── endpoints.png
│   ├── README.md
│   └── STRUCTURE.md
├── src
│   ├── firstLayer
│   │   ├── middlewares
│   │   │   ├── exceptions.ts
│   │   │   └── session.ts
│   │   ├── models
│   │   │   ├── characters.model.ts
│   │   │   ├── equipments.model.ts
│   │   │   ├── inventories.model.ts
│   │   │   ├── skills.model.ts
│   │   │   └── status.model.ts
│   │   ├── repositories
│   │   │   └── character
│   │   │       └── character.repository.impl.ts
│   │   ├── routes
│   │   │   ├── controllers
│   │   │   │   └── character.controller.ts
│   │   │   ├── handlers
│   │   │   │   └── character.handler.ts
│   │   │   └── resources
│   │   │       └── character.routes.ts
│   │   ├── security
│   │   │   └── token
│   │   │       └── token.impl.ts
│   │   ├── services
│   │   │   └── database
│   │   │       └── database.connect.ts
│   │   └── server.ts
│   ├── secondLayer
│   │   └── useCases
│   │       ├── characterCases
│   │       │   ├── repository
│   │       │   │   └── character.interface.ts
│   │       │   ├── requests
│   │       │   │   └── character.requests.ts
│   │       │   ├── validators
│   │       │   │   └── validators.ts
│   │       │   ├── createCase.ts
│   │       │   ├── deleteCase.ts
│   │       │   ├── getAllCase.ts
│   │       │   ├── getByIdCase.ts
│   │       │   ├── getByNameCase.ts
│   │       │   └── updateCase.ts
│   │       └── statusCases
│   ├── thirdLayer
│   │   ├── entities
│   │   │   ├── character
│   │   │   │   ├── character.interface.ts
│   │   │   │   ├── character.spec.ts
│   │   │   │   └── character.ts
│   │   │   ├── equipment
│   │   │   │   ├── equipment.interface.ts
│   │   │   │   ├── equipment.spec.ts
│   │   │   │   └── equipment.ts
│   │   │   ├── inventory
│   │   │   │   ├── inventory.interface.ts
│   │   │   │   ├── inventory.spec.ts
│   │   │   │   └── inventory.ts
│   │   │   ├── skills
│   │   │   │   ├── skills.interface.ts
│   │   │   │   ├── skills.spec.ts
│   │   │   │   └── skills.ts
│   │   │   └── status
│   │   │       ├── status.interface.ts
│   │   │       ├── status.spec.ts
│   │   │       └── status.ts
│   │   ├── items
│   │   │   └── items.interface.ts
│   │   └── skills
│   │       └── skills.interface.ts
│   ├── utils
│   │   ├── http.exceptions.ts
│   │   └── http.protocols.ts
│   └── main.ts
├── tests
│   ├── config
│   │   ├── config.ts
│   │   ├── token.ts
│   │   └── utils.ts
│   └── resources
│       └── characters
│           ├── create
│           │   ├── exceptions.spec.ts
│           │   └── success.spec.ts
│           ├── delete
│           │   ├── exceptions.spec.ts
│           │   └── success.spec.ts
│           ├── getAll
│           │   ├── exceptions.spec.ts
│           │   └── success.spec.ts
│           ├── getById
│           │   ├── exceptions.spec.ts
│           │   └── success.spec.ts
│           ├── getByName
│           │   ├── exceptions.spec.ts
│           │   └── success.spec.ts
│           ├── mock
│           │   └── character.mock.ts
│           └── update
│               ├── exceptions.spec.ts
│               └── success.spec.ts
├── env.example
├── package.json
├── swagger.json
├── tsconfig.json
├── vitest.config.ts
└── yarn.lock

49 directories, 76 files
```
