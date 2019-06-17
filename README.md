# LÖVE 2D TypeScript Project Template

[![Build Status](https://travis-ci.org/hazzard993/love-typescript-boilerplate.svg?branch=master)](https://travis-ci.org/hazzard993/love-typescript-boilerplate)

A template to kick off a LÖVE 2D TypeScript Project. Uses [love-typescript-definitions](https://github.com/hazzard993/love-typescript-definitions) and [TypeScriptToLua](https://github.com/TypeScriptToLua/TypeScriptToLua).

Click `Use this template` to create a new repo based off this template.

You'll need the following programs to run this project:
- [Git](https://git-scm.com/downloads)
- [LÖVE 2D](https://love2d.org/)
- and [NodeJS](https://nodejs.org/en/) 

On the command line, `love` should launch LÖVE 2D. Follow [this guide](https://love2d.org/wiki/PATH) if you need to set this up.

If you're not using `Use this template` you can use the commands below to clone the project.

```sh
git clone https://github.com/hazzard993/love-typescript-template my-project
cd my-project
```

After this be sure to use these commands to point to where you want your repo to go.

```sh
git remote remove origin
git remote add origin <url/path to your repo>
```

To install and run the project, use these following commands:

```sh
npm install
npm run build-and-start
```

Your project should be running after those commands!

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
