# LÖVE 2D TypeScript Project Template

[![Build Status](https://travis-ci.org/hazzard993/love-typescript-template.svg?branch=master)](https://travis-ci.org/hazzard993/love-typescript-template)

A template to kick off a LÖVE 2D TypeScript Project. Uses [love-typescript-definitions](https://github.com/hazzard993/love-typescript-definitions) and [TypeScriptToLua](https://github.com/TypeScriptToLua/TypeScriptToLua).

### Dependencies

- [Git](https://git-scm.com/downloads)
- [LÖVE 2D](https://love2d.org/) (`love` should be accessible from the command line. [This guide](https://love2d.org/wiki/PATH) specifies how to do that).
- [NodeJS](https://nodejs.org/en/) and [Yarn](https://www.npmjs.com/package/yarn) (`npm install -g yarn`)

> It is recommended that you use [Yarn](https://www.npmjs.com/package/yarn) instead of _npm_ to run the commands below as it has features beyond _npm_, one of which can resolve dependencies with non-npm dependencies.

### Cloning and Running

You can use `Use this template` to duplicate this repo and clone it or download it as a zip and extract it to where you want to get started.

To install and run the project, use these following commands in the repo's directory:

```sh
yarn install
yarn build-and-start
```

This project should be running after those commands.

Use `code .` to open up the project using VS Code if installed. Any text editor will work, VS Code is a recommended one for a TypeScript project.

### Index

- [Making Changes](#making-changes)
- [Other CLI commands for this repo](#commands)
- [Using existing Lua Libraries](#using-other-lua-libraries)
- TypeScriptToLua Information
    - [TypeScriptToLua Wiki](https://github.com/TypeScriptToLua/TypeScriptToLua/wiki)
        - [Writing Declarations](https://github.com/TypeScriptToLua/TypeScriptToLua/wiki/Writing-Declarations)
        - [Compiler Directives](https://github.com/TypeScriptToLua/TypeScriptToLua/wiki/Compiler-Directives)
    - [LÖVE 2D Wiki](https://love2d.org/wiki/Main_Page)
    - [LÖVE 2D - Getting Started](https://love2d.org/wiki/Getting_Started)
    - [TypeScript Wiki](https://github.com/Microsoft/TypeScript/wiki)

## Making changes

1. Modify the `.ts` files under `src` or create some new ones
2. Execute `yarn build-and-start` to build the `.lua` files and run the project
3. Head back to step 1 and make your changes again

Alternatively, you can run `yarn watch` to automatically re-transpile files you modify.

## Commands

This is a list of commands you can use with your project.

| Command | What it does |
| ------- | ------------ |
| `yarn install` | Installs the dependencies of the project (uses `yarn.lock`) |
| `yarn build` | Builds all `.lua` files |
| `yarn start` | Starts the game! :video_game: |
| `yarn build-and-start` | Builds all `.lua` files and starts the game |
| `yarn watch` | Automatically compiles `.ts` files as they are changed |

## Using other Lua Libraries

It is possible to use [other Lua libraries](https://love2d.org/wiki/Category:Libraries)!

The code within `conf.ts` points Lua to the location of `node_modules` when trying to resolve modules.

```ts
package.path += ";../node_modules/?/init.lua";
package.path += ";../node_modules/?/?.lua";
```

Here's an example of how you'd install [lurker](https://github.com/rxi/lurker).

Add the dependencies `<github username>/<github repo>`.

```sh
yarn add rxi/lume
yarn add rxi/lurker
```

Add `lurker.d.ts` to `typings/`. This can be used to manually describe what is within lurker.

```ts
/** @noResolution */
declare module "lurker";
```

Now _lurker_ can be used! Note that the declaration above describes nothing about lurker so TypeScript will assume you know what you're doing when you try to access properties from it.

```ts
import * as lurker from "lurker";

lurker.update();
```