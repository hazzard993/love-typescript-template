love.load = args => {
    const [content] = love.filesystem.read("res/index.txt");
    print(content);
};

love.update = dt => {};

love.draw = () => {
    love.graphics.print("Hello World!", 400, 300);
    draw;
    translate;
    physics;
};
