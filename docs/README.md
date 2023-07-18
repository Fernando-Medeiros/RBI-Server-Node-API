# Red Boar Inn -- Server -- API

![Node](https://img.shields.io/badge/Node.JS-white?style=for-the-badge&logo=node.js&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-white?style=for-the-badge&logo=TypeScript&logoColor=black)
![Vitest](https://img.shields.io/badge/Vitest-white?style=for-the-badge&logo=Vitest&logoColor=black)
![Docker](https://img.shields.io/badge/Docker-white?style=for-the-badge&logo=Docker&logoColor=black)
![MongoDB](https://img.shields.io/badge/MongoDB-white?style=for-the-badge&logo=Mongodb&logoColor=black)
![Redis](https://img.shields.io/badge/Redis-white?style=for-the-badge&logo=Redis&logoColor=black)

Este projeto é uma API backend que funciona como servidor para um jogo de RPG. Ele permite a criação e gerenciamento de personagens, incluindo status, inventário, equipamentos e habilidades.

> -   [Como inicializar o projeto](START.md)
> -   [Estrutura das pastas e arquivos (tree)](STRUCTURE.md)
> -   [Documentação - swagger - arquivo](../swagger.json)
> -   [Documentação - swagger - deploy](https://rbi-server-node-api.onrender.com/docs/)
> -   [Scripts do projeto](../scripts/)

## Endpoints

### Character

> -   **GET** /characters/:id
> -   **POST** /characters
> -   **PATCH** /characters
> -   **DELETE** /characters
> -   [endpoints - png](endpoints/character.png)
> -   [character example - json](../examples/character.data.mock.json)

### Status

> -   **GET** /status/:id
> -   **POST** /status
> -   **PATCH** /status
> -   **DELETE** /status
> -   [endpoints - png](endpoints/status.png)
> -   [status example - json](../examples/status.data.mock.json)

### Inventory

> -   **GET** /inventories/:id
> -   **POST** /inventories
> -   **PATCH** /inventories
> -   **DELETE** /inventories
> -   [endpoints - png](endpoints/inventory.png)
> -   [inventory example - json](../examples/inventory.data.mock.json)

### Equipment

> -   **GET** /equipments/:id
> -   **POST** /equipments
> -   **PATCH** /equipments
> -   **DELETE** /equipments
> -   [endpoints - png](endpoints/equipment.png)
> -   [equipment example - json](../examples/equipment.data.mock.json)

### Skills

> -   **GET** /skills/:id
> -   **POST** /skills
> -   **PATCH** /skills
> -   **DELETE** /skills
> -   [endpoints - png](endpoints/skills.png)
> -   [skills example - json](../examples/skills.data.mock.json)
