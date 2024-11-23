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
        ]);
        expect(builder.build("い")).toEqual([
            {
                from: "い",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "y",
                        children: [
                            {
                                pos: 1,
                                val: "i",
                                children: []
                            }
                        ]
                    },
                    {
                        pos: 0,
                        val: "i",
                        children: []
                    }
                ]
            }
        ]);
        expect(builder.build("う")).toEqual([
            {
                from: "う",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "w",
                        children: [
                            {
                                pos: 1,
                                val: "u",
                                children: []
                            },
                            {
                                pos: 1,
                                val: "h",
                                children: [
                                    {
                                        pos: 2,
                                        val: "u",
                                        children: []
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        pos: 0,
                        val: "u",
                        children: []
                    }
                ]
            }
        ]);
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
        ]);
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
        ]);
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
        ]);
        expect(builder.build("き")).toEqual([
            {
                from: "き",
                pos: 0,
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
            }
        ]);
        expect(builder.build("く")).toEqual([
            {
                from: "く",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "k",
                        children: [
                            {
                                pos: 1,
                                val: "u",
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
                                val: "u",
                                children: []
                            }
                        ]
                    },
                    {
                        pos: 0,
                        val: "q",
                        children: [
                            {
                                pos: 1,
                                val: "u",
                                children: []
                            }
                        ]
                    }
                ]
            }
        ]);
        expect(builder.build("け")).toEqual([
            {
                from: "け",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "k",
                        children: [
                            {
                                pos: 1,
                                val: "e",
                                children: []
                            }
                        ]
                    }
                ]
            }
        ]);
        expect(builder.build("こ")).toEqual([
            {
                from: "こ",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "k",
                        children: [
                            {
                                pos: 1,
                                val: "o",
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
                                val: "o",
                                children: []
                            }
                        ]
                    }
                ]
            }
        ]);
        expect(builder.build("さ")).toEqual([
            {
                from: "さ",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "s",
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
        ]);
        expect(builder.build("し")).toEqual([
            {
                from: "し",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "s",
                        children: [
                            {
                                pos: 1,
                                val: "i",
                                children: []
                            },
                            {
                                pos: 1,
                                val: "h",
                                children: [
                                    {
                                        pos: 2,
                                        val: "i",
                                        children: []
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        pos: 0,
                        val: "c",
                        children: [
                            {
                                pos: 1,
                                val: "i",
                                children: []
                            }
                        ]
                    }
                ]
            }
        ]);
        expect(builder.build("す")).toEqual([
            {
                from: "す",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "s",
                        children: [
                            {
                                pos: 1,
                                val: "u",
                                children: []
                            }
                        ]
                    }
                ]
            }
        ]);
        expect(builder.build("せ")).toEqual([
            {
                from: "せ",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "s",
                        children: [
                            {
                                pos: 1,
                                val: "e",
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
                                val: "e",
                                children: []
                            }
                        ]
                    }
                ]
            }
        ]);
        expect(builder.build("そ")).toEqual([
            {
                from: "そ",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "s",
                        children: [
                            {
                                pos: 1,
                                val: "o",
                                children: []
                            }
                        ]
                    }
                ]
            }
        ]);
        expect(builder.build("た")).toEqual([
            {
                from: "た",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "t",
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
        ]);
        expect(builder.build("ち")).toEqual([
            {
                from: "ち",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "t",
                        children: [
                            {
                                pos: 1,
                                val: "i",
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
                                val: "h",
                                children: [
                                    {
                                        pos: 2,
                                        val: "i",
                                        children: []
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]);
        expect(builder.build("つ")).toEqual([
            {
                from: "つ",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "t",
                        children: [
                            {
                                pos: 1,
                                val: "u",
                                children: []
                            },
                            {
                                pos: 1,
                                val: "s",
                                children: [
                                    {
                                        pos: 2,
                                        val: "u",
                                        children: []
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]);
        expect(builder.build("て")).toEqual([
            {
                from: "て",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "t",
                        children: [
                            {
                                pos: 1,
                                val: "e",
                                children: []
                            }
                        ]
                    }
                ]
            }
        ]);
        expect(builder.build("と")).toEqual([
            {
                from: "と",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "t",
                        children: [
                            {
                                pos: 1,
                                val: "o",
                                children: []
                            }
                        ]
                    }
                ]
            }
        ]);
        expect(builder.build("な")).toEqual([
            {
                from: "な",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "n",
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
        ]);
        expect(builder.build("に")).toEqual([
            {
                from: "に",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "n",
                        children: [
                            {
                                pos: 1,
                                val: "i",
                                children: []
                            }
                        ]
                    }
                ]
            }
        ]);
        expect(builder.build("ぬ")).toEqual([
            {
                from: "ぬ",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "n",
                        children: [
                            {
                                pos: 1,
                                val: "u",
                                children: []
                            }
                        ]
                    }
                ]
            }
        ]);
        expect(builder.build("ね")).toEqual([
            {
                from: "ね",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "n",
                        children: [
                            {
                                pos: 1,
                                val: "e",
                                children: []
                            }
                        ]
                    }
                ]
            }
        ]);
        expect(builder.build("の")).toEqual([
            {
                from: "の",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "n",
                        children: [
                            {
                                pos: 1,
                                val: "o",
                                children: []
                            }
                        ]
                    }
                ]
            }
        ]);
        expect(builder.build("は")).toEqual([
            {
                from: "は",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "h",
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
        ]);
        expect(builder.build("ひ")).toEqual([
            {
                from: "ひ",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "h",
                        children: [
                            {
                                pos: 1,
                                val: "i",
                                children: []
                            }
                        ]
                    }
                ]
            }
        ]);
        expect(builder.build("ふ")).toEqual([
            {
                from: "ふ",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "h",
                        children: [
                            {
                                pos: 1,
                                val: "u",
                                children: []
                            }
                        ]
                    },
                    {
                        pos: 0,
                        val: "f",
                        children: [
                            {
                                pos: 1,
                                val: "u",
                                children: []
                            }
                        ]
                    }
                ]
            }
        ]);
        expect(builder.build("へ")).toEqual([
            {
                from: "へ",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "h",
                        children: [
                            {
                                pos: 1,
                                val: "e",
                                children: []
                            }
                        ]
                    }
                ]
            }
        ]);
        expect(builder.build("ほ")).toEqual([
            {
                from: "ほ",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "h",
                        children: [
                            {
                                pos: 1,
                                val: "o",
                                children: []
                            }
                        ]
                    }
                ]
            }
        ]);
        expect(builder.build("ま")).toEqual([
            {
                from: "ま",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "m",
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
        ]);
        expect(builder.build("み")).toEqual([
            {
                from: "み",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "m",
                        children: [
                            {
                                pos: 1,
                                val: "i",
                                children: []
                            }
                        ]
                    }
                ]
            }
        ]);
        expect(builder.build("む")).toEqual([
            {
                from: "む",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "m",
                        children: [
                            {
                                pos: 1,
                                val: "u",
                                children: []
                            }
                        ]
                    }
                ]
            }
        ]);
        expect(builder.build("め")).toEqual([
            {
                from: "め",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "m",
                        children: [
                            {
                                pos: 1,
                                val: "e",
                                children: []
                            }
                        ]
                    }
                ]
            }
        ]);
        expect(builder.build("も")).toEqual([
            {
                from: "も",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "m",
                        children: [
                            {
                                pos: 1,
                                val: "o",
                                children: []
                            }
                        ]
                    }
                ]
            }
        ]);
        expect(builder.build("や")).toEqual([
            {
                from: "や",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "y",
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
        ]);
        expect(builder.build("ゆ")).toEqual([
            {
                from: "ゆ",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "y",
                        children: [
                            {
                                pos: 1,
                                val: "u",
                                children: []
                            }
                        ]
                    }
                ]
            }
        ]);
        expect(builder.build("よ")).toEqual([
            {
                from: "よ",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "y",
                        children: [
                            {
                                pos: 1,
                                val: "o",
                                children: []
                            }
                        ]
                    }
                ]
            }
        ]);
        expect(builder.build("ら")).toEqual([
            {
                from: "ら",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "r",
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
        ]);
        expect(builder.build("り")).toEqual([
            {
                from: "り",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "r",
                        children: [
                            {
                                pos: 1,
                                val: "i",
                                children: []
                            }
                        ]
                    }
                ]
            }
        ]);
        expect(builder.build("る")).toEqual([
            {
                from: "る",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "r",
                        children: [
                            {
                                pos: 1,
                                val: "u",
                                children: []
                            }
                        ]
                    }
                ]
            }
        ]);
        expect(builder.build("れ")).toEqual([
            {
                from: "れ",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "r",
                        children: [
                            {
                                pos: 1,
                                val: "e",
                                children: []
                            }
                        ]
                    }
                ]
            }
        ]);
        expect(builder.build("ろ")).toEqual([
            {
                from: "ろ",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "r",
                        children: [
                            {
                                pos: 1,
                                val: "o",
                                children: []
                            }
                        ]
                    }
                ]
            }
        ]);
        expect(builder.build("わ")).toEqual([
            {
                from: "わ",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "w",
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
        ]);
        expect(builder.build("を")).toEqual([
            {
                from: "を",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "w",
                        children: [
                            {
                                pos: 1,
                                val: "o",
                                children: []
                            }
                        ]
                    }
                ]
            }
        ]);
        expect(builder.build("ん")).toEqual([
            {
                from: "ん",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "n",
                        children: [
                            {
                                pos: 1,
                                val: "n",
                                children: []
                            }
                        ]
                    },
                    {
                        pos: 0,
                        val: "x",
                        children: [
                            {
                                pos: 1,
                                val: "n",
                                children: []
                            }
                        ]
                    }
                ]
            }
        ]);
        expect(builder.build("が")).toEqual([
            {
                from: "が",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "g",
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
        ]);
        expect(builder.build("ぎ")).toEqual([
            {
                from: "ぎ",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "g",
                        children: [
                            {
                                pos: 1,
                                val: "i",
                                children: []
                            }
                        ]
                    }
                ]
            }
        ]);
        expect(builder.build("ぐ")).toEqual([
            {
                from: "ぐ",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "g",
                        children: [
                            {
                                pos: 1,
                                val: "u",
                                children: []
                            }
                        ]
                    }
                ]
            }
        ]);
        expect(builder.build("げ")).toEqual([
            {
                from: "げ",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "g",
                        children: [
                            {
                                pos: 1,
                                val: "e",
                                children: []
                            }
                        ]
                    }
                ]
            }
        ]);
        expect(builder.build("ご")).toEqual([
            {
                from: "ご",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "g",
                        children: [
                            {
                                pos: 1,
                                val: "o",
                                children: []
                            }
                        ]
                    }
                ]
            }
        ]);
        expect(builder.build("ざ")).toEqual([
            {
                from: "ざ",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "z",
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
        ]);
        expect(builder.build("じ")).toEqual([
            {
                from: "じ",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "z",
                        children: [
                            {
                                pos: 1,
                                val: "i",
                                children: []
                            }
                        ]
                    },
                    {
                        pos: 0,
                        val: "j",
                        children: [
                            {
                                pos: 1,
                                val: "i",
                                children: []
                            }
                        ]
                    }
                ]
            }
        ]);
        expect(builder.build("ず")).toEqual([
            {
                from: "ず",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "z",
                        children: [
                            {
                                pos: 1,
                                val: "u",
                                children: []
                            }
                        ]
                    }
                ]
            }
        ]);
        expect(builder.build("ぜ")).toEqual([
            {
                from: "ぜ",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "z",
                        children: [
                            {
                                pos: 1,
                                val: "e",
                                children: []
                            }
                        ]
                    }
                ]
            }
        ]);
        expect(builder.build("ぞ")).toEqual([
            {
                from: "ぞ",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "z",
                        children: [
                            {
                                pos: 1,
                                val: "o",
                                children: []
                            }
                        ]
                    }
                ]
            }
        ]);
        expect(builder.build("だ")).toEqual([
            {
                from: "だ",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "d",
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
        ]);
        expect(builder.build("ぢ")).toEqual([
            {
                from: "ぢ",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "d",
                        children: [
                            {
                                pos: 1,
                                val: "i",
                                children: []
                            }
                        ]
                    }
                ]
            }
        ]);
        expect(builder.build("づ")).toEqual([
            {
                from: "づ",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "d",
                        children: [
                            {
                                pos: 1,
                                val: "u",
                                children: []
                            }
                        ]
                    }
                ]
            }
        ]);
        expect(builder.build("で")).toEqual([
            {
                from: "で",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "d",
                        children: [
                            {
                                pos: 1,
                                val: "e",
                                children: []
                            }
                        ]
                    }
                ]
            }
        ]);
        expect(builder.build("ど")).toEqual([
            {
                from: "ど",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "d",
                        children: [
                            {
                                pos: 1,
                                val: "o",
                                children: []
                            }
                        ]
                    }
                ]
            }
        ]);
        expect(builder.build("ば")).toEqual([
            {
                from: "ば",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "b",
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
        ]);
        expect(builder.build("び")).toEqual([
            {
                from: "び",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "b",
                        children: [
                            {
                                pos: 1,
                                val: "i",
                                children: []
                            }
                        ]
                    }
                ]
            }
        ]);
        expect(builder.build("ぶ")).toEqual([
            {
                from: "ぶ",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "b",
                        children: [
                            {
                                pos: 1,
                                val: "u",
                                children: []
                            }
                        ]
                    }
                ]
            }
        ]);
        expect(builder.build("べ")).toEqual([
            {
                from: "べ",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "b",
                        children: [
                            {
                                pos: 1,
                                val: "e",
                                children: []
                            }
                        ]
                    }
                ]
            }
        ]);
        expect(builder.build("ぼ")).toEqual([
            {
                from: "ぼ",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "b",
                        children: [
                            {
                                pos: 1,
                                val: "o",
                                children: []
                            }
                        ]
                    }
                ]
            }
        ]);
        expect(builder.build("ぱ")).toEqual([
            {
                from: "ぱ",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "p",
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
        ]);
        expect(builder.build("ぴ")).toEqual([
            {
                from: "ぴ",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "p",
                        children: [
                            {
                                pos: 1,
                                val: "i",
                                children: []
                            }
                        ]
                    }
                ]
            }
        ]);
        expect(builder.build("ぷ")).toEqual([
            {
                from: "ぷ",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "p",
                        children: [
                            {
                                pos: 1,
                                val: "u",
                                children: []
                            }
                        ]
                    }
                ]
            }
        ]);
        expect(builder.build("ぺ")).toEqual([
            {
                from: "ぺ",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "p",
                        children: [
                            {
                                pos: 1,
                                val: "e",
                                children: []
                            }
                        ]
                    }
                ]
            }
        ]);
        expect(builder.build("ぽ")).toEqual([
            {
                from: "ぽ",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "p",
                        children: [
                            {
                                pos: 1,
                                val: "o",
                                children: []
                            }
                        ]
                    }
                ]
            }
        ]);
        expect(builder.build("いぇ")).toEqual([
            {
                from: "いぇ",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "y",
                        children: [
                            {
                                pos: 1,
                                val: "e",
                                children: []
                            },
                            {
                                pos: 1,
                                val: "i",
                                children: [
                                    {
                                        pos: 2,
                                        val: "x",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "e",
                                                children: []
                                            }
                                        ]
                                    },
                                    {
                                        pos: 2,
                                        val: "l",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "e",
                                                children: []
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        pos: 0,
                        val: "i",
                        children: [
                            {
                                pos: 1,
                                val: "x",
                                children: [
                                    {
                                        pos: 2,
                                        val: "e",
                                        children: []
                                    }
                                ]
                            },
                            {
                                pos: 1,
                                val: "l",
                                children: [
                                    {
                                        pos: 2,
                                        val: "e",
                                        children: []
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]);
        expect(builder.build("うぃ")).toEqual([
            {
                from: "うぃ",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "w",
                        children: [
                            {
                                pos: 1,
                                val: "i",
                                children: []
                            },
                            {
                                pos: 1,
                                val: "u",
                                children: [
                                    {
                                        pos: 2,
                                        val: "x",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "i",
                                                children: []
                                            }
                                        ]
                                    },
                                    {
                                        pos: 2,
                                        val: "l",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "i",
                                                children: []
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                pos: 1,
                                val: "h",
                                children: [
                                    {
                                        pos: 2,
                                        val: "u",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "x",
                                                children: [
                                                    {
                                                        pos: 4,
                                                        val: "i",
                                                        children: []
                                                    }
                                                ]
                                            },
                                            {
                                                pos: 3,
                                                val: "l",
                                                children: [
                                                    {
                                                        pos: 4,
                                                        val: "i",
                                                        children: []
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        pos: 0,
                        val: "u",
                        children: [
                            {
                                pos: 1,
                                val: "x",
                                children: [
                                    {
                                        pos: 2,
                                        val: "i",
                                        children: []
                                    }
                                ]
                            },
                            {
                                pos: 1,
                                val: "l",
                                children: [
                                    {
                                        pos: 2,
                                        val: "i",
                                        children: []
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]);
        expect(builder.build("うぇ")).toEqual([
            {
                from: "うぇ",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "w",
                        children: [
                            {
                                pos: 1,
                                val: "e",
                                children: []
                            },
                            {
                                pos: 1,
                                val: "u",
                                children: [
                                    {
                                        pos: 2,
                                        val: "x",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "e",
                                                children: []
                                            }
                                        ]
                                    },
                                    {
                                        pos: 2,
                                        val: "l",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "e",
                                                children: []
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                pos: 1,
                                val: "h",
                                children: [
                                    {
                                        pos: 2,
                                        val: "u",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "x",
                                                children: [
                                                    {
                                                        pos: 4,
                                                        val: "e",
                                                        children: []
                                                    }
                                                ]
                                            },
                                            {
                                                pos: 3,
                                                val: "l",
                                                children: [
                                                    {
                                                        pos: 4,
                                                        val: "e",
                                                        children: []
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        pos: 0,
                        val: "u",
                        children: [
                            {
                                pos: 1,
                                val: "x",
                                children: [
                                    {
                                        pos: 2,
                                        val: "e",
                                        children: []
                                    }
                                ]
                            },
                            {
                                pos: 1,
                                val: "l",
                                children: [
                                    {
                                        pos: 2,
                                        val: "e",
                                        children: []
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]);
        expect(builder.build("きゃ")).toEqual([
            {
                from: "きゃ",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "k",
                        children: [
                            {
                                pos: 1,
                                val: "y",
                                children: [
                                    {
                                        pos: 2,
                                        val: "a",
                                        children: []
                                    }
                                ]
                            },
                            {
                                pos: 1,
                                val: "i",
                                children: [
                                    {
                                        pos: 2,
                                        val: "x",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "y",
                                                children: [
                                                    {
                                                        pos: 4,
                                                        val: "a",
                                                        children: []
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        pos: 2,
                                        val: "l",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "y",
                                                children: [
                                                    {
                                                        pos: 4,
                                                        val: "a",
                                                        children: []
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]);
        expect(builder.build("きぃ")).toEqual([
            {
                from: "きぃ",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "k",
                        children: [
                            {
                                pos: 1,
                                val: "y",
                                children: [
                                    {
                                        pos: 2,
                                        val: "i",
                                        children: []
                                    }
                                ]
                            },
                            {
                                pos: 1,
                                val: "i",
                                children: [
                                    {
                                        pos: 2,
                                        val: "x",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "i",
                                                children: []
                                            }
                                        ]
                                    },
                                    {
                                        pos: 2,
                                        val: "l",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "i",
                                                children: []
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]);
        expect(builder.build("きゅ")).toEqual([
            {
                from: "きゅ",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "k",
                        children: [
                            {
                                pos: 1,
                                val: "y",
                                children: [
                                    {
                                        pos: 2,
                                        val: "u",
                                        children: []
                                    }
                                ]
                            },
                            {
                                pos: 1,
                                val: "i",
                                children: [
                                    {
                                        pos: 2,
                                        val: "x",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "y",
                                                children: [
                                                    {
                                                        pos: 4,
                                                        val: "u",
                                                        children: []
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        pos: 2,
                                        val: "l",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "y",
                                                children: [
                                                    {
                                                        pos: 4,
                                                        val: "u",
                                                        children: []
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]);
        expect(builder.build("きぇ")).toEqual([
            {
                from: "きぇ",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "k",
                        children: [
                            {
                                pos: 1,
                                val: "y",
                                children: [
                                    {
                                        pos: 2,
                                        val: "e",
                                        children: []
                                    }
                                ]
                            },
                            {
                                pos: 1,
                                val: "i",
                                children: [
                                    {
                                        pos: 2,
                                        val: "x",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "e",
                                                children: []
                                            }
                                        ]
                                    },
                                    {
                                        pos: 2,
                                        val: "l",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "e",
                                                children: []
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]);
        expect(builder.build("きょ")).toEqual([
            {
                from: "きょ",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "k",
                        children: [
                            {
                                pos: 1,
                                val: "y",
                                children: [
                                    {
                                        pos: 2,
                                        val: "o",
                                        children: []
                                    }
                                ]
                            },
                            {
                                pos: 1,
                                val: "i",
                                children: [
                                    {
                                        pos: 2,
                                        val: "x",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "y",
                                                children: [
                                                    {
                                                        pos: 4,
                                                        val: "o",
                                                        children: []
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        pos: 2,
                                        val: "l",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "y",
                                                children: [
                                                    {
                                                        pos: 4,
                                                        val: "o",
                                                        children: []
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]);
        expect(builder.build("ぎゃ")).toEqual([
            {
                from: "ぎゃ",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "g",
                        children: [
                            {
                                pos: 1,
                                val: "y",
                                children: [
                                    {
                                        pos: 2,
                                        val: "a",
                                        children: []
                                    }
                                ]
                            },
                            {
                                pos: 1,
                                val: "i",
                                children: [
                                    {
                                        pos: 2,
                                        val: "x",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "y",
                                                children: [
                                                    {
                                                        pos: 4,
                                                        val: "a",
                                                        children: []
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        pos: 2,
                                        val: "l",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "y",
                                                children: [
                                                    {
                                                        pos: 4,
                                                        val: "a",
                                                        children: []
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]);
        expect(builder.build("ぎぃ")).toEqual([
            {
                from: "ぎぃ",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "g",
                        children: [
                            {
                                pos: 1,
                                val: "y",
                                children: [
                                    {
                                        pos: 2,
                                        val: "i",
                                        children: []
                                    }
                                ]
                            },
                            {
                                pos: 1,
                                val: "i",
                                children: [
                                    {
                                        pos: 2,
                                        val: "x",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "i",
                                                children: []
                                            }
                                        ]
                                    },
                                    {
                                        pos: 2,
                                        val: "l",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "i",
                                                children: []
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]);
        expect(builder.build("ぎゅ")).toEqual([
            {
                from: "ぎゅ",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "g",
                        children: [
                            {
                                pos: 1,
                                val: "y",
                                children: [
                                    {
                                        pos: 2,
                                        val: "u",
                                        children: []
                                    }
                                ]
                            },
                            {
                                pos: 1,
                                val: "i",
                                children: [
                                    {
                                        pos: 2,
                                        val: "x",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "y",
                                                children: [
                                                    {
                                                        pos: 4,
                                                        val: "u",
                                                        children: []
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        pos: 2,
                                        val: "l",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "y",
                                                children: [
                                                    {
                                                        pos: 4,
                                                        val: "u",
                                                        children: []
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]);
        expect(builder.build("ぎぇ")).toEqual([
            {
                from: "ぎぇ",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "g",
                        children: [
                            {
                                pos: 1,
                                val: "y",
                                children: [
                                    {
                                        pos: 2,
                                        val: "e",
                                        children: []
                                    }
                                ]
                            },
                            {
                                pos: 1,
                                val: "i",
                                children: [
                                    {
                                        pos: 2,
                                        val: "x",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "e",
                                                children: []
                                            }
                                        ]
                                    },
                                    {
                                        pos: 2,
                                        val: "l",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "e",
                                                children: []
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]);
        expect(builder.build("ぎょ")).toEqual([
            {
                from: "ぎょ",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "g",
                        children: [
                            {
                                pos: 1,
                                val: "y",
                                children: [
                                    {
                                        pos: 2,
                                        val: "o",
                                        children: []
                                    }
                                ]
                            },
                            {
                                pos: 1,
                                val: "i",
                                children: [
                                    {
                                        pos: 2,
                                        val: "x",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "y",
                                                children: [
                                                    {
                                                        pos: 4,
                                                        val: "o",
                                                        children: []
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        pos: 2,
                                        val: "l",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "y",
                                                children: [
                                                    {
                                                        pos: 4,
                                                        val: "o",
                                                        children: []
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]);
        expect(builder.build("くぁ")).toEqual([
            {
                from: "くぁ",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "q",
                        children: [
                            {
                                pos: 1,
                                val: "a",
                                children: []
                            },
                            {
                                pos: 1,
                                val: "u",
                                children: [
                                    {
                                        pos: 2,
                                        val: "x",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "a",
                                                children: []
                                            }
                                        ]
                                    },
                                    {
                                        pos: 2,
                                        val: "l",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "a",
                                                children: []
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        pos: 0,
                        val: "k",
                        children: [
                            {
                                pos: 1,
                                val: "w",
                                children: [
                                    {
                                        pos: 2,
                                        val: "a",
                                        children: []
                                    }
                                ]
                            },
                            {
                                pos: 1,
                                val: "u",
                                children: [
                                    {
                                        pos: 2,
                                        val: "x",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "a",
                                                children: []
                                            }
                                        ]
                                    },
                                    {
                                        pos: 2,
                                        val: "l",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "a",
                                                children: []
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        pos: 0,
                        val: "c",
                        children: [
                            {
                                pos: 1,
                                val: "u",
                                children: [
                                    {
                                        pos: 2,
                                        val: "x",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "a",
                                                children: []
                                            }
                                        ]
                                    },
                                    {
                                        pos: 2,
                                        val: "l",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "a",
                                                children: []
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]);
        expect(builder.build("くぃ")).toEqual([
            {
                from: "くぃ",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "q",
                        children: [
                            {
                                pos: 1,
                                val: "i",
                                children: []
                            },
                            {
                                pos: 1,
                                val: "u",
                                children: [
                                    {
                                        pos: 2,
                                        val: "x",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "i",
                                                children: []
                                            }
                                        ]
                                    },
                                    {
                                        pos: 2,
                                        val: "l",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "i",
                                                children: []
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        pos: 0,
                        val: "k",
                        children: [
                            {
                                pos: 1,
                                val: "w",
                                children: [
                                    {
                                        pos: 2,
                                        val: "i",
                                        children: []
                                    }
                                ]
                            },
                            {
                                pos: 1,
                                val: "u",
                                children: [
                                    {
                                        pos: 2,
                                        val: "x",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "i",
                                                children: []
                                            }
                                        ]
                                    },
                                    {
                                        pos: 2,
                                        val: "l",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "i",
                                                children: []
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        pos: 0,
                        val: "c",
                        children: [
                            {
                                pos: 1,
                                val: "u",
                                children: [
                                    {
                                        pos: 2,
                                        val: "x",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "i",
                                                children: []
                                            }
                                        ]
                                    },
                                    {
                                        pos: 2,
                                        val: "l",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "i",
                                                children: []
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]);
        expect(builder.build("くぇ")).toEqual([
            {
                from: "くぇ",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "q",
                        children: [
                            {
                                pos: 1,
                                val: "e",
                                children: []
                            },
                            {
                                pos: 1,
                                val: "u",
                                children: [
                                    {
                                        pos: 2,
                                        val: "x",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "e",
                                                children: []
                                            }
                                        ]
                                    },
                                    {
                                        pos: 2,
                                        val: "l",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "e",
                                                children: []
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        pos: 0,
                        val: "k",
                        children: [
                            {
                                pos: 1,
                                val: "w",
                                children: [
                                    {
                                        pos: 2,
                                        val: "e",
                                        children: []
                                    }
                                ]
                            },
                            {
                                pos: 1,
                                val: "u",
                                children: [
                                    {
                                        pos: 2,
                                        val: "x",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "e",
                                                children: []
                                            }
                                        ]
                                    },
                                    {
                                        pos: 2,
                                        val: "l",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "e",
                                                children: []
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        pos: 0,
                        val: "c",
                        children: [
                            {
                                pos: 1,
                                val: "u",
                                children: [
                                    {
                                        pos: 2,
                                        val: "x",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "e",
                                                children: []
                                            }
                                        ]
                                    },
                                    {
                                        pos: 2,
                                        val: "l",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "e",
                                                children: []
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]);
        expect(builder.build("くぉ")).toEqual([
            {
                from: "くぉ",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "q",
                        children: [
                            {
                                pos: 1,
                                val: "o",
                                children: []
                            },
                            {
                                pos: 1,
                                val: "u",
                                children: [
                                    {
                                        pos: 2,
                                        val: "x",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "o",
                                                children: []
                                            }
                                        ]
                                    },
                                    {
                                        pos: 2,
                                        val: "l",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "o",
                                                children: []
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        pos: 0,
                        val: "k",
                        children: [
                            {
                                pos: 1,
                                val: "w",
                                children: [
                                    {
                                        pos: 2,
                                        val: "o",
                                        children: []
                                    }
                                ]
                            },
                            {
                                pos: 1,
                                val: "u",
                                children: [
                                    {
                                        pos: 2,
                                        val: "x",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "o",
                                                children: []
                                            }
                                        ]
                                    },
                                    {
                                        pos: 2,
                                        val: "l",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "o",
                                                children: []
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        pos: 0,
                        val: "c",
                        children: [
                            {
                                pos: 1,
                                val: "u",
                                children: [
                                    {
                                        pos: 2,
                                        val: "x",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "o",
                                                children: []
                                            }
                                        ]
                                    },
                                    {
                                        pos: 2,
                                        val: "l",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "o",
                                                children: []
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]);
        expect(builder.build("しゃ")).toEqual([
            {
                from: "しゃ",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "s",
                        children: [
                            {
                                pos: 1,
                                val: "h",
                                children: [
                                    {
                                        pos: 2,
                                        val: "a",
                                        children: []
                                    },
                                    {
                                        pos: 2,
                                        val: "i",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "x",
                                                children: [
                                                    {
                                                        pos: 4,
                                                        val: "y",
                                                        children: [
                                                            {
                                                                pos: 5,
                                                                val: "a",
                                                                children: []
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                pos: 3,
                                                val: "l",
                                                children: [
                                                    {
                                                        pos: 4,
                                                        val: "y",
                                                        children: [
                                                            {
                                                                pos: 5,
                                                                val: "a",
                                                                children: []
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                pos: 1,
                                val: "y",
                                children: [
                                    {
                                        pos: 2,
                                        val: "a",
                                        children: []
                                    }
                                ]
                            },
                            {
                                pos: 1,
                                val: "i",
                                children: [
                                    {
                                        pos: 2,
                                        val: "x",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "y",
                                                children: [
                                                    {
                                                        pos: 4,
                                                        val: "a",
                                                        children: []
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        pos: 2,
                                        val: "l",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "y",
                                                children: [
                                                    {
                                                        pos: 4,
                                                        val: "a",
                                                        children: []
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        pos: 0,
                        val: "c",
                        children: [
                            {
                                pos: 1,
                                val: "i",
                                children: [
                                    {
                                        pos: 2,
                                        val: "x",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "y",
                                                children: [
                                                    {
                                                        pos: 4,
                                                        val: "a",
                                                        children: []
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        pos: 2,
                                        val: "l",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "y",
                                                children: [
                                                    {
                                                        pos: 4,
                                                        val: "a",
                                                        children: []
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]);
        expect(builder.build("しぃ")).toEqual([
            {
                from: "しぃ",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "s",
                        children: [
                            {
                                pos: 1,
                                val: "y",
                                children: [
                                    {
                                        pos: 2,
                                        val: "i",
                                        children: []
                                    }
                                ]
                            },
                            {
                                pos: 1,
                                val: "i",
                                children: [
                                    {
                                        pos: 2,
                                        val: "x",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "i",
                                                children: []
                                            }
                                        ]
                                    },
                                    {
                                        pos: 2,
                                        val: "l",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "i",
                                                children: []
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                pos: 1,
                                val: "h",
                                children: [
                                    {
                                        pos: 2,
                                        val: "i",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "x",
                                                children: [
                                                    {
                                                        pos: 4,
                                                        val: "i",
                                                        children: []
                                                    }
                                                ]
                                            },
                                            {
                                                pos: 3,
                                                val: "l",
                                                children: [
                                                    {
                                                        pos: 4,
                                                        val: "i",
                                                        children: []
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        pos: 0,
                        val: "c",
                        children: [
                            {
                                pos: 1,
                                val: "i",
                                children: [
                                    {
                                        pos: 2,
                                        val: "x",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "i",
                                                children: []
                                            }
                                        ]
                                    },
                                    {
                                        pos: 2,
                                        val: "l",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "i",
                                                children: []
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]);
        expect(builder.build("しゅ")).toEqual([
            {
                from: "しゅ",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "s",
                        children: [
                            {
                                pos: 1,
                                val: "h",
                                children: [
                                    {
                                        pos: 2,
                                        val: "u",
                                        children: []
                                    },
                                    {
                                        pos: 2,
                                        val: "i",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "x",
                                                children: [
                                                    {
                                                        pos: 4,
                                                        val: "y",
                                                        children: [
                                                            {
                                                                pos: 5,
                                                                val: "u",
                                                                children: []
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                pos: 3,
                                                val: "l",
                                                children: [
                                                    {
                                                        pos: 4,
                                                        val: "y",
                                                        children: [
                                                            {
                                                                pos: 5,
                                                                val: "u",
                                                                children: []
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                pos: 1,
                                val: "y",
                                children: [
                                    {
                                        pos: 2,
                                        val: "u",
                                        children: []
                                    }
                                ]
                            },
                            {
                                pos: 1,
                                val: "i",
                                children: [
                                    {
                                        pos: 2,
                                        val: "x",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "y",
                                                children: [
                                                    {
                                                        pos: 4,
                                                        val: "u",
                                                        children: []
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        pos: 2,
                                        val: "l",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "y",
                                                children: [
                                                    {
                                                        pos: 4,
                                                        val: "u",
                                                        children: []
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        pos: 0,
                        val: "c",
                        children: [
                            {
                                pos: 1,
                                val: "i",
                                children: [
                                    {
                                        pos: 2,
                                        val: "x",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "y",
                                                children: [
                                                    {
                                                        pos: 4,
                                                        val: "u",
                                                        children: []
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        pos: 2,
                                        val: "l",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "y",
                                                children: [
                                                    {
                                                        pos: 4,
                                                        val: "u",
                                                        children: []
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]);
        expect(builder.build("しぇ")).toEqual([
            {
                from: "しぇ",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "s",
                        children: [
                            {
                                pos: 1,
                                val: "h",
                                children: [
                                    {
                                        pos: 2,
                                        val: "e",
                                        children: []
                                    },
                                    {
                                        pos: 2,
                                        val: "i",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "x",
                                                children: [
                                                    {
                                                        pos: 4,
                                                        val: "e",
                                                        children: []
                                                    }
                                                ]
                                            },
                                            {
                                                pos: 3,
                                                val: "l",
                                                children: [
                                                    {
                                                        pos: 4,
                                                        val: "e",
                                                        children: []
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                pos: 1,
                                val: "y",
                                children: [
                                    {
                                        pos: 2,
                                        val: "e",
                                        children: []
                                    }
                                ]
                            },
                            {
                                pos: 1,
                                val: "i",
                                children: [
                                    {
                                        pos: 2,
                                        val: "x",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "e",
                                                children: []
                                            }
                                        ]
                                    },
                                    {
                                        pos: 2,
                                        val: "l",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "e",
                                                children: []
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        pos: 0,
                        val: "c",
                        children: [
                            {
                                pos: 1,
                                val: "i",
                                children: [
                                    {
                                        pos: 2,
                                        val: "x",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "e",
                                                children: []
                                            }
                                        ]
                                    },
                                    {
                                        pos: 2,
                                        val: "l",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "e",
                                                children: []
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]);
        expect(builder.build("しょ")).toEqual([
            {
                from: "しょ",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "s",
                        children: [
                            {
                                pos: 1,
                                val: "h",
                                children: [
                                    {
                                        pos: 2,
                                        val: "o",
                                        children: []
                                    },
                                    {
                                        pos: 2,
                                        val: "i",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "x",
                                                children: [
                                                    {
                                                        pos: 4,
                                                        val: "y",
                                                        children: [
                                                            {
                                                                pos: 5,
                                                                val: "o",
                                                                children: []
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                pos: 3,
                                                val: "l",
                                                children: [
                                                    {
                                                        pos: 4,
                                                        val: "y",
                                                        children: [
                                                            {
                                                                pos: 5,
                                                                val: "o",
                                                                children: []
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                pos: 1,
                                val: "y",
                                children: [
                                    {
                                        pos: 2,
                                        val: "o",
                                        children: []
                                    }
                                ]
                            },
                            {
                                pos: 1,
                                val: "i",
                                children: [
                                    {
                                        pos: 2,
                                        val: "x",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "y",
                                                children: [
                                                    {
                                                        pos: 4,
                                                        val: "o",
                                                        children: []
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        pos: 2,
                                        val: "l",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "y",
                                                children: [
                                                    {
                                                        pos: 4,
                                                        val: "o",
                                                        children: []
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        pos: 0,
                        val: "c",
                        children: [
                            {
                                pos: 1,
                                val: "i",
                                children: [
                                    {
                                        pos: 2,
                                        val: "x",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "y",
                                                children: [
                                                    {
                                                        pos: 4,
                                                        val: "o",
                                                        children: []
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        pos: 2,
                                        val: "l",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "y",
                                                children: [
                                                    {
                                                        pos: 4,
                                                        val: "o",
                                                        children: []
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]);
        expect(builder.build("じゃ")).toEqual([
            {
                from: "じゃ",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "j",
                        children: [
                            {
                                pos: 1,
                                val: "a",
                                children: []
                            },
                            {
                                pos: 1,
                                val: "y",
                                children: [
                                    {
                                        pos: 2,
                                        val: "a",
                                        children: []
                                    }
                                ]
                            },
                            {
                                pos: 1,
                                val: "i",
                                children: [
                                    {
                                        pos: 2,
                                        val: "x",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "y",
                                                children: [
                                                    {
                                                        pos: 4,
                                                        val: "a",
                                                        children: []
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        pos: 2,
                                        val: "l",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "y",
                                                children: [
                                                    {
                                                        pos: 4,
                                                        val: "a",
                                                        children: []
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        pos: 0,
                        val: "z",
                        children: [
                            {
                                pos: 1,
                                val: "i",
                                children: [
                                    {
                                        pos: 2,
                                        val: "x",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "y",
                                                children: [
                                                    {
                                                        pos: 4,
                                                        val: "a",
                                                        children: []
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        pos: 2,
                                        val: "l",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "y",
                                                children: [
                                                    {
                                                        pos: 4,
                                                        val: "a",
                                                        children: []
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]);
        expect(builder.build("じぃ")).toEqual([
            {
                from: "じぃ",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "j",
                        children: [
                            {
                                pos: 1,
                                val: "y",
                                children: [
                                    {
                                        pos: 2,
                                        val: "i",
                                        children: []
                                    }
                                ]
                            },
                            {
                                pos: 1,
                                val: "i",
                                children: [
                                    {
                                        pos: 2,
                                        val: "x",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "i",
                                                children: []
                                            }
                                        ]
                                    },
                                    {
                                        pos: 2,
                                        val: "l",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "i",
                                                children: []
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        pos: 0,
                        val: "z",
                        children: [
                            {
                                pos: 1,
                                val: "i",
                                children: [
                                    {
                                        pos: 2,
                                        val: "x",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "i",
                                                children: []
                                            }
                                        ]
                                    },
                                    {
                                        pos: 2,
                                        val: "l",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "i",
                                                children: []
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]);
        expect(builder.build("じゅ")).toEqual([
            {
                from: "じゅ",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "j",
                        children: [
                            {
                                pos: 1,
                                val: "u",
                                children: []
                            },
                            {
                                pos: 1,
                                val: "y",
                                children: [
                                    {
                                        pos: 2,
                                        val: "u",
                                        children: []
                                    }
                                ]
                            },
                            {
                                pos: 1,
                                val: "i",
                                children: [
                                    {
                                        pos: 2,
                                        val: "x",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "y",
                                                children: [
                                                    {
                                                        pos: 4,
                                                        val: "u",
                                                        children: []
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        pos: 2,
                                        val: "l",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "y",
                                                children: [
                                                    {
                                                        pos: 4,
                                                        val: "u",
                                                        children: []
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        pos: 0,
                        val: "z",
                        children: [
                            {
                                pos: 1,
                                val: "i",
                                children: [
                                    {
                                        pos: 2,
                                        val: "x",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "y",
                                                children: [
                                                    {
                                                        pos: 4,
                                                        val: "u",
                                                        children: []
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        pos: 2,
                                        val: "l",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "y",
                                                children: [
                                                    {
                                                        pos: 4,
                                                        val: "u",
                                                        children: []
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]);
        expect(builder.build("じぇ")).toEqual([
            {
                from: "じぇ",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "j",
                        children: [
                            {
                                pos: 1,
                                val: "e",
                                children: []
                            },
                            {
                                pos: 1,
                                val: "y",
                                children: [
                                    {
                                        pos: 2,
                                        val: "e",
                                        children: []
                                    }
                                ]
                            },
                            {
                                pos: 1,
                                val: "i",
                                children: [
                                    {
                                        pos: 2,
                                        val: "x",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "e",
                                                children: []
                                            }
                                        ]
                                    },
                                    {
                                        pos: 2,
                                        val: "l",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "e",
                                                children: []
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        pos: 0,
                        val: "z",
                        children: [
                            {
                                pos: 1,
                                val: "i",
                                children: [
                                    {
                                        pos: 2,
                                        val: "x",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "e",
                                                children: []
                                            }
                                        ]
                                    },
                                    {
                                        pos: 2,
                                        val: "l",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "e",
                                                children: []
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]);
        expect(builder.build("じょ")).toEqual([
            {
                from: "じょ",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "j",
                        children: [
                            {
                                pos: 1,
                                val: "o",
                                children: []
                            },
                            {
                                pos: 1,
                                val: "y",
                                children: [
                                    {
                                        pos: 2,
                                        val: "o",
                                        children: []
                                    }
                                ]
                            },
                            {
                                pos: 1,
                                val: "i",
                                children: [
                                    {
                                        pos: 2,
                                        val: "x",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "y",
                                                children: [
                                                    {
                                                        pos: 4,
                                                        val: "o",
                                                        children: []
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        pos: 2,
                                        val: "l",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "y",
                                                children: [
                                                    {
                                                        pos: 4,
                                                        val: "o",
                                                        children: []
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        pos: 0,
                        val: "z",
                        children: [
                            {
                                pos: 1,
                                val: "i",
                                children: [
                                    {
                                        pos: 2,
                                        val: "x",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "y",
                                                children: [
                                                    {
                                                        pos: 4,
                                                        val: "o",
                                                        children: []
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        pos: 2,
                                        val: "l",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "y",
                                                children: [
                                                    {
                                                        pos: 4,
                                                        val: "o",
                                                        children: []
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]);
        expect(builder.build("ちゃ")).toEqual([
            {
                from: "ちゃ",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "c",
                        children: [
                            {
                                pos: 1,
                                val: "h",
                                children: [
                                    {
                                        pos: 2,
                                        val: "a",
                                        children: []
                                    },
                                    {
                                        pos: 2,
                                        val: "i",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "x",
                                                children: [
                                                    {
                                                        pos: 4,
                                                        val: "y",
                                                        children: [
                                                            {
                                                                pos: 5,
                                                                val: "a",
                                                                children: []
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                pos: 3,
                                                val: "l",
                                                children: [
                                                    {
                                                        pos: 4,
                                                        val: "y",
                                                        children: [
                                                            {
                                                                pos: 5,
                                                                val: "a",
                                                                children: []
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                pos: 1,
                                val: "y",
                                children: [
                                    {
                                        pos: 2,
                                        val: "a",
                                        children: []
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        pos: 0,
                        val: "t",
                        children: [
                            {
                                pos: 1,
                                val: "y",
                                children: [
                                    {
                                        pos: 2,
                                        val: "a",
                                        children: []
                                    }
                                ]
                            },
                            {
                                pos: 1,
                                val: "i",
                                children: [
                                    {
                                        pos: 2,
                                        val: "x",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "y",
                                                children: [
                                                    {
                                                        pos: 4,
                                                        val: "a",
                                                        children: []
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        pos: 2,
                                        val: "l",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "y",
                                                children: [
                                                    {
                                                        pos: 4,
                                                        val: "a",
                                                        children: []
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]);
        expect(builder.build("ちぃ")).toEqual([
            {
                from: "ちぃ",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "c",
                        children: [
                            {
                                pos: 1,
                                val: "y",
                                children: [
                                    {
                                        pos: 2,
                                        val: "i",
                                        children: []
                                    }
                                ]
                            },
                            {
                                pos: 1,
                                val: "h",
                                children: [
                                    {
                                        pos: 2,
                                        val: "i",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "x",
                                                children: [
                                                    {
                                                        pos: 4,
                                                        val: "i",
                                                        children: []
                                                    }
                                                ]
                                            },
                                            {
                                                pos: 3,
                                                val: "l",
                                                children: [
                                                    {
                                                        pos: 4,
                                                        val: "i",
                                                        children: []
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        pos: 0,
                        val: "t",
                        children: [
                            {
                                pos: 1,
                                val: "y",
                                children: [
                                    {
                                        pos: 2,
                                        val: "i",
                                        children: []
                                    }
                                ]
                            },
                            {
                                pos: 1,
                                val: "i",
                                children: [
                                    {
                                        pos: 2,
                                        val: "x",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "i",
                                                children: []
                                            }
                                        ]
                                    },
                                    {
                                        pos: 2,
                                        val: "l",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "i",
                                                children: []
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]);
        expect(builder.build("ちゅ")).toEqual([
            {
                from: "ちゅ",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "c",
                        children: [
                            {
                                pos: 1,
                                val: "h",
                                children: [
                                    {
                                        pos: 2,
                                        val: "u",
                                        children: []
                                    },
                                    {
                                        pos: 2,
                                        val: "i",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "x",
                                                children: [
                                                    {
                                                        pos: 4,
                                                        val: "y",
                                                        children: [
                                                            {
                                                                pos: 5,
                                                                val: "u",
                                                                children: []
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                pos: 3,
                                                val: "l",
                                                children: [
                                                    {
                                                        pos: 4,
                                                        val: "y",
                                                        children: [
                                                            {
                                                                pos: 5,
                                                                val: "u",
                                                                children: []
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                pos: 1,
                                val: "y",
                                children: [
                                    {
                                        pos: 2,
                                        val: "u",
                                        children: []
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        pos: 0,
                        val: "t",
                        children: [
                            {
                                pos: 1,
                                val: "y",
                                children: [
                                    {
                                        pos: 2,
                                        val: "u",
                                        children: []
                                    }
                                ]
                            },
                            {
                                pos: 1,
                                val: "i",
                                children: [
                                    {
                                        pos: 2,
                                        val: "x",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "y",
                                                children: [
                                                    {
                                                        pos: 4,
                                                        val: "u",
                                                        children: []
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        pos: 2,
                                        val: "l",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "y",
                                                children: [
                                                    {
                                                        pos: 4,
                                                        val: "u",
                                                        children: []
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]);
        expect(builder.build("ちぇ")).toEqual([
            {
                from: "ちぇ",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "c",
                        children: [
                            {
                                pos: 1,
                                val: "h",
                                children: [
                                    {
                                        pos: 2,
                                        val: "e",
                                        children: []
                                    },
                                    {
                                        pos: 2,
                                        val: "i",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "x",
                                                children: [
                                                    {
                                                        pos: 4,
                                                        val: "e",
                                                        children: []
                                                    }
                                                ]
                                            },
                                            {
                                                pos: 3,
                                                val: "l",
                                                children: [
                                                    {
                                                        pos: 4,
                                                        val: "e",
                                                        children: []
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                pos: 1,
                                val: "y",
                                children: [
                                    {
                                        pos: 2,
                                        val: "e",
                                        children: []
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        pos: 0,
                        val: "t",
                        children: [
                            {
                                pos: 1,
                                val: "y",
                                children: [
                                    {
                                        pos: 2,
                                        val: "e",
                                        children: []
                                    }
                                ]
                            },
                            {
                                pos: 1,
                                val: "i",
                                children: [
                                    {
                                        pos: 2,
                                        val: "x",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "e",
                                                children: []
                                            }
                                        ]
                                    },
                                    {
                                        pos: 2,
                                        val: "l",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "e",
                                                children: []
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]);
        expect(builder.build("ちょ")).toEqual([
            {
                from: "ちょ",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "c",
                        children: [
                            {
                                pos: 1,
                                val: "h",
                                children: [
                                    {
                                        pos: 2,
                                        val: "o",
                                        children: []
                                    },
                                    {
                                        pos: 2,
                                        val: "i",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "x",
                                                children: [
                                                    {
                                                        pos: 4,
                                                        val: "y",
                                                        children: [
                                                            {
                                                                pos: 5,
                                                                val: "o",
                                                                children: []
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                pos: 3,
                                                val: "l",
                                                children: [
                                                    {
                                                        pos: 4,
                                                        val: "y",
                                                        children: [
                                                            {
                                                                pos: 5,
                                                                val: "o",
                                                                children: []
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                pos: 1,
                                val: "y",
                                children: [
                                    {
                                        pos: 2,
                                        val: "o",
                                        children: []
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        pos: 0,
                        val: "t",
                        children: [
                            {
                                pos: 1,
                                val: "y",
                                children: [
                                    {
                                        pos: 2,
                                        val: "o",
                                        children: []
                                    }
                                ]
                            },
                            {
                                pos: 1,
                                val: "i",
                                children: [
                                    {
                                        pos: 2,
                                        val: "x",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "y",
                                                children: [
                                                    {
                                                        pos: 4,
                                                        val: "o",
                                                        children: []
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        pos: 2,
                                        val: "l",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "y",
                                                children: [
                                                    {
                                                        pos: 4,
                                                        val: "o",
                                                        children: []
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]);
        expect(builder.build("ぢゃ")).toEqual([
            {
                from: "ぢゃ",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "d",
                        children: [
                            {
                                pos: 1,
                                val: "y",
                                children: [
                                    {
                                        pos: 2,
                                        val: "a",
                                        children: []
                                    }
                                ]
                            },
                            {
                                pos: 1,
                                val: "i",
                                children: [
                                    {
                                        pos: 2,
                                        val: "x",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "y",
                                                children: [
                                                    {
                                                        pos: 4,
                                                        val: "a",
                                                        children: []
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        pos: 2,
                                        val: "l",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "y",
                                                children: [
                                                    {
                                                        pos: 4,
                                                        val: "a",
                                                        children: []
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]);
        expect(builder.build("ぢぃ")).toEqual([
            {
                from: "ぢぃ",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "d",
                        children: [
                            {
                                pos: 1,
                                val: "y",
                                children: [
                                    {
                                        pos: 2,
                                        val: "i",
                                        children: []
                                    }
                                ]
                            },
                            {
                                pos: 1,
                                val: "i",
                                children: [
                                    {
                                        pos: 2,
                                        val: "x",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "i",
                                                children: []
                                            }
                                        ]
                                    },
                                    {
                                        pos: 2,
                                        val: "l",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "i",
                                                children: []
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]);
        expect(builder.build("ぢゅ")).toEqual([
            {
                from: "ぢゅ",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "d",
                        children: [
                            {
                                pos: 1,
                                val: "y",
                                children: [
                                    {
                                        pos: 2,
                                        val: "u",
                                        children: []
                                    }
                                ]
                            },
                            {
                                pos: 1,
                                val: "i",
                                children: [
                                    {
                                        pos: 2,
                                        val: "x",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "y",
                                                children: [
                                                    {
                                                        pos: 4,
                                                        val: "u",
                                                        children: []
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        pos: 2,
                                        val: "l",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "y",
                                                children: [
                                                    {
                                                        pos: 4,
                                                        val: "u",
                                                        children: []
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]);
        expect(builder.build("ぢぇ")).toEqual([
            {
                from: "ぢぇ",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "d",
                        children: [
                            {
                                pos: 1,
                                val: "y",
                                children: [
                                    {
                                        pos: 2,
                                        val: "e",
                                        children: []
                                    }
                                ]
                            },
                            {
                                pos: 1,
                                val: "i",
                                children: [
                                    {
                                        pos: 2,
                                        val: "x",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "e",
                                                children: []
                                            }
                                        ]
                                    },
                                    {
                                        pos: 2,
                                        val: "l",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "e",
                                                children: []
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]);
        expect(builder.build("ぢょ")).toEqual([
            {
                from: "ぢょ",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "d",
                        children: [
                            {
                                pos: 1,
                                val: "y",
                                children: [
                                    {
                                        pos: 2,
                                        val: "o",
                                        children: []
                                    }
                                ]
                            },
                            {
                                pos: 1,
                                val: "i",
                                children: [
                                    {
                                        pos: 2,
                                        val: "x",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "y",
                                                children: [
                                                    {
                                                        pos: 4,
                                                        val: "o",
                                                        children: []
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        pos: 2,
                                        val: "l",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "y",
                                                children: [
                                                    {
                                                        pos: 4,
                                                        val: "o",
                                                        children: []
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]);
        expect(builder.build("つぁ")).toEqual([
            {
                from: "つぁ",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "t",
                        children: [
                            {
                                pos: 1,
                                val: "s",
                                children: [
                                    {
                                        pos: 2,
                                        val: "a",
                                        children: []
                                    },
                                    {
                                        pos: 2,
                                        val: "u",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "x",
                                                children: [
                                                    {
                                                        pos: 4,
                                                        val: "a",
                                                        children: []
                                                    }
                                                ]
                                            },
                                            {
                                                pos: 3,
                                                val: "l",
                                                children: [
                                                    {
                                                        pos: 4,
                                                        val: "a",
                                                        children: []
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                pos: 1,
                                val: "u",
                                children: [
                                    {
                                        pos: 2,
                                        val: "x",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "a",
                                                children: []
                                            }
                                        ]
                                    },
                                    {
                                        pos: 2,
                                        val: "l",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "a",
                                                children: []
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]);
        expect(builder.build("つぃ")).toEqual([
            {
                from: "つぃ",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "t",
                        children: [
                            {
                                pos: 1,
                                val: "s",
                                children: [
                                    {
                                        pos: 2,
                                        val: "i",
                                        children: []
                                    },
                                    {
                                        pos: 2,
                                        val: "u",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "x",
                                                children: [
                                                    {
                                                        pos: 4,
                                                        val: "i",
                                                        children: []
                                                    }
                                                ]
                                            },
                                            {
                                                pos: 3,
                                                val: "l",
                                                children: [
                                                    {
                                                        pos: 4,
                                                        val: "i",
                                                        children: []
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                pos: 1,
                                val: "u",
                                children: [
                                    {
                                        pos: 2,
                                        val: "x",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "i",
                                                children: []
                                            }
                                        ]
                                    },
                                    {
                                        pos: 2,
                                        val: "l",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "i",
                                                children: []
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]);
        expect(builder.build("つぇ")).toEqual([
            {
                from: "つぇ",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "t",
                        children: [
                            {
                                pos: 1,
                                val: "s",
                                children: [
                                    {
                                        pos: 2,
                                        val: "e",
                                        children: []
                                    },
                                    {
                                        pos: 2,
                                        val: "u",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "x",
                                                children: [
                                                    {
                                                        pos: 4,
                                                        val: "e",
                                                        children: []
                                                    }
                                                ]
                                            },
                                            {
                                                pos: 3,
                                                val: "l",
                                                children: [
                                                    {
                                                        pos: 4,
                                                        val: "e",
                                                        children: []
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                pos: 1,
                                val: "u",
                                children: [
                                    {
                                        pos: 2,
                                        val: "x",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "e",
                                                children: []
                                            }
                                        ]
                                    },
                                    {
                                        pos: 2,
                                        val: "l",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "e",
                                                children: []
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]);
        expect(builder.build("つぉ")).toEqual([
            {
                from: "つぉ",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "t",
                        children: [
                            {
                                pos: 1,
                                val: "s",
                                children: [
                                    {
                                        pos: 2,
                                        val: "o",
                                        children: []
                                    },
                                    {
                                        pos: 2,
                                        val: "u",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "x",
                                                children: [
                                                    {
                                                        pos: 4,
                                                        val: "o",
                                                        children: []
                                                    }
                                                ]
                                            },
                                            {
                                                pos: 3,
                                                val: "l",
                                                children: [
                                                    {
                                                        pos: 4,
                                                        val: "o",
                                                        children: []
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                pos: 1,
                                val: "u",
                                children: [
                                    {
                                        pos: 2,
                                        val: "x",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "o",
                                                children: []
                                            }
                                        ]
                                    },
                                    {
                                        pos: 2,
                                        val: "l",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "o",
                                                children: []
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]);
        expect(builder.build("てゃ")).toEqual([
            {
                from: "てゃ",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "t",
                        children: [
                            {
                                pos: 1,
                                val: "h",
                                children: [
                                    {
                                        pos: 2,
                                        val: "a",
                                        children: []
                                    }
                                ]
                            },
                            {
                                pos: 1,
                                val: "e",
                                children: [
                                    {
                                        pos: 2,
                                        val: "x",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "y",
                                                children: [
                                                    {
                                                        pos: 4,
                                                        val: "a",
                                                        children: []
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        pos: 2,
                                        val: "l",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "y",
                                                children: [
                                                    {
                                                        pos: 4,
                                                        val: "a",
                                                        children: []
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]);
        expect(builder.build("てぃ")).toEqual([
            {
                from: "てぃ",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "t",
                        children: [
                            {
                                pos: 1,
                                val: "h",
                                children: [
                                    {
                                        pos: 2,
                                        val: "i",
                                        children: []
                                    }
                                ]
                            },
                            {
                                pos: 1,
                                val: "e",
                                children: [
                                    {
                                        pos: 2,
                                        val: "x",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "i",
                                                children: []
                                            }
                                        ]
                                    },
                                    {
                                        pos: 2,
                                        val: "l",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "i",
                                                children: []
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]);
        expect(builder.build("てゅ")).toEqual([
            {
                from: "てゅ",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "t",
                        children: [
                            {
                                pos: 1,
                                val: "h",
                                children: [
                                    {
                                        pos: 2,
                                        val: "u",
                                        children: []
                                    }
                                ]
                            },
                            {
                                pos: 1,
                                val: "e",
                                children: [
                                    {
                                        pos: 2,
                                        val: "x",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "y",
                                                children: [
                                                    {
                                                        pos: 4,
                                                        val: "u",
                                                        children: []
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        pos: 2,
                                        val: "l",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "y",
                                                children: [
                                                    {
                                                        pos: 4,
                                                        val: "u",
                                                        children: []
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]);
        expect(builder.build("てぇ")).toEqual([
            {
                from: "てぇ",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "t",
                        children: [
                            {
                                pos: 1,
                                val: "h",
                                children: [
                                    {
                                        pos: 2,
                                        val: "e",
                                        children: []
                                    }
                                ]
                            },
                            {
                                pos: 1,
                                val: "e",
                                children: [
                                    {
                                        pos: 2,
                                        val: "x",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "e",
                                                children: []
                                            }
                                        ]
                                    },
                                    {
                                        pos: 2,
                                        val: "l",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "e",
                                                children: []
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]);
        expect(builder.build("てょ")).toEqual([
            {
                from: "てょ",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "t",
                        children: [
                            {
                                pos: 1,
                                val: "h",
                                children: [
                                    {
                                        pos: 2,
                                        val: "o",
                                        children: []
                                    }
                                ]
                            },
                            {
                                pos: 1,
                                val: "e",
                                children: [
                                    {
                                        pos: 2,
                                        val: "x",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "y",
                                                children: [
                                                    {
                                                        pos: 4,
                                                        val: "o",
                                                        children: []
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        pos: 2,
                                        val: "l",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "y",
                                                children: [
                                                    {
                                                        pos: 4,
                                                        val: "o",
                                                        children: []
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]);
        expect(builder.build("でゃ")).toEqual([
            {
                from: "でゃ",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "d",
                        children: [
                            {
                                pos: 1,
                                val: "h",
                                children: [
                                    {
                                        pos: 2,
                                        val: "a",
                                        children: []
                                    }
                                ]
                            },
                            {
                                pos: 1,
                                val: "e",
                                children: [
                                    {
                                        pos: 2,
                                        val: "x",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "y",
                                                children: [
                                                    {
                                                        pos: 4,
                                                        val: "a",
                                                        children: []
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        pos: 2,
                                        val: "l",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "y",
                                                children: [
                                                    {
                                                        pos: 4,
                                                        val: "a",
                                                        children: []
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]);
        expect(builder.build("でぃ")).toEqual([
            {
                from: "でぃ",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "d",
                        children: [
                            {
                                pos: 1,
                                val: "h",
                                children: [
                                    {
                                        pos: 2,
                                        val: "i",
                                        children: []
                                    }
                                ]
                            },
                            {
                                pos: 1,
                                val: "e",
                                children: [
                                    {
                                        pos: 2,
                                        val: "x",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "i",
                                                children: []
                                            }
                                        ]
                                    },
                                    {
                                        pos: 2,
                                        val: "l",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "i",
                                                children: []
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]);
        expect(builder.build("でゅ")).toEqual([
            {
                from: "でゅ",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "d",
                        children: [
                            {
                                pos: 1,
                                val: "h",
                                children: [
                                    {
                                        pos: 2,
                                        val: "u",
                                        children: []
                                    }
                                ]
                            },
                            {
                                pos: 1,
                                val: "e",
                                children: [
                                    {
                                        pos: 2,
                                        val: "x",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "y",
                                                children: [
                                                    {
                                                        pos: 4,
                                                        val: "u",
                                                        children: []
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        pos: 2,
                                        val: "l",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "y",
                                                children: [
                                                    {
                                                        pos: 4,
                                                        val: "u",
                                                        children: []
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]);
        expect(builder.build("でぇ")).toEqual([
            {
                from: "でぇ",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "d",
                        children: [
                            {
                                pos: 1,
                                val: "h",
                                children: [
                                    {
                                        pos: 2,
                                        val: "e",
                                        children: []
                                    }
                                ]
                            },
                            {
                                pos: 1,
                                val: "e",
                                children: [
                                    {
                                        pos: 2,
                                        val: "x",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "e",
                                                children: []
                                            }
                                        ]
                                    },
                                    {
                                        pos: 2,
                                        val: "l",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "e",
                                                children: []
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]);
        expect(builder.build("でょ")).toEqual([
            {
                from: "でょ",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "d",
                        children: [
                            {
                                pos: 1,
                                val: "h",
                                children: [
                                    {
                                        pos: 2,
                                        val: "o",
                                        children: []
                                    }
                                ]
                            },
                            {
                                pos: 1,
                                val: "e",
                                children: [
                                    {
                                        pos: 2,
                                        val: "x",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "y",
                                                children: [
                                                    {
                                                        pos: 4,
                                                        val: "o",
                                                        children: []
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        pos: 2,
                                        val: "l",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "y",
                                                children: [
                                                    {
                                                        pos: 4,
                                                        val: "o",
                                                        children: []
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]);
        expect(builder.build("にゃ")).toEqual([
            {
                from: "にゃ",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "n",
                        children: [
                            {
                                pos: 1,
                                val: "y",
                                children: [
                                    {
                                        pos: 2,
                                        val: "a",
                                        children: []
                                    }
                                ]
                            },
                            {
                                pos: 1,
                                val: "i",
                                children: [
                                    {
                                        pos: 2,
                                        val: "x",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "y",
                                                children: [
                                                    {
                                                        pos: 4,
                                                        val: "a",
                                                        children: []
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        pos: 2,
                                        val: "l",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "y",
                                                children: [
                                                    {
                                                        pos: 4,
                                                        val: "a",
                                                        children: []
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]);
        expect(builder.build("にぃ")).toEqual([
            {
                from: "にぃ",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "n",
                        children: [
                            {
                                pos: 1,
                                val: "y",
                                children: [
                                    {
                                        pos: 2,
                                        val: "i",
                                        children: []
                                    }
                                ]
                            },
                            {
                                pos: 1,
                                val: "i",
                                children: [
                                    {
                                        pos: 2,
                                        val: "x",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "i",
                                                children: []
                                            }
                                        ]
                                    },
                                    {
                                        pos: 2,
                                        val: "l",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "i",
                                                children: []
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]);
        expect(builder.build("にゅ")).toEqual([
            {
                from: "にゅ",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "n",
                        children: [
                            {
                                pos: 1,
                                val: "y",
                                children: [
                                    {
                                        pos: 2,
                                        val: "u",
                                        children: []
                                    }
                                ]
                            },
                            {
                                pos: 1,
                                val: "i",
                                children: [
                                    {
                                        pos: 2,
                                        val: "x",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "y",
                                                children: [
                                                    {
                                                        pos: 4,
                                                        val: "u",
                                                        children: []
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        pos: 2,
                                        val: "l",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "y",
                                                children: [
                                                    {
                                                        pos: 4,
                                                        val: "u",
                                                        children: []
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]);
        expect(builder.build("にぇ")).toEqual([
            {
                from: "にぇ",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "n",
                        children: [
                            {
                                pos: 1,
                                val: "y",
                                children: [
                                    {
                                        pos: 2,
                                        val: "e",
                                        children: []
                                    }
                                ]
                            },
                            {
                                pos: 1,
                                val: "i",
                                children: [
                                    {
                                        pos: 2,
                                        val: "x",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "e",
                                                children: []
                                            }
                                        ]
                                    },
                                    {
                                        pos: 2,
                                        val: "l",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "e",
                                                children: []
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]);
        expect(builder.build("にょ")).toEqual([
            {
                from: "にょ",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "n",
                        children: [
                            {
                                pos: 1,
                                val: "y",
                                children: [
                                    {
                                        pos: 2,
                                        val: "o",
                                        children: []
                                    }
                                ]
                            },
                            {
                                pos: 1,
                                val: "i",
                                children: [
                                    {
                                        pos: 2,
                                        val: "x",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "y",
                                                children: [
                                                    {
                                                        pos: 4,
                                                        val: "o",
                                                        children: []
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        pos: 2,
                                        val: "l",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "y",
                                                children: [
                                                    {
                                                        pos: 4,
                                                        val: "o",
                                                        children: []
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]);
        expect(builder.build("ひゃ")).toEqual([
            {
                from: "ひゃ",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "h",
                        children: [
                            {
                                pos: 1,
                                val: "y",
                                children: [
                                    {
                                        pos: 2,
                                        val: "a",
                                        children: []
                                    }
                                ]
                            },
                            {
                                pos: 1,
                                val: "i",
                                children: [
                                    {
                                        pos: 2,
                                        val: "x",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "y",
                                                children: [
                                                    {
                                                        pos: 4,
                                                        val: "a",
                                                        children: []
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        pos: 2,
                                        val: "l",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "y",
                                                children: [
                                                    {
                                                        pos: 4,
                                                        val: "a",
                                                        children: []
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]);
        expect(builder.build("ひぃ")).toEqual([
            {
                from: "ひぃ",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "h",
                        children: [
                            {
                                pos: 1,
                                val: "y",
                                children: [
                                    {
                                        pos: 2,
                                        val: "i",
                                        children: []
                                    }
                                ]
                            },
                            {
                                pos: 1,
                                val: "i",
                                children: [
                                    {
                                        pos: 2,
                                        val: "x",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "i",
                                                children: []
                                            }
                                        ]
                                    },
                                    {
                                        pos: 2,
                                        val: "l",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "i",
                                                children: []
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]);
        expect(builder.build("ひゅ")).toEqual([
            {
                from: "ひゅ",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "h",
                        children: [
                            {
                                pos: 1,
                                val: "y",
                                children: [
                                    {
                                        pos: 2,
                                        val: "u",
                                        children: []
                                    }
                                ]
                            },
                            {
                                pos: 1,
                                val: "i",
                                children: [
                                    {
                                        pos: 2,
                                        val: "x",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "y",
                                                children: [
                                                    {
                                                        pos: 4,
                                                        val: "u",
                                                        children: []
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        pos: 2,
                                        val: "l",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "y",
                                                children: [
                                                    {
                                                        pos: 4,
                                                        val: "u",
                                                        children: []
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]);
        expect(builder.build("ひぇ")).toEqual([
            {
                from: "ひぇ",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "h",
                        children: [
                            {
                                pos: 1,
                                val: "y",
                                children: [
                                    {
                                        pos: 2,
                                        val: "e",
                                        children: []
                                    }
                                ]
                            },
                            {
                                pos: 1,
                                val: "i",
                                children: [
                                    {
                                        pos: 2,
                                        val: "x",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "e",
                                                children: []
                                            }
                                        ]
                                    },
                                    {
                                        pos: 2,
                                        val: "l",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "e",
                                                children: []
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]);
        expect(builder.build("ひょ")).toEqual([
            {
                from: "ひょ",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "h",
                        children: [
                            {
                                pos: 1,
                                val: "y",
                                children: [
                                    {
                                        pos: 2,
                                        val: "o",
                                        children: []
                                    }
                                ]
                            },
                            {
                                pos: 1,
                                val: "i",
                                children: [
                                    {
                                        pos: 2,
                                        val: "x",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "y",
                                                children: [
                                                    {
                                                        pos: 4,
                                                        val: "o",
                                                        children: []
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        pos: 2,
                                        val: "l",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "y",
                                                children: [
                                                    {
                                                        pos: 4,
                                                        val: "o",
                                                        children: []
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]);
        expect(builder.build("びゃ")).toEqual([
            {
                from: "びゃ",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "b",
                        children: [
                            {
                                pos: 1,
                                val: "y",
                                children: [
                                    {
                                        pos: 2,
                                        val: "a",
                                        children: []
                                    }
                                ]
                            },
                            {
                                pos: 1,
                                val: "i",
                                children: [
                                    {
                                        pos: 2,
                                        val: "x",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "y",
                                                children: [
                                                    {
                                                        pos: 4,
                                                        val: "a",
                                                        children: []
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        pos: 2,
                                        val: "l",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "y",
                                                children: [
                                                    {
                                                        pos: 4,
                                                        val: "a",
                                                        children: []
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]);
        expect(builder.build("びぃ")).toEqual([
            {
                from: "びぃ",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "b",
                        children: [
                            {
                                pos: 1,
                                val: "y",
                                children: [
                                    {
                                        pos: 2,
                                        val: "i",
                                        children: []
                                    }
                                ]
                            },
                            {
                                pos: 1,
                                val: "i",
                                children: [
                                    {
                                        pos: 2,
                                        val: "x",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "i",
                                                children: []
                                            }
                                        ]
                                    },
                                    {
                                        pos: 2,
                                        val: "l",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "i",
                                                children: []
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]);
        expect(builder.build("びゅ")).toEqual([
            {
                from: "びゅ",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "b",
                        children: [
                            {
                                pos: 1,
                                val: "y",
                                children: [
                                    {
                                        pos: 2,
                                        val: "u",
                                        children: []
                                    }
                                ]
                            },
                            {
                                pos: 1,
                                val: "i",
                                children: [
                                    {
                                        pos: 2,
                                        val: "x",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "y",
                                                children: [
                                                    {
                                                        pos: 4,
                                                        val: "u",
                                                        children: []
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        pos: 2,
                                        val: "l",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "y",
                                                children: [
                                                    {
                                                        pos: 4,
                                                        val: "u",
                                                        children: []
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]);
        expect(builder.build("びぇ")).toEqual([
            {
                from: "びぇ",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "b",
                        children: [
                            {
                                pos: 1,
                                val: "y",
                                children: [
                                    {
                                        pos: 2,
                                        val: "e",
                                        children: []
                                    }
                                ]
                            },
                            {
                                pos: 1,
                                val: "i",
                                children: [
                                    {
                                        pos: 2,
                                        val: "x",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "e",
                                                children: []
                                            }
                                        ]
                                    },
                                    {
                                        pos: 2,
                                        val: "l",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "e",
                                                children: []
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]);
        expect(builder.build("びょ")).toEqual([
            {
                from: "びょ",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "b",
                        children: [
                            {
                                pos: 1,
                                val: "y",
                                children: [
                                    {
                                        pos: 2,
                                        val: "o",
                                        children: []
                                    }
                                ]
                            },
                            {
                                pos: 1,
                                val: "i",
                                children: [
                                    {
                                        pos: 2,
                                        val: "x",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "y",
                                                children: [
                                                    {
                                                        pos: 4,
                                                        val: "o",
                                                        children: []
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        pos: 2,
                                        val: "l",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "y",
                                                children: [
                                                    {
                                                        pos: 4,
                                                        val: "o",
                                                        children: []
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]);
        expect(builder.build("ぴゃ")).toEqual([
            {
                from: "ぴゃ",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "p",
                        children: [
                            {
                                pos: 1,
                                val: "y",
                                children: [
                                    {
                                        pos: 2,
                                        val: "a",
                                        children: []
                                    }
                                ]
                            },
                            {
                                pos: 1,
                                val: "i",
                                children: [
                                    {
                                        pos: 2,
                                        val: "x",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "y",
                                                children: [
                                                    {
                                                        pos: 4,
                                                        val: "a",
                                                        children: []
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        pos: 2,
                                        val: "l",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "y",
                                                children: [
                                                    {
                                                        pos: 4,
                                                        val: "a",
                                                        children: []
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]);
        expect(builder.build("ぴぃ")).toEqual([
            {
                from: "ぴぃ",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "p",
                        children: [
                            {
                                pos: 1,
                                val: "y",
                                children: [
                                    {
                                        pos: 2,
                                        val: "i",
                                        children: []
                                    }
                                ]
                            },
                            {
                                pos: 1,
                                val: "i",
                                children: [
                                    {
                                        pos: 2,
                                        val: "x",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "i",
                                                children: []
                                            }
                                        ]
                                    },
                                    {
                                        pos: 2,
                                        val: "l",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "i",
                                                children: []
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]);
        expect(builder.build("ぴゅ")).toEqual([
            {
                from: "ぴゅ",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "p",
                        children: [
                            {
                                pos: 1,
                                val: "y",
                                children: [
                                    {
                                        pos: 2,
                                        val: "u",
                                        children: []
                                    }
                                ]
                            },
                            {
                                pos: 1,
                                val: "i",
                                children: [
                                    {
                                        pos: 2,
                                        val: "x",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "y",
                                                children: [
                                                    {
                                                        pos: 4,
                                                        val: "u",
                                                        children: []
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        pos: 2,
                                        val: "l",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "y",
                                                children: [
                                                    {
                                                        pos: 4,
                                                        val: "u",
                                                        children: []
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]);
        expect(builder.build("ぴぇ")).toEqual([
            {
                from: "ぴぇ",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "p",
                        children: [
                            {
                                pos: 1,
                                val: "y",
                                children: [
                                    {
                                        pos: 2,
                                        val: "e",
                                        children: []
                                    }
                                ]
                            },
                            {
                                pos: 1,
                                val: "i",
                                children: [
                                    {
                                        pos: 2,
                                        val: "x",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "e",
                                                children: []
                                            }
                                        ]
                                    },
                                    {
                                        pos: 2,
                                        val: "l",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "e",
                                                children: []
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]);
        expect(builder.build("ぴょ")).toEqual([
            {
                from: "ぴょ",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "p",
                        children: [
                            {
                                pos: 1,
                                val: "y",
                                children: [
                                    {
                                        pos: 2,
                                        val: "o",
                                        children: []
                                    }
                                ]
                            },
                            {
                                pos: 1,
                                val: "i",
                                children: [
                                    {
                                        pos: 2,
                                        val: "x",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "y",
                                                children: [
                                                    {
                                                        pos: 4,
                                                        val: "o",
                                                        children: []
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        pos: 2,
                                        val: "l",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "y",
                                                children: [
                                                    {
                                                        pos: 4,
                                                        val: "o",
                                                        children: []
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]);
        expect(builder.build("ふぁ")).toEqual([
            {
                from: "ふぁ",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "f",
                        children: [
                            {
                                pos: 1,
                                val: "a",
                                children: []
                            },
                            {
                                pos: 1,
                                val: "w",
                                children: [
                                    {
                                        pos: 2,
                                        val: "a",
                                        children: []
                                    }
                                ]
                            },
                            {
                                pos: 1,
                                val: "u",
                                children: [
                                    {
                                        pos: 2,
                                        val: "x",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "a",
                                                children: []
                                            }
                                        ]
                                    },
                                    {
                                        pos: 2,
                                        val: "l",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "a",
                                                children: []
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        pos: 0,
                        val: "h",
                        children: [
                            {
                                pos: 1,
                                val: "u",
                                children: [
                                    {
                                        pos: 2,
                                        val: "x",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "a",
                                                children: []
                                            }
                                        ]
                                    },
                                    {
                                        pos: 2,
                                        val: "l",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "a",
                                                children: []
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]);
        expect(builder.build("ふぃ")).toEqual([
            {
                from: "ふぃ",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "f",
                        children: [
                            {
                                pos: 1,
                                val: "i",
                                children: []
                            },
                            {
                                pos: 1,
                                val: "y",
                                children: [
                                    {
                                        pos: 2,
                                        val: "i",
                                        children: []
                                    }
                                ]
                            },
                            {
                                pos: 1,
                                val: "w",
                                children: [
                                    {
                                        pos: 2,
                                        val: "i",
                                        children: []
                                    }
                                ]
                            },
                            {
                                pos: 1,
                                val: "u",
                                children: [
                                    {
                                        pos: 2,
                                        val: "x",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "i",
                                                children: []
                                            }
                                        ]
                                    },
                                    {
                                        pos: 2,
                                        val: "l",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "i",
                                                children: []
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        pos: 0,
                        val: "h",
                        children: [
                            {
                                pos: 1,
                                val: "u",
                                children: [
                                    {
                                        pos: 2,
                                        val: "x",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "i",
                                                children: []
                                            }
                                        ]
                                    },
                                    {
                                        pos: 2,
                                        val: "l",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "i",
                                                children: []
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]);
        expect(builder.build("ふぇ")).toEqual([
            {
                from: "ふぇ",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "f",
                        children: [
                            {
                                pos: 1,
                                val: "e",
                                children: []
                            },
                            {
                                pos: 1,
                                val: "y",
                                children: [
                                    {
                                        pos: 2,
                                        val: "e",
                                        children: []
                                    }
                                ]
                            },
                            {
                                pos: 1,
                                val: "w",
                                children: [
                                    {
                                        pos: 2,
                                        val: "e",
                                        children: []
                                    }
                                ]
                            },
                            {
                                pos: 1,
                                val: "u",
                                children: [
                                    {
                                        pos: 2,
                                        val: "x",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "e",
                                                children: []
                                            }
                                        ]
                                    },
                                    {
                                        pos: 2,
                                        val: "l",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "e",
                                                children: []
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        pos: 0,
                        val: "h",
                        children: [
                            {
                                pos: 1,
                                val: "u",
                                children: [
                                    {
                                        pos: 2,
                                        val: "x",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "e",
                                                children: []
                                            }
                                        ]
                                    },
                                    {
                                        pos: 2,
                                        val: "l",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "e",
                                                children: []
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]);
        expect(builder.build("ふぉ")).toEqual([
            {
                from: "ふぉ",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "f",
                        children: [
                            {
                                pos: 1,
                                val: "o",
                                children: []
                            },
                            {
                                pos: 1,
                                val: "w",
                                children: [
                                    {
                                        pos: 2,
                                        val: "o",
                                        children: []
                                    }
                                ]
                            },
                            {
                                pos: 1,
                                val: "u",
                                children: [
                                    {
                                        pos: 2,
                                        val: "x",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "o",
                                                children: []
                                            }
                                        ]
                                    },
                                    {
                                        pos: 2,
                                        val: "l",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "o",
                                                children: []
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        pos: 0,
                        val: "h",
                        children: [
                            {
                                pos: 1,
                                val: "u",
                                children: [
                                    {
                                        pos: 2,
                                        val: "x",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "o",
                                                children: []
                                            }
                                        ]
                                    },
                                    {
                                        pos: 2,
                                        val: "l",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "o",
                                                children: []
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]);
        expect(builder.build("みゃ")).toEqual([
            {
                from: "みゃ",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "m",
                        children: [
                            {
                                pos: 1,
                                val: "y",
                                children: [
                                    {
                                        pos: 2,
                                        val: "a",
                                        children: []
                                    }
                                ]
                            },
                            {
                                pos: 1,
                                val: "i",
                                children: [
                                    {
                                        pos: 2,
                                        val: "x",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "y",
                                                children: [
                                                    {
                                                        pos: 4,
                                                        val: "a",
                                                        children: []
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        pos: 2,
                                        val: "l",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "y",
                                                children: [
                                                    {
                                                        pos: 4,
                                                        val: "a",
                                                        children: []
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]);
        expect(builder.build("みぃ")).toEqual([
            {
                from: "みぃ",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "m",
                        children: [
                            {
                                pos: 1,
                                val: "y",
                                children: [
                                    {
                                        pos: 2,
                                        val: "i",
                                        children: []
                                    }
                                ]
                            },
                            {
                                pos: 1,
                                val: "i",
                                children: [
                                    {
                                        pos: 2,
                                        val: "x",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "i",
                                                children: []
                                            }
                                        ]
                                    },
                                    {
                                        pos: 2,
                                        val: "l",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "i",
                                                children: []
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]);
        expect(builder.build("みゅ")).toEqual([
            {
                from: "みゅ",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "m",
                        children: [
                            {
                                pos: 1,
                                val: "y",
                                children: [
                                    {
                                        pos: 2,
                                        val: "u",
                                        children: []
                                    }
                                ]
                            },
                            {
                                pos: 1,
                                val: "i",
                                children: [
                                    {
                                        pos: 2,
                                        val: "x",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "y",
                                                children: [
                                                    {
                                                        pos: 4,
                                                        val: "u",
                                                        children: []
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        pos: 2,
                                        val: "l",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "y",
                                                children: [
                                                    {
                                                        pos: 4,
                                                        val: "u",
                                                        children: []
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]);
        expect(builder.build("みぇ")).toEqual([
            {
                from: "みぇ",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "m",
                        children: [
                            {
                                pos: 1,
                                val: "y",
                                children: [
                                    {
                                        pos: 2,
                                        val: "e",
                                        children: []
                                    }
                                ]
                            },
                            {
                                pos: 1,
                                val: "i",
                                children: [
                                    {
                                        pos: 2,
                                        val: "x",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "e",
                                                children: []
                                            }
                                        ]
                                    },
                                    {
                                        pos: 2,
                                        val: "l",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "e",
                                                children: []
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]);
        expect(builder.build("みょ")).toEqual([
            {
                from: "みょ",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "m",
                        children: [
                            {
                                pos: 1,
                                val: "y",
                                children: [
                                    {
                                        pos: 2,
                                        val: "o",
                                        children: []
                                    }
                                ]
                            },
                            {
                                pos: 1,
                                val: "i",
                                children: [
                                    {
                                        pos: 2,
                                        val: "x",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "y",
                                                children: [
                                                    {
                                                        pos: 4,
                                                        val: "o",
                                                        children: []
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        pos: 2,
                                        val: "l",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "y",
                                                children: [
                                                    {
                                                        pos: 4,
                                                        val: "o",
                                                        children: []
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]);
        expect(builder.build("りゃ")).toEqual([
            {
                from: "りゃ",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "r",
                        children: [
                            {
                                pos: 1,
                                val: "y",
                                children: [
                                    {
                                        pos: 2,
                                        val: "a",
                                        children: []
                                    }
                                ]
                            },
                            {
                                pos: 1,
                                val: "i",
                                children: [
                                    {
                                        pos: 2,
                                        val: "x",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "y",
                                                children: [
                                                    {
                                                        pos: 4,
                                                        val: "a",
                                                        children: []
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        pos: 2,
                                        val: "l",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "y",
                                                children: [
                                                    {
                                                        pos: 4,
                                                        val: "a",
                                                        children: []
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]);
        expect(builder.build("りぃ")).toEqual([
            {
                from: "りぃ",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "r",
                        children: [
                            {
                                pos: 1,
                                val: "y",
                                children: [
                                    {
                                        pos: 2,
                                        val: "i",
                                        children: []
                                    }
                                ]
                            },
                            {
                                pos: 1,
                                val: "i",
                                children: [
                                    {
                                        pos: 2,
                                        val: "x",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "i",
                                                children: []
                                            }
                                        ]
                                    },
                                    {
                                        pos: 2,
                                        val: "l",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "i",
                                                children: []
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]);
        expect(builder.build("りゅ")).toEqual([
            {
                from: "りゅ",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "r",
                        children: [
                            {
                                pos: 1,
                                val: "y",
                                children: [
                                    {
                                        pos: 2,
                                        val: "u",
                                        children: []
                                    }
                                ]
                            },
                            {
                                pos: 1,
                                val: "i",
                                children: [
                                    {
                                        pos: 2,
                                        val: "x",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "y",
                                                children: [
                                                    {
                                                        pos: 4,
                                                        val: "u",
                                                        children: []
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        pos: 2,
                                        val: "l",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "y",
                                                children: [
                                                    {
                                                        pos: 4,
                                                        val: "u",
                                                        children: []
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]);
        expect(builder.build("りぇ")).toEqual([
            {
                from: "りぇ",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "r",
                        children: [
                            {
                                pos: 1,
                                val: "y",
                                children: [
                                    {
                                        pos: 2,
                                        val: "e",
                                        children: []
                                    }
                                ]
                            },
                            {
                                pos: 1,
                                val: "i",
                                children: [
                                    {
                                        pos: 2,
                                        val: "x",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "e",
                                                children: []
                                            }
                                        ]
                                    },
                                    {
                                        pos: 2,
                                        val: "l",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "e",
                                                children: []
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]);
        expect(builder.build("りょ")).toEqual([
            {
                from: "りょ",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "r",
                        children: [
                            {
                                pos: 1,
                                val: "y",
                                children: [
                                    {
                                        pos: 2,
                                        val: "o",
                                        children: []
                                    }
                                ]
                            },
                            {
                                pos: 1,
                                val: "i",
                                children: [
                                    {
                                        pos: 2,
                                        val: "x",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "y",
                                                children: [
                                                    {
                                                        pos: 4,
                                                        val: "o",
                                                        children: []
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        pos: 2,
                                        val: "l",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "y",
                                                children: [
                                                    {
                                                        pos: 4,
                                                        val: "o",
                                                        children: []
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]);
        expect(builder.build("ヴぁ")).toEqual([
            {
                from: "ヴぁ",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "v",
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
        ]);
        expect(builder.build("ヴぃ")).toEqual([
            {
                from: "ヴぃ",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "v",
                        children: [
                            {
                                pos: 1,
                                val: "i",
                                children: []
                            }
                        ]
                    }
                ]
            }
        ]);
        expect(builder.build("ヴ")).toEqual([
            {
                from: "ヴ",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "v",
                        children: [
                            {
                                pos: 1,
                                val: "u",
                                children: []
                            }
                        ]
                    }
                ]
            }
        ]);
        expect(builder.build("ヴぇ")).toEqual([
            {
                from: "ヴぇ",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "v",
                        children: [
                            {
                                pos: 1,
                                val: "e",
                                children: []
                            }
                        ]
                    }
                ]
            }
        ]);
        expect(builder.build("ヴぉ")).toEqual([
            {
                from: "ヴぉ",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "v",
                        children: [
                            {
                                pos: 1,
                                val: "o",
                                children: []
                            }
                        ]
                    }
                ]
            }
        ]);
        expect(builder.build("ぁ")).toEqual([
            {
                from: "ぁ",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "x",
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
                        val: "l",
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
        ]);
        expect(builder.build("ぃ")).toEqual([
            {
                from: "ぃ",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "x",
                        children: [
                            {
                                pos: 1,
                                val: "i",
                                children: []
                            }
                        ]
                    },
                    {
                        pos: 0,
                        val: "l",
                        children: [
                            {
                                pos: 1,
                                val: "i",
                                children: []
                            }
                        ]
                    }
                ]
            }
        ]);
        expect(builder.build("ぅ")).toEqual([
            {
                from: "ぅ",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "x",
                        children: [
                            {
                                pos: 1,
                                val: "u",
                                children: []
                            }
                        ]
                    },
                    {
                        pos: 0,
                        val: "l",
                        children: [
                            {
                                pos: 1,
                                val: "u",
                                children: []
                            }
                        ]
                    }
                ]
            }
        ]);
        expect(builder.build("ぇ")).toEqual([
            {
                from: "ぇ",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "x",
                        children: [
                            {
                                pos: 1,
                                val: "e",
                                children: []
                            }
                        ]
                    },
                    {
                        pos: 0,
                        val: "l",
                        children: [
                            {
                                pos: 1,
                                val: "e",
                                children: []
                            }
                        ]
                    }
                ]
            }
        ]);
        expect(builder.build("ぉ")).toEqual([
            {
                from: "ぉ",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "x",
                        children: [
                            {
                                pos: 1,
                                val: "o",
                                children: []
                            }
                        ]
                    },
                    {
                        pos: 0,
                        val: "l",
                        children: [
                            {
                                pos: 1,
                                val: "o",
                                children: []
                            }
                        ]
                    }
                ]
            }
        ]);
        expect(builder.build("ゃ")).toEqual([
            {
                from: "ゃ",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "x",
                        children: [
                            {
                                pos: 1,
                                val: "y",
                                children: [
                                    {
                                        pos: 2,
                                        val: "a",
                                        children: []
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        pos: 0,
                        val: "l",
                        children: [
                            {
                                pos: 1,
                                val: "y",
                                children: [
                                    {
                                        pos: 2,
                                        val: "a",
                                        children: []
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]);
        expect(builder.build("ゅ")).toEqual([
            {
                from: "ゅ",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "x",
                        children: [
                            {
                                pos: 1,
                                val: "y",
                                children: [
                                    {
                                        pos: 2,
                                        val: "u",
                                        children: []
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        pos: 0,
                        val: "l",
                        children: [
                            {
                                pos: 1,
                                val: "y",
                                children: [
                                    {
                                        pos: 2,
                                        val: "u",
                                        children: []
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]);
        expect(builder.build("ょ")).toEqual([
            {
                from: "ょ",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "x",
                        children: [
                            {
                                pos: 1,
                                val: "y",
                                children: [
                                    {
                                        pos: 2,
                                        val: "o",
                                        children: []
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        pos: 0,
                        val: "l",
                        children: [
                            {
                                pos: 1,
                                val: "y",
                                children: [
                                    {
                                        pos: 2,
                                        val: "o",
                                        children: []
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]);
        expect(builder.build("っ")).toEqual([
            {
                from: "っ",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "x",
                        children: [
                            {
                                pos: 1,
                                val: "t",
                                children: [
                                    {
                                        pos: 2,
                                        val: "u",
                                        children: []
                                    },
                                    {
                                        pos: 2,
                                        val: "s",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "u",
                                                children: []
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        pos: 0,
                        val: "l",
                        children: [
                            {
                                pos: 1,
                                val: "t",
                                children: [
                                    {
                                        pos: 2,
                                        val: "u",
                                        children: []
                                    },
                                    {
                                        pos: 2,
                                        val: "s",
                                        children: [
                                            {
                                                pos: 3,
                                                val: "u",
                                                children: []
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]);
        expect(builder.build("ゎ")).toEqual([
            {
                from: "ゎ",
                pos: 0,
                node: [
                    {
                        pos: 0,
                        val: "x",
                        children: [
                            {
                                pos: 1,
                                val: "w",
                                children: [
                                    {
                                        pos: 2,
                                        val: "a",
                                        children: []
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        pos: 0,
                        val: "l",
                        children: [
                            {
                                pos: 1,
                                val: "w",
                                children: [
                                    {
                                        pos: 2,
                                        val: "a",
                                        children: []
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]);
    })
})