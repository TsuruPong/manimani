"use strict"

var MoraNodeBuilder = require("../../src/mora/MoraNodeBuilder");
var builder = new MoraNodeBuilder();

describe("Node Builder Test", () => {
    test("single word", () => {
        expect(builder.build(["a"])).toEqual([{pos: 0, val: "a", children: []}])
    })
})