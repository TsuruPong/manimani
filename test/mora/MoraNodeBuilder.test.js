"use strict"

var MoraRomanBuilder = require("../../src/mora/MoraRomanBuilder");
var MoraNodeBuilder = require("../../src/mora/MoraNodeBuilder");
var mnb = new MoraNodeBuilder();
var mrb = new MoraRomanBuilder();

describe("Node Builder Test", () => {
    test("roman to mora node", () => {
        expect(mnb.build(mrb.build("あ"))).toEqual([
            {
                pos: 0,
                val: "a",
                children: []
            }
        ]);

        expect(mnb.build(mrb.build("い"))).toEqual([
            {
                pos: 0,
                val: "i",
                children: []
            }
        ]);

        expect(mnb.build(mrb.build("う"))).toEqual([
            {
                pos: 0,
                val: "u",
                children: []
            }
        ]);

        expect(mnb.build(mrb.build("え"))).toEqual([
            {
                pos: 0,
                val: "e",
                children: []
            }
        ]);

        expect(mnb.build(mrb.build("お"))).toEqual([
            {
                pos: 0,
                val: "o",
                children: []
            }
        ]);

        expect(mnb.build(mrb.build("か"))).toEqual([
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
        ]);

        expect(mnb.build(mrb.build("き"))).toEqual([
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
        ]);

        expect(mnb.build(mrb.build("く"))).toEqual([
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
            }
        ]);

        expect(mnb.build(mrb.build("け"))).toEqual([
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
        ]);

        expect(mnb.build(mrb.build("こ"))).toEqual([
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
        ]);

        expect(mnb.build(mrb.build("さ"))).toEqual([
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
        ]);

        expect(mnb.build(mrb.build("し"))).toEqual([
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
                            },
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
        ]);

        expect(mnb.build(mrb.build("す"))).toEqual([
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
        ]);

        expect(mnb.build(mrb.build("せ"))).toEqual([
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
        ]);

        expect(mnb.build(mrb.build("そ"))).toEqual([
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
        ]);

        expect(mnb.build(mrb.build("た"))).toEqual([
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
        ]);
        
        expect(mnb.build(mrb.build("ち"))).toEqual([
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
        ]);
        
        expect(mnb.build(mrb.build("つ"))).toEqual([
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
        ]);
        
        expect(mnb.build(mrb.build("て"))).toEqual([
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
        ]);
        
        expect(mnb.build(mrb.build("と"))).toEqual([
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
        ]);

        expect(mnb.build(mrb.build("な"))).toEqual([
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
        ]);
        
        expect(mnb.build(mrb.build("に"))).toEqual([
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
        ]);
        
        expect(mnb.build(mrb.build("ぬ"))).toEqual([
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
        ]);
        
        expect(mnb.build(mrb.build("ね"))).toEqual([
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
        ]);
        
        expect(mnb.build(mrb.build("の"))).toEqual([
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
        ]);

        expect(mnb.build(mrb.build("は"))).toEqual([
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
        ]);
        
        expect(mnb.build(mrb.build("ひ"))).toEqual([
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
        ]);
        
        expect(mnb.build(mrb.build("ふ"))).toEqual([
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
        ]);
        
        expect(mnb.build(mrb.build("へ"))).toEqual([
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
        ]);
        
        expect(mnb.build(mrb.build("ほ"))).toEqual([
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
        ]);
        
        expect(mnb.build(mrb.build("ま"))).toEqual([
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
        ]);
        
        expect(mnb.build(mrb.build("み"))).toEqual([
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
        ]);
        
        expect(mnb.build(mrb.build("む"))).toEqual([
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
        ]);
        
        expect(mnb.build(mrb.build("め"))).toEqual([
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
        ]);
        
        expect(mnb.build(mrb.build("も"))).toEqual([
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
        ]);

        expect(mnb.build(mrb.build("や"))).toEqual([
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
        ]);
        
        expect(mnb.build(mrb.build("ゆ"))).toEqual([
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
        ]);
        
        expect(mnb.build(mrb.build("よ"))).toEqual([
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
        ]);

        expect(mnb.build(mrb.build("ら"))).toEqual([
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
        ]);
        
        expect(mnb.build(mrb.build("り"))).toEqual([
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
        ]);
        
        expect(mnb.build(mrb.build("る"))).toEqual([
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
        ]);
        
        expect(mnb.build(mrb.build("れ"))).toEqual([
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
        ]);
        
        expect(mnb.build(mrb.build("ろ"))).toEqual([
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
        ]);

        expect(mnb.build(mrb.build("わ"))).toEqual([
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
        ]);
        
        expect(mnb.build(mrb.build("を"))).toEqual([
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
        ]);
        
        expect(mnb.build(mrb.build("ん"))).toEqual([
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
        ]);

        expect(mnb.build(mrb.build("が"))).toEqual([
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
        ]);
        
        expect(mnb.build(mrb.build("ぎ"))).toEqual([
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
        ]);
        
        expect(mnb.build(mrb.build("ぐ"))).toEqual([
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
        ]);

        expect(mnb.build(mrb.build("げ"))).toEqual([
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
        ]);
        
        expect(mnb.build(mrb.build("ご"))).toEqual([
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
        ]);

        expect(mnb.build(mrb.build("ざ"))).toEqual([
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
        ]);
        
        expect(mnb.build(mrb.build("じ"))).toEqual([
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
        ]);
        
        expect(mnb.build(mrb.build("ず"))).toEqual([
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
        ]);
        
        expect(mnb.build(mrb.build("ぜ"))).toEqual([
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
        ]);
        
        expect(mnb.build(mrb.build("ぞ"))).toEqual([
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
        ]);

        expect(mnb.build(mrb.build("だ"))).toEqual([
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
        ]);
        
        expect(mnb.build(mrb.build("ぢ"))).toEqual([
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
        ]);
        
        expect(mnb.build(mrb.build("づ"))).toEqual([
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
        ]);
        
        expect(mnb.build(mrb.build("で"))).toEqual([
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
        ]);
        
        expect(mnb.build(mrb.build("ど"))).toEqual([
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
        ]);

        expect(mnb.build(mrb.build("ば"))).toEqual([
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
        ]);
        
        expect(mnb.build(mrb.build("び"))).toEqual([
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
        ]);
        
        expect(mnb.build(mrb.build("ぶ"))).toEqual([
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
        ]);
        
        expect(mnb.build(mrb.build("べ"))).toEqual([
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
        ]);
        
        expect(mnb.build(mrb.build("ぼ"))).toEqual([
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
        ]);

        expect(mnb.build(mrb.build("ぱ"))).toEqual([
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
        ]);
        
        expect(mnb.build(mrb.build("ぴ"))).toEqual([
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
        ]);
        
        expect(mnb.build(mrb.build("ぷ"))).toEqual([
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
        ]);
        
        expect(mnb.build(mrb.build("ぺ"))).toEqual([
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
        ]);
        
        expect(mnb.build(mrb.build("ぽ"))).toEqual([
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
        ]);
    })
})