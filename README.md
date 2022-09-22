# Prettier plugin

## Setup

Any latest node and npm version should work, but at the time of writing this code, I was using node version `18.7.0` with npm version `8.15.0`.

To install dependencies, run

```sh
npm install
```

## Commits

- Initial setup

```sh
git checkout bacec81760e39b9051623448b432655bc30a4f20
```

- Parser

```sh
git checkout 34c19fa44fa77f7aeb4820293e762ad9bc247eeb
```

- Printer function

```sh
git checkout 241ce2f1b34a3a8bdaf41c28671389c6e8232dbc
```

- RQL function

```sh
git checkout main
```

## Command

CLI

```sh
# Run form parent of prettier-plugin-rql directory
npx prettier [sample file] --plugin=prettier-plugin-rql
```

REPL

```sh
npm run repl
```

## Resources

1. https://prettier.io/docs/en/plugins.html#developing-plugins

1. https://github.com/prettier/prettier/blob/main/commands.md
