"use strict";

var Tokenizer = require("../src/Tokenizer");
var tokenizer = new Tokenizer();
describe("Tokenizer Test", () => {
    test("single kanji word", () => {
        function callback(data) {
            expect(data).toBe([
                {
                    from: "か",
                    pos: 0,
                    node: [
                        {
                            pos: 0,
                            val: "k",
                            children: [
                                {
                                    pos: 1,
                                    val: "a",
                                    children: []
                                }
                            ]
                        },
                        {
                            pos: 0,
                            val: "c",
                            children: [
                                {
                                    pos: 1,
                                    val: "a",
                                    children: []
                                }
                            ]
                        },
                    ]
                },
                {
                    from: "き",
                    pos: 1,
                    node: [
                        {
                            pos: 0,
                            val: "k",
                            children: [
                                {
                                    pos: 1,
                                    val: "i",
                                    children: []
                                }
                            ]
                        }
                    ]
                },
            ]);
        }
        tokenizer.tokenize("柿", callback);
    });
});