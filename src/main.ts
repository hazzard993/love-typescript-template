import { greeting } from "greeting";

love.load = (arg: table) => {
    // Body
};

love.update = (delta: number) => {
    if (love.keyboard.isDown("e")) {
        // Should report an error at main.ts:10:
        throw "ERROR";
    }
};

love.draw = () => {
    love.graphics.print(greeting, 400, 300);
};
