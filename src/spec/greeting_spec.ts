import { greeting } from "greeting";

describe("Greeting tests", () => {
    it("Should have Hello World!", () => {
        assert.equal("Hello world!", greeting);
    });
});
