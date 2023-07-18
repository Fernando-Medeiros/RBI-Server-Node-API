# Start

```sh
# Install dependencies
yarn install

# build the containers
docker compose up

# run bash inside app container
docker compose exec app bash
```

## Tests

### Scope: **Unit** - application (InMemoryDatabase)

```sh
yarn test unit
```

### Scope: **Integration** -> [mongo & redis containers] (docker)

```sh
yarn test integration
```

### Scope: **E2E** -> [mongo & redis containers] (docker)

```sh
yarn test e2e
```

## Docker - Tips

### Containers

```sh
# List containers
docker container ls

# Running containers
docker container stats

# Stop container
docker container stop <nameContainer>

# remove container
docker container rm <nameContainer>
```

### Images

```sh
# List images
docker images

# Remove image(s)
docker image rm <imageID>
```
