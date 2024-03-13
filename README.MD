# Weather widget project - GraphQL API, component, demo page

## How to run

### Requirements

- Latest version of Docker+Compose installed and running
- Ports 3000 and 4000 available (could be modified in docker-compose.yml)
- Internet connection (for the data source)

### Running in prod mode

```sh
make prod
> webpage-demo | ➜ Local: http://localhost:3000/
```

### Running tests

Note! Should only run in docker to avoid screenshot tests rendering deviations
on various machines

```sh
make test
```

See the output and use ^+C to stop containers after tests are done

### Development

```sh
cd backend
yarn dev
```

```sh
cd widgets
yarn storybook
```

```sh
cd demo
yarn dev
```
