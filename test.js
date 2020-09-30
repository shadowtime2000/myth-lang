const { expect } = require("chai");
const run = require("./src/index");

describe("run", () => {
  it("should run correctly", () => {
    expect(run({ _: "Hello World!" })).to.equal("Hello World!");
  });
  it("should run correctly", () => {
    expect(run({ a: "Hello", b: "World", _: "a b!" })).to.equal("Hello World!");
  });
});
