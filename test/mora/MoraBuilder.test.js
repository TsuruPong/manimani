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
        expect(builder.build("い")).toEqual([
            {
                from: "い",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "i",
                        children: []
                    }
                ]
            }
        ])
        expect(builder.build("う")).toEqual([
            {
                from: "う",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "u",
                        children: []
                    }
                ]
            }
        ])
        expect(builder.build("え")).toEqual([
            {
                from: "え",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "e",
                        children: []
                    }
                ]
            }
        ])
        expect(builder.build("お")).toEqual([
            {
                from: "お",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "o",
                        children: []
                    }
                ]
            }
        ])
        expect(builder.build("か")).toEqual([
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
                    }
                ]
            }
        ])
    })
})