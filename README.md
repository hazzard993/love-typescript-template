# LÖVE 2D TypeScript Project Template

A template LÖVE 2D TypeScript Project made possible with [TypeScriptToLua](https://github.com/TypeScriptToLua/TypeScriptToLua).

You can click `Use this template` to clone this repo, or download it as a zip.

## Scripts

Requires [Yarn](https://www.npmjs.com/package/yarn) and [LÖVE 2D](https://love2d.org/) within your CLI.

| Command             | Description                                     |
| ------------------- | ----------------------------------------------- |
| `yarn`              | ⏬ Install dependencies                         |
| `yarn build`        | 🔨 Build everything                             |
| `yarn watch`        | 🔨x♾ Re-build Lua files when a TS file is saved |
| `yarn start`        | 🎮 Start the game                               |
| `yarn fix:prettier` | 💄 Fixes linting issues                         |
| `yarn lint`         | 💄 Checks for linting issues in code            |
| `yarn docs`         | 📚 Opens up documentation                       |

To distribute the game, zip the output in the `game/` directory into a `.love` archive. See the [game distribution wiki page](https://love2d.org/wiki/Game_Distribution) for how to distribute this or check out [love-release](https://github.com/MisterDA/love-release) for a more streamlined process.

Importable files can be placed in the `res/` directory and referenced them with `res/[resource name]`.

e.g.

-   new file: `res/input.txt`
-   main.ts: `love.filesystem.read("res/input.txt")`

### Notes

-   It is entirely possible to use existing Lua libraries for a LÖVE 2D project within your TypeScript code
-   [TypeScriptToLua](https://github.com/TypeScriptToLua/TypeScriptToLua) preserves some `esnext` behaviour. This means you can use `Array.map` and `new Error(...)`
-   The `copyfiles` command line can be used to copy other needed files into the `game/` directory to compile a game (see scripts)
-   Index arrays at 0
-   Lua does not iterate over sparse arrays (arrays with empty values in the middle of them)
-   love-typescript-definitions comes with documentation accessible at `love-typescript-definitions/docs/index.html`

### Links

-   [TypeScriptToLua Wiki](https://github.com/TypeScriptToLua/TypeScriptToLua/wiki)
    -   [Writing Declarations](https://github.com/TypeScriptToLua/TypeScriptToLua/wiki/Writing-Declarations)
    -   [Compiler Directives](https://github.com/TypeScriptToLua/TypeScriptToLua/wiki/Compiler-Directives)
-   [LÖVE 2D Wiki](https://love2d.org/wiki/Main_Page)
-   [LÖVE 2D - Getting Started](https://love2d.org/wiki/Getting_Started)
-   [TypeScript Wiki](https://github.com/Microsoft/TypeScript/wiki)
