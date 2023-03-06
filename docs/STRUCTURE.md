# STRUCTURE

```console
.
├── docs
│   ├── diagrams
│   ├── swagger
│   │   ├── build
│   │   │   ├── interface.ts
│   │   │   └── script.ts
│   │   └── config
│   │       ├── authentication.json
│   │       ├── exceptions.json
│   │       └── info.json
│   ├── README.md
│   └── STRUCTURE.md
├── src
│   ├── firstLayer
│   │   ├── controllers
│   │   │   ├── handlers
│   │   │   └── resources
│   │   ├── middlewares
│   │   ├── models
│   │   │   ├── characters.model.ts
│   │   │   ├── equipments.model.ts
│   │   │   ├── inventories.model.ts
│   │   │   ├── skills.model.ts
│   │   │   └── status.model.ts
│   │   ├── repositories
│   │   └── services
│   ├── secondLayer
│   │   ├── interfaces
│   │   ├── useCases
│   │   └── validators
│   ├── thirdLayer
│   │   ├── entities
│   │   └── interfaces
│   └── utils
├── tests
│   ├── config
│   ├── integration
│   │   ├── resources
│   │   └── services
│   ├── mock
│   └── unity
├── env.example
├── package.json
├── swagger.json
├── tsconfig.json
├── vitest.config.ts
└── yarn.lock

29 directories, 18 files
```
