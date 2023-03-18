# STRUCTURE

```console

.
├── docs
│   ├── swagger
│   │   ├── build
│   │   │   ├── build.impl.ts
│   │   │   └── interface.ts
│   │   ├── config
│   │   │   ├── authentication.json
│   │   │   ├── exceptions.json
│   │   │   └── info.json
│   │   └── resources
│   │       └── character
│   │           ├── paths.json
│   │           ├── requests.json
│   │           └── responses.json
│   ├── endpoints.png
│   ├── README.md
│   ├── START.md
│   └── STRUCTURE.md
├── scripts
│   ├── build.swagger.ts
│   └── build.tree.ts
├── src
│   ├── application
│   │   ├── use-cases
│   │   │   ├── character-cases
│   │   │   │   ├── repository
│   │   │   │   │   ├── character.props.ts
│   │   │   │   │   ├── character.repository.interfaces.ts
│   │   │   │   │   └── character.requests.interfaces.ts
│   │   │   │   ├── requests
│   │   │   │   │   ├── create.requests.ts
│   │   │   │   │   ├── delete.requests.ts
│   │   │   │   │   ├── get-by-id.requests.ts
│   │   │   │   │   ├── get-by-name.requests.ts
│   │   │   │   │   └── update.requests.ts
│   │   │   │   ├── tests
│   │   │   │   │   ├── mock
│   │   │   │   │   │   ├── character.data.mock.json
│   │   │   │   │   │   ├── inMemoryCharacterRepository.ts
│   │   │   │   │   │   └── utils.ts
│   │   │   │   │   ├── create.case.spec.ts
│   │   │   │   │   ├── delete.case.spec.ts
│   │   │   │   │   ├── get-all.case.spec.ts
│   │   │   │   │   ├── get-by-id.case.spec.ts
│   │   │   │   │   ├── get-by-name.case.spec.ts
│   │   │   │   │   └── update.case.spec.ts
│   │   │   │   ├── validators
│   │   │   │   │   └── validators.ts
│   │   │   │   ├── create.case.ts
│   │   │   │   ├── delete.case.ts
│   │   │   │   ├── get-all.case.ts
│   │   │   │   ├── get-by-id.case.ts
│   │   │   │   ├── get-by-name.case.ts
│   │   │   │   └── update.case.ts
│   │   │   ├── equipment-cases 
│   │   │   │   ├── repository
│   │   │   │   │   ├── equipment.props.ts
│   │   │   │   │   ├── equipment.repository.interfaces.ts
│   │   │   │   │   └── equipment.requests.interfaces.ts
│   │   │   │   ├── requests
│   │   │   │   │   ├── create.requests.ts
│   │   │   │   │   ├── delete.requests.ts
│   │   │   │   │   ├── get-by-id.requests.ts
│   │   │   │   │   └── update.requests.ts
│   │   │   │   ├── tests
│   │   │   │   │   ├── mock
│   │   │   │   │   │   ├── accessory.data.mock.json
│   │   │   │   │   │   ├── armor.data.mock.json
│   │   │   │   │   │   ├── equipment.data.mock.json
│   │   │   │   │   │   ├── inMemoryEquipmentRepository.ts
│   │   │   │   │   │   ├── utils.ts
│   │   │   │   │   │   └── weapon.data.mock.json
│   │   │   │   │   ├── create.case.spec.ts
│   │   │   │   │   ├── delete.case.spec.ts
│   │   │   │   │   ├── get-by-id.case.spec.ts
│   │   │   │   │   └── update.case.spec.ts
│   │   │   │   ├── validators
│   │   │   │   │   └── validators.ts
│   │   │   │   ├── create.case.ts
│   │   │   │   ├── delete.case.ts
│   │   │   │   ├── get-by-id.case.ts
│   │   │   │   └── update.case.ts
│   │   │   └── status-cases
│   │   │       ├── repository
│   │   │       │   ├── status.props.ts
│   │   │       │   ├── status.repository.interfaces.ts
│   │   │       │   └── status.requests.interfaces.ts
│   │   │       ├── requests
│   │   │       │   ├── create.requests.ts
│   │   │       │   ├── delete.requests.ts
│   │   │       │   ├── get-by-id.requests.ts
│   │   │       │   └── update.requests.ts
│   │   │       ├── tests
│   │   │       │   ├── mock
│   │   │       │   │   ├── inMemoryStatusRepository.ts
│   │   │       │   │   ├── status.data.mock.json
│   │   │       │   │   └── utils.ts
│   │   │       │   ├── create.case.spec.ts
│   │   │       │   ├── delete.case.spec.ts
│   │   │       │   ├── get-by-id.case.spec.ts
│   │   │       │   └── update.case.spec.ts
│   │   │       ├── validators
│   │   │       │   └── validators.ts
│   │   │       ├── create.case.ts
│   │   │       ├── delete.case.ts
│   │   │       ├── get-by-id.case.ts
│   │   │       └── update.case.ts
│   │   └── validators
│   │       └── common.validators.ts
│   ├── domain
│   │   ├── entities
│   │   │   ├── character
│   │   │   │   ├── character.interface.ts
│   │   │   │   ├── character.spec.ts
│   │   │   │   └── character.ts
│   │   │   ├── equipment
│   │   │   │   ├── equipment.interface.ts
│   │   │   │   ├── equipment.spec.ts
│   │   │   │   └── equipment.ts
│   │   │   ├── inventory
│   │   │   │   ├── inventory.interface.ts
│   │   │   │   ├── inventory.spec.ts
│   │   │   │   └── inventory.ts
│   │   │   ├── skills
│   │   │   │   ├── skills.interface.ts
│   │   │   │   ├── skills.spec.ts
│   │   │   │   └── skills.ts
│   │   │   └── status
│   │   │       ├── status.interface.ts
│   │   │       ├── status.spec.ts
│   │   │       └── status.ts
│   │   ├── items
│   │   │   └── items.interface.ts
│   │   └── skills
│   │       └── skills.interface.ts
│   ├── infrastructure
│   │   ├── middlewares
│   │   │   ├── exceptions.ts
│   │   │   └── session.ts
│   │   ├── models
│   │   │   ├── characters.model.ts
│   │   │   ├── equipments.model.ts
│   │   │   ├── inventories.model.ts
│   │   │   ├── skills.model.ts
│   │   │   └── status.model.ts
│   │   ├── repositories
│   │   │   └── character.repository.impl.ts
│   │   ├── routes
│   │   │   ├── controllers
│   │   │   │   └── character.controller.ts
│   │   │   ├── handlers
│   │   │   │   └── character.handler.ts
│   │   │   └── resources
│   │   │       └── character.routes.ts
│   │   ├── security
│   │   │   └── token
│   │   │       └── token.impl.ts
│   │   ├── services
│   │   │   ├── cache
│   │   │   │   ├── cache.connect.ts
│   │   │   │   └── cache.handler.ts
│   │   │   └── database
│   │   │       └── database.connect.ts
│   │   └── server.ts
│   ├── utils
│   │   ├── http.exceptions.ts
│   │   └── http.protocols.ts
│   └── main.ts
├── tests
│   ├── config
│   │   ├── config.ts
│   │   ├── helpers.ts
│   │   └── token.ts
│   └── integration
│       └── characters
│           ├── create
│           │   ├── exceptions.spec.ts
│           │   └── success.spec.ts
│           ├── delete
│           │   ├── exceptions.spec.ts
│           │   └── success.spec.ts
│           ├── get-all
│           │   ├── exceptions.spec.ts
│           │   └── success.spec.ts
│           ├── get-by-id
│           │   ├── exceptions.spec.ts
│           │   └── success.spec.ts
│           ├── get-by-name
│           │   ├── exceptions.spec.ts
│           │   └── success.spec.ts
│           ├── mock
│           │   ├── character.data.mock.json
│           │   └── character.mock.ts
│           └── update
│               ├── exceptions.spec.ts
│               └── success.spec.ts
├── docker-compose.yml
├── Dockerfile
├── env.example
├── package.json
├── swagger.json
├── tsconfig.json
├── vitest.config.ts
└── yarn.lock

63 directories, 141 files

```