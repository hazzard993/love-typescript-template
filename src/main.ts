import { greeting } from "greeting";

function load(arg: table) {
    // Body
}

function update(delta: number) {
    // Body
}

function draw() {
    love.graphics.print(greeting, 400, 300);
}

love.load = load;
love.update = update;
love.draw = draw;
