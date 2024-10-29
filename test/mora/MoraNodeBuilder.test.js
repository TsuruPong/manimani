"use strict"

var MoraNodeBuilder = require("../../src/mora/MoraNodeBuilder");
var builder = new MoraNodeBuilder();

describe("Node Builder Test", () => {
    test("roman to mora node", () => {
        expect(builder.build(["a"])).toEqual([{pos: 0, val: "a", children: []}])
    })
})