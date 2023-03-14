# STRUCTURE

```console
.
├── docs
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
│   ├── application
│   │   └── useCases
│   │       └── characterCases
│   │           ├── repository
│   │           │   ├── character.props.ts
│   │           │   ├── character.repository.interfaces.ts
│   │           │   └── character.requests.interfaces.ts
│   │           ├── requests
│   │           │   ├── create.requests.ts
│   │           │   ├── delete.requests.ts
│   │           │   ├── findById.requests.ts
│   │           │   ├── findByName.requests.ts
│   │           │   └── update.requests.ts
│   │           ├── tests
│   │           │   ├── mock
│   │           │   │   ├── character.data.mock.json
│   │           │   │   ├── inMemoryCharacterRepository.ts
│   │           │   │   └── utils.ts
│   │           │   ├── create.case.spec.ts
│   │           │   ├── delete.case.spec.ts
│   │           │   ├── getAll.case.spec.ts
│   │           │   ├── getById.case.spec.ts
│   │           │   ├── getByName.case.spec.ts
│   │           │   └── update.case.spec.ts
│   │           ├── validators
│   │           │   └── validators.ts
│   │           ├── createCase.ts
│   │           ├── deleteCase.ts
│   │           ├── getAllCase.ts
│   │           ├── getByIdCase.ts
│   │           ├── getByNameCase.ts
│   │           └── updateCase.ts
│   ├── domain
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
│   ├── infrastructure
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
│   │   │   └── character.repository.impl.ts
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
│   ├── utils
│   │   ├── http.exceptions.ts
│   │   └── http.protocols.ts
│   └── main.ts
├── tests
│   ├── config
│   │   ├── config.ts
│   │   ├── helpers.ts
│   │   └── token.ts
│   └── integration
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
│           │   ├── character.data.mock.json
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

48 directories, 92 files
```
