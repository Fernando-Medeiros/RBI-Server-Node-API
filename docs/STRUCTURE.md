# STRUCTURE

```console

.
├── docs
│   ├── endpoints
│   │   ├── character.png
│   │   ├── equipment.png
│   │   ├── inventory.png
│   │   ├── skills.png
│   │   └── status.png
│   ├── swagger
│   │   ├── build
│   │   │   ├── build.impl.ts
│   │   │   └── interface.ts
│   │   ├── config
│   │   │   ├── authentication.json
│   │   │   ├── exceptions.json
│   │   │   └── info.json
│   │   └── resources
│   │       ├── character
│   │       │   ├── paths.json
│   │       │   ├── requests.json
│   │       │   └── responses.json
│   │       ├── equipment
│   │       │   ├── paths.json
│   │       │   ├── requests.json
│   │       │   └── responses.json
│   │       ├── inventory
│   │       │   ├── paths.json
│   │       │   ├── requests.json
│   │       │   └── responses.json
│   │       ├── skills
│   │       │   ├── paths.json
│   │       │   ├── requests.json
│   │       │   └── responses.json
│   │       └── status
│   │           ├── paths.json
│   │           ├── requests.json
│   │           └── responses.json
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
│   │   │   │   │   │   ├── equipment.data.mock.json
│   │   │   │   │   │   ├── inMemoryEquipmentRepository.ts
│   │   │   │   │   │   └── utils.ts
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
│   │   │   ├── inventory-cases
│   │   │   │   ├── repository
│   │   │   │   │   ├── inventory.props.ts
│   │   │   │   │   ├── inventory.repository.interfaces.ts
│   │   │   │   │   └── inventory.requests.interfaces.ts
│   │   │   │   ├── requests
│   │   │   │   │   ├── create.requests.ts
│   │   │   │   │   ├── delete.requests.ts
│   │   │   │   │   ├── get-by-id.requests.ts
│   │   │   │   │   └── update.requests.ts
│   │   │   │   ├── tests
│   │   │   │   │   ├── mock
│   │   │   │   │   │   ├── inMemoryInventoryRepository.ts
│   │   │   │   │   │   ├── inventory.data.mock.json
│   │   │   │   │   │   └── utils.ts
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
│   │   │   ├── skills-cases
│   │   │   │   ├── repository
│   │   │   │   │   ├── skills.props.ts
│   │   │   │   │   ├── skills.repository.interfaces.ts
│   │   │   │   │   └── skills.requests.interfaces.ts
│   │   │   │   ├── requests
│   │   │   │   │   ├── create.requests.ts
│   │   │   │   │   ├── delete.requests.ts
│   │   │   │   │   ├── get-by-id.requests.ts
│   │   │   │   │   └── update.requests.ts
│   │   │   │   ├── tests
│   │   │   │   │   ├── mock
│   │   │   │   │   │   ├── inMemorySkillsRepository.ts
│   │   │   │   │   │   ├── skills.data.mock.json
│   │   │   │   │   │   └── utils.ts
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
│   │   │   ├── examples
│   │   │   │   ├── accessory.example.json
│   │   │   │   ├── armor.example.json
│   │   │   │   ├── consumable.example.json
│   │   │   │   ├── material.example.json
│   │   │   │   └── weapon.example.json
│   │   │   └── items.interface.ts
│   │   └── skills
│   │       ├── examples
│   │       │   ├── defensive.example.json
│   │       │   └── offensive.example.json
│   │       └── skills.interface.ts
│   ├── infrastructure
│   │   ├── middlewares
│   │   │   ├── api-secret.ts
│   │   │   ├── exceptions.ts
│   │   │   ├── request-rate-limit.ts
│   │   │   └── session.ts
│   │   ├── models
│   │   │   ├── characters.model.ts
│   │   │   ├── equipments.model.ts
│   │   │   ├── inventories.model.ts
│   │   │   ├── skills.model.ts
│   │   │   └── status.model.ts
│   │   ├── repositories
│   │   │   ├── character.repository.impl.ts
│   │   │   ├── equipment.repository.impl.ts
│   │   │   ├── inventory.repository.impl.ts
│   │   │   ├── skills.repository.impl.ts
│   │   │   └── status.repository.impl.ts
│   │   ├── routes
│   │   │   ├── controllers
│   │   │   │   ├── character.controller.ts
│   │   │   │   ├── equipment.controller.ts
│   │   │   │   ├── inventory.controller.ts
│   │   │   │   ├── skills.controller.ts
│   │   │   │   └── status.controller.ts
│   │   │   ├── handlers
│   │   │   │   ├── character.handler.ts
│   │   │   │   ├── equipment.handler.ts
│   │   │   │   ├── inventory.handler.ts
│   │   │   │   ├── skills.handler.ts
│   │   │   │   └── status.handler.ts
│   │   │   └── resources
│   │   │       ├── character.routes.ts
│   │   │       ├── equipment.routes.ts
│   │   │       ├── inventory.routes.ts
│   │   │       ├── skills.routes.ts
│   │   │       └── status.routes.ts
│   │   ├── security
│   │   │   └── token
│   │   │       ├── decode.impl.ts
│   │   │       └── encode.impl.ts
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
│   │   ├── headers
│   │   │   ├── api-secret.header.ts
│   │   │   └── authorization.header.ts
│   │   ├── helpers
│   │   │   ├── get-auth-header.ts
│   │   │   └── insert-remove.ts
│   │   ├── config.ts
│   │   └── token.ts
│   ├── e2e
│   │   ├── create-character
│   │   │   └── success.spec.ts
│   │   └── delete-character
│   │       └── success.spec.ts
│   └── integration
│       ├── characters
│       │   ├── create
│       │   │   ├── exceptions.spec.ts
│       │   │   └── success.spec.ts
│       │   ├── delete
│       │   │   ├── exceptions.spec.ts
│       │   │   └── success.spec.ts
│       │   ├── get-all
│       │   │   ├── exceptions.spec.ts
│       │   │   └── success.spec.ts
│       │   ├── get-by-id
│       │   │   ├── exceptions.spec.ts
│       │   │   └── success.spec.ts
│       │   ├── get-by-name
│       │   │   ├── exceptions.spec.ts
│       │   │   └── success.spec.ts
│       │   ├── mock
│       │   │   ├── character.data.mock.json
│       │   │   └── character.mock.ts
│       │   └── update
│       │       ├── exceptions.spec.ts
│       │       └── success.spec.ts
│       ├── equipment
│       │   ├── create
│       │   │   ├── exceptions.spec.ts
│       │   │   └── success.spec.ts
│       │   ├── delete
│       │   │   ├── exceptions.spec.ts
│       │   │   └── success.spec.ts
│       │   ├── get-by-id
│       │   │   ├── exceptions.spec.ts
│       │   │   └── success.spec.ts
│       │   ├── mock
│       │   │   ├── equipment.data.mock.json
│       │   │   └── equipment.mock.ts
│       │   └── update
│       │       ├── exceptions.spec.ts
│       │       └── success.spec.ts
│       ├── inventory
│       │   ├── create
│       │   │   ├── exceptions.spec.ts
│       │   │   └── success.spec.ts
│       │   ├── delete
│       │   │   ├── exceptions.spec.ts
│       │   │   └── success.spec.ts
│       │   ├── get-by-id
│       │   │   ├── exceptions.spec.ts
│       │   │   └── success.spec.ts
│       │   ├── mock
│       │   │   ├── inventory.data.mock.json
│       │   │   └── inventory.mock.ts
│       │   └── update
│       │       ├── exceptions.spec.ts
│       │       └── success.spec.ts
│       ├── skills
│       │   ├── create
│       │   │   ├── exceptions.spec.ts
│       │   │   └── success.spec.ts
│       │   ├── delete
│       │   │   ├── exceptions.spec.ts
│       │   │   └── success.spec.ts
│       │   ├── get-by-id
│       │   │   ├── exceptions.spec.ts
│       │   │   └── success.spec.ts
│       │   ├── mock
│       │   │   ├── skills.data.mock.json
│       │   │   └── skills.mock.ts
│       │   └── update
│       │       ├── exceptions.spec.ts
│       │       └── success.spec.ts
│       └── status
│           ├── create
│           │   ├── exceptions.spec.ts
│           │   └── success.spec.ts
│           ├── delete
│           │   ├── exceptions.spec.ts
│           │   └── success.spec.ts
│           ├── get-by-id
│           │   ├── exceptions.spec.ts
│           │   └── success.spec.ts
│           ├── mock
│           │   ├── status.data.mock.json
│           │   └── status.mock.ts
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

111 directories, 263 files

```
