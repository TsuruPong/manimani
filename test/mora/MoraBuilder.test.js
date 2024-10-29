"use strict";

var MoraBuilder = require("../../src/mora/MoraBuilder");
var builder = new MoraBuilder();

describe("Mora Builder Test", () => {
    test("hiragana to mora", () => {
        expect(builder.build("あ")).toEqual([
            {
                from: "あ",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "a",
                        children: []
                    }
                ]
            }
        ])
    })
})