const { dev, build, createApp } = require('../commands');

test("checking if dev command is defined", () => {
    expect(dev).toBeDefined();
})

test("checking if build command is defined", () => {
    expect(build).toBeDefined();
})

test("checking if createApp command is defined", () => {
    expect(createApp).toBeDefined();
})