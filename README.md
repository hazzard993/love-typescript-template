# LÖVE 2D TypeScript Project Boilerplate

[![Build Status](https://travis-ci.org/hazzard993/love-typescript-boilerplate.svg?branch=master)](https://travis-ci.org/hazzard993/love-typescript-boilerplate)

To get a head start into a LÖVE 2D TypeScript Project, you'll need to be able to run the commands below.

To do that you need [Git](https://git-scm.com/downloads), [LÖVE 2D](https://love2d.org/) and [NodeJS](https://nodejs.org/en/) to run them.

On the command line, `lovec` should launch LÖVE 2D. Follow [this guide](https://love2d.org/wiki/PATH) if you need to set this up.

All ready? Run the commands below.

```sh
git clone https://github.com/hazzard993/love-typescript-boilerplate my-project
cd my-project
npm install
npm run build-and-start
```

Your project should now be running!

Use `code .` to open up the project using VS Code (or another editor of your choice).

If using VS Code, you can use `Ctrl+Shift+B` to start the `npm: build-and-start` task (Use `Terminal > Configure Default Build Task` to make this trigger when you press `Ctrl+Shift+B`).

## Making changes

1. Modify the `.ts` files under `src` or create some new ones
2. Execute `npm run build-and-start` to build the `.lua` files and run the project
3. Head back to step 1 and make your changes again

Alternatively, you can run `npm run watch` to automatically re-transpile files you modify.

## Links
- [LÖVE 2D Wiki](https://love2d.org/wiki/Main_Page)
- [LÖVE 2D - Getting Started](https://love2d.org/wiki/Getting_Started)
- [TypeScript Wiki](https://github.com/Microsoft/TypeScript/wiki)

## Commands

This is a list of commands you can use with your project.

| Command | What it does |
| ------- | ------------ |
| `npm install` | Installs the dependencies of the project |
| `npm run build` | Builds all `.lua` files |
| `npm start` | Starts the game! :video_game: |
| `npm run build-and-start` | Builds all `.lua` files and starts the game |
| `npm run watch` | Automatically compiles `.ts` files as they are changed |
