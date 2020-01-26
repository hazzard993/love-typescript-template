// Allows other Lua modules to be added as dependencies and used.
//
// Use `yarn add <username>/<github repo name>` to install a Lua module.
//
// package.path may have to be modified to link to certain modules correctly.
package.path += ";node_modules/?/init.lua";
package.path += ";node_modules/?/?.lua";

love.conf = t => {
    t.window.title = "TypeScript Project";
};
