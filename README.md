# vue-laravel-mix

[![Build Status](https://travis-ci.com/fireworkweb/vue-laravel-mix.svg?branch=master)](https://travis-ci.com/fireworkweb/vue-laravel-mix)

Example repository for Vue.js development with [Laravel Mix](https://github.com/JeffreyWay/laravel-mix).

## Usage

You can use it on your local env with Node and Yarn, or you can use it with Docker!

### Local environment

- `yarn hot`: Web server with hot reload on `http://localhost:8080/`.
- `yarn dev`: Build for development on `dist` folder.
- `yarn prod`: Build for production on `dist` folder.
- `yarn lint`: Lint your code with ESlint.

### Docker

For Docker, we use [vessel](https://github.com/shipping-docker/vessel) to help us with the commands.

- `./vessel hot`: Web server with hot reload on `http://localhost:8080/`.
- `./vessel yarn *`: Use Yarn inside Docker.
- `./vessel npm *`: Use npm inside Docker.
- `./vessel node *`: Use Node inside Docker.

Tip: add `alias v=./vessel` to help you with commands.

## License

MIT
