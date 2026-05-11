# LÖVE 2D TypeScript Project Template

A template LÖVE 2D TypeScript Project made possible with [TypeScriptToLua](https://github.com/TypeScriptToLua/TypeScriptToLua).

You can click `Use this template` to clone this repo, or download it as a zip.

## Scripts

Requires [NodeJS](https://nodejs.org/en/download/) and [LÖVE 2D](https://love2d.org/) within your terminal.

| Command                 | Description                                     |
| ----------------------- | ----------------------------------------------- |
| `npm install`           | ⏬ Install dependencies                         |
| `npm run build`         | 🔨 Build everything                             |
| `npm run build:watch`   | 🔨x♾ Re-build Lua files when a TS file is saved |
| `npm run build:release` | 📦 Build an executable (requires [pwsh][1])     |
| `npm start`             | 🎮 Start the game                               |
| `npm run fix:prettier`  | 💄 Fixes linting issues                         |
| `npm run lint`          | 💄 Checks for linting issues in code            |

[1]: https://github.com/PowerShell/PowerShell

To distribute the game, see the [game distribution wiki page](https://love2d.org/wiki/Game_Distribution).

External files can be placed in `res/` and referenced with `res/<filename>`.

e.g.

```ts
love.filesystem.read("res/input.txt");
```

### Notes

- If you're using VS Code, the [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) extension will automatically format your code for you so you don't need to run `npm run fix:prettier` on every change.
- Index your arrays at 0 in your source code.
- Lua does not iterate over sparse arrays (arrays with no values in the middle of them).

### Links

- [TypeScriptToLua Wiki](https://github.com/TypeScriptToLua/TypeScriptToLua/wiki)
  - [Writing Declarations](https://github.com/TypeScriptToLua/TypeScriptToLua/wiki/Writing-Declarations)
  - [Compiler Directives](https://github.com/TypeScriptToLua/TypeScriptToLua/wiki/Compiler-Directives)
- [LÖVE 2D Wiki](https://love2d.org/wiki/Main_Page)
- [LÖVE 2D - Getting Started](https://love2d.org/wiki/Getting_Started)
