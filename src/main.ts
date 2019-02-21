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

[love.load, love.update, love.draw] = [load, update, draw];
