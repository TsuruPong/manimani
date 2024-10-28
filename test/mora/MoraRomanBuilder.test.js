"use strict";

var MoraRomanBuilder = require("../../src/mora/MoraRomanBuilder");
var builder = new MoraRomanBuilder();

describe("Roman Builder Test", () => {
    test("single word", () => {
        expect(builder.build("あ")).toEqual(["a"])
    })
})