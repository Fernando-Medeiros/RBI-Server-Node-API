# Red Boar Inn -- Server -- API

![Node](https://img.shields.io/badge/Node.JS-white?style=for-the-badge&logo=node.js&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-white?style=for-the-badge&logo=TypeScript&logoColor=black)
![Vitest](https://img.shields.io/badge/Vitest-white?style=for-the-badge&logo=Vitest&logoColor=black)
![Docker](https://img.shields.io/badge/Docker-white?style=for-the-badge&logo=Docker&logoColor=black)
![MongoDB](https://img.shields.io/badge/MongoDB-white?style=for-the-badge&logo=Mongodb&logoColor=black)
![Redis](https://img.shields.io/badge/Redis-white?style=for-the-badge&logo=Redis&logoColor=black)
![Heroku](https://img.shields.io/badge/Heroku-white?style=for-the-badge&logo=Heroku&logoColor=black)

Este projeto é uma API backend que funciona como servidor para um jogo de RPG. Ele permite a criação e gerenciamento de personagens, incluindo status, inventário, equipamentos e habilidades.

> - [Como inicializar o projeto](START.md)
> - [Estrutura das pastas e arquivos (tree)](STRUCTURE.md)
> - [Documentação - swagger - arquivo](../swagger.json)
> - [Documentação - swagger - deploy](https://rbi-server-node-api.herokuapp.com/docs)
> - [Scripts do projeto](../scripts/)

## Endpoints

### Character

> - GET /characters
> - GET /characters/:id
> - GET /characters/name/:name
> - POST /characters
> - PATCH /characters
> - DELETE /characters
> - [endpoints-image](endpoints/character.png)

### Status

> - GET /status/:id
> - POST /status
> - PATCH /status
> - DELETE /status
> - [endpoints-image](endpoints/status.png)

### Inventory

> - GET /inventories/:id
> - POST /inventories
> - PATCH /inventories
> - DELETE /inventories
> - [endpoints-image](endpoints/inventory.png)

### Equipment

> - GET /equipments/:id
> - POST /equipments
> - PATCH /equipments
> - DELETE /equipments
> - [endpoints-image](endpoints/equipment.png)

### Skills

> - GET /skills/:id
> - POST /skills
> - PATCH /skills
> - DELETE /skills
> - [endpoints-image](endpoints/skills.png)
