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
        ]);
        expect(mnb.build(mrb.build("う"))).toEqual([
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
        expect(mnb.build(mrb.build("いぇ"))).toEqual([
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
        ]);
        expect(mnb.build(mrb.build("うぃ"))).toEqual([
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
        ]);
        expect(mnb.build(mrb.build("うぇ"))).toEqual([
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
        ]);
        expect(mnb.build(mrb.build("きゃ"))).toEqual([
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
        ]);
        expect(mnb.build(mrb.build("きぃ"))).toEqual([
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
        ]);
        expect(mnb.build(mrb.build("きゅ"))).toEqual([
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
        ]);
        expect(mnb.build(mrb.build("きぇ"))).toEqual([
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
        ]);
        expect(mnb.build(mrb.build("きょ"))).toEqual([
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
        ]);
        expect(mnb.build(mrb.build("ぎゃ"))).toEqual([
            {
                pos: 0,
                val: "g",
                children: [
                    {
                        pos: 1,
                        val: "y",
                        children: [{
                            pos: 2,
                            val: "a",
                            children: []
                        }]
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
        ]);
        expect(mnb.build(mrb.build("ぎぃ"))).toEqual([
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
        ]);
        expect(mnb.build(mrb.build("ぎゅ"))).toEqual([
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
        ]);
        expect(mnb.build(mrb.build("ぎぇ"))).toEqual([
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
        ]);
        expect(mnb.build(mrb.build("ぎょ"))).toEqual([
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
        ]);
        expect(mnb.build(mrb.build("くぁ"))).toEqual([
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
        ]);
        expect(mnb.build(mrb.build("くぃ"))).toEqual([
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
        ]);
        expect(mnb.build(mrb.build("くぇ"))).toEqual([
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
        ]);
        expect(mnb.build(mrb.build("くぉ"))).toEqual([
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
        ]);
        expect(mnb.build(mrb.build("しゃ"))).toEqual([
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
        ]);
        expect(mnb.build(mrb.build("しぃ"))).toEqual([
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
        ]);
        expect(mnb.build(mrb.build("しゅ"))).toEqual([
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
        ]);
        expect(mnb.build(mrb.build("しぇ"))).toEqual([
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
        ]);
        expect(mnb.build(mrb.build("しょ"))).toEqual([
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
        ]);
        expect(mnb.build(mrb.build("じゃ"))).toEqual([
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
        ]);
        expect(mnb.build(mrb.build("じぃ"))).toEqual([
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
        ]);
        expect(mnb.build(mrb.build("じゅ"))).toEqual([
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
        ]);
        expect(mnb.build(mrb.build("じぇ"))).toEqual([
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
        ]);
        expect(mnb.build(mrb.build("じょ"))).toEqual([
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
        ]);
        expect(mnb.build(mrb.build("ちゃ"))).toEqual([
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
        ]);
        expect(mnb.build(mrb.build("ちぃ"))).toEqual([
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
        ]);
        expect(mnb.build(mrb.build("ちゅ"))).toEqual([
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
        ]);
        expect(mnb.build(mrb.build("ちぇ"))).toEqual([
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
        ]);
        expect(mnb.build(mrb.build("ちょ"))).toEqual([
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
        ]);
        expect(mnb.build(mrb.build("ぢゃ"))).toEqual([
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
        ]);
        expect(mnb.build(mrb.build("ぢぃ"))).toEqual([
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
        ]);
        expect(mnb.build(mrb.build("ぢゅ"))).toEqual([
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
        ]);
        expect(mnb.build(mrb.build("ぢぇ"))).toEqual([
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
        ]);
        expect(mnb.build(mrb.build("ぢょ"))).toEqual([
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
        ]);
        expect(mnb.build(mrb.build("つぁ"))).toEqual([
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
        ]);
        expect(mnb.build(mrb.build("つぃ"))).toEqual([
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
        ]);
        expect(mnb.build(mrb.build("つぇ"))).toEqual([
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
        ]);
        expect(mnb.build(mrb.build("つぉ"))).toEqual([
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
        ]);
        expect(mnb.build(mrb.build("てゃ"))).toEqual([
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
        ]);
        expect(mnb.build(mrb.build("てぃ"))).toEqual([
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
        ]);
        expect(mnb.build(mrb.build("てゅ"))).toEqual([
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
        ]);
        expect(mnb.build(mrb.build("てぇ"))).toEqual([
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
        ]);
        expect(mnb.build(mrb.build("てょ"))).toEqual([
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
        ]);
        expect(mnb.build(mrb.build("でゃ"))).toEqual([
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
        ]);
        expect(mnb.build(mrb.build("でぃ"))).toEqual([
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
        ]);
        expect(mnb.build(mrb.build("でゅ"))).toEqual([
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
        ]);
        expect(mnb.build(mrb.build("でぇ"))).toEqual([
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
        ]);
        expect(mnb.build(mrb.build("でょ"))).toEqual([
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
        ]);
        expect(mnb.build(mrb.build("にゃ"))).toEqual([
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
        ]);
        expect(mnb.build(mrb.build("にぃ"))).toEqual([
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
        ]);
        expect(mnb.build(mrb.build("にゅ"))).toEqual([
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
        ]);
        expect(mnb.build(mrb.build("にぇ"))).toEqual([
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
        ]);
        expect(mnb.build(mrb.build("にょ"))).toEqual([
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
        ]);
        expect(mnb.build(mrb.build("ひゃ"))).toEqual([
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
        ]);
        expect(mnb.build(mrb.build("ひぃ"))).toEqual([
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
        ]);
        expect(mnb.build(mrb.build("ひゅ"))).toEqual([
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
        ]);
        expect(mnb.build(mrb.build("ひぇ"))).toEqual([
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
        ]);
        expect(mnb.build(mrb.build("ひょ"))).toEqual([
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
        ]);
        expect(mnb.build(mrb.build("びゃ"))).toEqual([
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
        ]);
        expect(mnb.build(mrb.build("びぃ"))).toEqual([
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
        ]);
        expect(mnb.build(mrb.build("びゅ"))).toEqual([
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
        ]);
        expect(mnb.build(mrb.build("びぇ"))).toEqual([
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
        ]);
        expect(mnb.build(mrb.build("びょ"))).toEqual([
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
        ]);
        expect(mnb.build(mrb.build("ぴゃ"))).toEqual([
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
        ]);
        expect(mnb.build(mrb.build("ぴぃ"))).toEqual([
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
        ]);
        expect(mnb.build(mrb.build("ぴゅ"))).toEqual([
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
        ]);
        expect(mnb.build(mrb.build("ぴぇ"))).toEqual([
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
        ]);
        expect(mnb.build(mrb.build("ぴょ"))).toEqual([
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
        ]);
        expect(mnb.build(mrb.build("ふぁ"))).toEqual([
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
        ]);
        expect(mnb.build(mrb.build("ふぃ"))).toEqual([
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
        ]);
        expect(mnb.build(mrb.build("ふぇ"))).toEqual([
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
        ]);
        expect(mnb.build(mrb.build("ふぉ"))).toEqual([
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
        ]);
        expect(mnb.build(mrb.build("みゃ"))).toEqual([
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
        ]);
        expect(mnb.build(mrb.build("みぃ"))).toEqual([
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
        ]);
        expect(mnb.build(mrb.build("みゅ"))).toEqual([
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
        ]);
        expect(mnb.build(mrb.build("みぇ"))).toEqual([
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
        ]);
        expect(mnb.build(mrb.build("みょ"))).toEqual([
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
        ]);
        expect(mnb.build(mrb.build("りゃ"))).toEqual([
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
        ]);
        expect(mnb.build(mrb.build("りぃ"))).toEqual([
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
        ]);
        expect(mnb.build(mrb.build("りゅ"))).toEqual([
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
        ]);
        expect(mnb.build(mrb.build("りぇ"))).toEqual([
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
        ]);
        expect(mnb.build(mrb.build("りょ"))).toEqual([
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
        ]);
        expect(mnb.build(mrb.build("ヴぁ"))).toEqual([
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
        ]);
        expect(mnb.build(mrb.build("ヴぃ"))).toEqual([
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
        ]);
        expect(mnb.build(mrb.build("ヴ"))).toEqual([
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
        ]);
        expect(mnb.build(mrb.build("ヴぇ"))).toEqual([
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
        ]);
        expect(mnb.build(mrb.build("ヴぉ"))).toEqual([
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
        ]);
        expect(mnb.build(mrb.build("ぁ"))).toEqual([
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
        ]);
        expect(mnb.build(mrb.build("ぃ"))).toEqual([
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
        ]);
        expect(mnb.build(mrb.build("ぅ"))).toEqual([
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
        ]);
        expect(mnb.build(mrb.build("ぇ"))).toEqual([
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
        ]);
        expect(mnb.build(mrb.build("ぉ"))).toEqual([
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
        ]);
        expect(mnb.build(mrb.build("ゃ"))).toEqual([
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
        ]);
        expect(mnb.build(mrb.build("ゅ"))).toEqual([
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
        ]);
        expect(mnb.build(mrb.build("ょ"))).toEqual([
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
        ]);
        expect(mnb.build(mrb.build("っ"))).toEqual([
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
        ]);
        expect(mnb.build(mrb.build("ゎ"))).toEqual([
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
        ]);
    });
    test("nn after", () => {
        expect(mnb.build(mrb.build("ん", "あ"))).toEqual([
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
        expect(mnb.build(mrb.build("ん", "い"))).toEqual([
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
        expect(mnb.build(mrb.build("ん", "う"))).toEqual([
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
        expect(mnb.build(mrb.build("ん", "え"))).toEqual([
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
        expect(mnb.build(mrb.build("ん", "お"))).toEqual([
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
        expect(mnb.build(mrb.build("ん", "か"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "き"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "く"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "け"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "こ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "さ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "し"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "す"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "せ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "そ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "た"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "ち"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "つ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "て"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "と"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "な"))).toEqual([
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
        expect(mnb.build(mrb.build("ん", "に"))).toEqual([
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
        expect(mnb.build(mrb.build("ん", "ぬ"))).toEqual([
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
        expect(mnb.build(mrb.build("ん", "ね"))).toEqual([
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
        expect(mnb.build(mrb.build("ん", "の"))).toEqual([
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
        expect(mnb.build(mrb.build("ん", "は"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "ひ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "ふ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "へ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "ほ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "ま"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "み"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "む"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "め"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "も"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "や"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "ゆ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "よ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "ら"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "り"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "る"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "れ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "ろ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "わ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "を"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "ん"))).toEqual([
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
        expect(mnb.build(mrb.build("ん", "が"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "ぎ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "ぐ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "げ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "ご"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "ざ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "じ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "ず"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "ぜ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "ぞ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "だ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "ぢ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "づ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "で"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "ど"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "ば"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "び"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "ぶ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "べ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "ぼ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "ぱ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "ぴ"))).toEqual[
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]
        expect(mnb.build(mrb.build("ん", "ぷ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "ぺ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "ぽ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "いぇ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "うぃ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "うぇ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "きゃ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "きぃ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "きゅ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "きぇ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "きょ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "ぎゃ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "ぎぃ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "ぎゅ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "ぎぇ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "ぎょ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "くぁ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "くぃ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "くぇ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "くぉ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "しゃ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "しぃ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "しゅ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "しぇ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "しょ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "じゃ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "じぃ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "じゅ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "じぇ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "じょ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "ちゃ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "ちぃ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "ちゅ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "ちぇ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "ちょ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "ぢぃ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "ぢゅ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "ぢぇ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "ぢょ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "つぁ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "つぃ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "つぇ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "つぉ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "てゃ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "てぃ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "てゅ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "てぇ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "てょ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "でゃ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "でぃ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "でゅ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "でぇ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "でょ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "にゃ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "にぃ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "にゅ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "にぇ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "にょ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "ひゃ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "ひぃ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "ひゅ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "ひぇ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "ひょ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "びゃ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "びぃ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "びゅ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "びぇ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "びょ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "ぴゃ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "ぴぃ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "ぴゅ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "ぴぇ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "ぴょ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "ふぁ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "ふぃ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "ふぇ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "ふぉ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "ふゃ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "ふゅ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "ふょ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "みゃ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "みぃ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "みゅ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "みぇ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "みょ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "りゃ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "りぃ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "りゅ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "りぇ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "りょ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "ヴぁ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "ヴぃ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "ヴ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "ヴぇ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "ヴぉ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "ぁ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "ぃ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "ぅ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "ぇ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "ぉ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "ゃ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "ゅ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "ょ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "っ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ん", "ゎ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
    });

    test("xtu after", () => {
        expect(mnb.build(mrb.build("っ", "あ"))).toEqual([
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
        ]);
        
        expect(mnb.build(mrb.build("っ", "い"))).toEqual([
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
            },
            {
                pos: 0,
                val: "y",
                children: []
            }
        ]);
        
        expect(mnb.build(mrb.build("っ", "う"))).toEqual([
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
            },
            {
                pos: 0,
                val: "w",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "え"))).toEqual([
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
        ]);
        expect(mnb.build(mrb.build("っ", "お"))).toEqual([
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
        ]);
        expect(mnb.build(mrb.build("っ", "か"))).toEqual([
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
            },
            {
                pos: 0,
                val: "k",
                children: []
            },
            {
                pos: 0,
                val: "c",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "き"))).toEqual([
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
            },
            {
                pos: 0,
                val: "k",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "く"))).toEqual([
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
            },
            {
                pos: 0,
                val: "k",
                children: []
            },
            {
                pos: 0,
                val: "c",
                children: []
            },
            {
                pos: 0,
                val: "q",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "け"))).toEqual([
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
            },
            {
                pos: 0,
                val: "k",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "こ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "k",
                children: []
            },
            {
                pos: 0,
                val: "c",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "さ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "s",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "し"))).toEqual([
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
            },
            {
                pos: 0,
                val: "s",
                children: []
            },
            {
                pos: 0,
                val: "c",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "す"))).toEqual([
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
            },
            {
                pos: 0,
                val: "s",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "せ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "s",
                children: []
            },
            {
                pos: 0,
                val: "c",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "そ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "s",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "た"))).toEqual([
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
            },
            {
                pos: 0,
                val: "t",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "ち"))).toEqual([
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
            },
            {
                pos: 0,
                val: "t",
                children: []
            },
            {
                pos: 0,
                val: "c",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "つ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "t",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "て"))).toEqual([
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
            },
            {
                pos: 0,
                val: "t",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "と"))).toEqual([
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
            },
            {
                pos: 0,
                val: "t",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "な"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "に"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "ぬ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "ね"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "の"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "は"))).toEqual([
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
            },
            {
                pos: 0,
                val: "h",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "ひ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "h",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "ふ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "h",
                children: []
            },
            {
                pos: 0,
                val: "f",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "へ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "h",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "ほ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "h",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "ま"))).toEqual([
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
            },
            {
                pos: 0,
                val: "m",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "み"))).toEqual([
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
            },
            {
                pos: 0,
                val: "m",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "む"))).toEqual([
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
            },
            {
                pos: 0,
                val: "m",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "め"))).toEqual([
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
            },
            {
                pos: 0,
                val: "m",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "も"))).toEqual([
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
            },
            {
                pos: 0,
                val: "m",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "や"))).toEqual([
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
            },
            {
                pos: 0,
                val: "y",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "ゆ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "y",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "よ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "y",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "ら"))).toEqual([
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
            },
            {
                pos: 0,
                val: "r",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "り"))).toEqual([
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
            },
            {
                pos: 0,
                val: "r",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "る"))).toEqual([
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
            },
            {
                pos: 0,
                val: "r",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "れ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "r",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "ろ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "r",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "わ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "w",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "を"))).toEqual([
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
            },
            {
                pos: 0,
                val: "w",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "ん"))).toEqual([
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
            },
            {
                pos: 0,
                val: "x",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "が"))).toEqual([
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
            },
            {
                pos: 0,
                val: "g",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "ぎ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "g",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "ぐ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "g",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "げ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "g",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "ご"))).toEqual([
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
            },
            {
                pos: 0,
                val: "g",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "ざ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "z",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "じ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "z",
                children: []
            },
            {
                pos: 0,
                val: "j",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "ず"))).toEqual([
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
            },
            {
                pos: 0,
                val: "z",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "ぜ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "z",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "ぞ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "z",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "だ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "d",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "ぢ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "d",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "づ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "d",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "で"))).toEqual([
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
            },
            {
                pos: 0,
                val: "d",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "ど"))).toEqual([
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
            },
            {
                pos: 0,
                val: "d",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "ば"))).toEqual([
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
            },
            {
                pos: 0,
                val: "b",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "び"))).toEqual([
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
            },
            {
                pos: 0,
                val: "b",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "ぶ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "b",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "べ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "b",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "ぼ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "b",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "ぱ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "p",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "ぴ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "p",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "ぷ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "p",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "ぺ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "p",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "ぽ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "p",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "いぇ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "y",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "うぃ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "w",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "うぇ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "w",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "きゃ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "k",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "きぃ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "k",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "きゅ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "k",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "きぇ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "k",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "きょ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "k",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "ぎゃ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "g",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "ぎぃ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "g",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "ぎゅ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "g",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "ぎぇ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "g",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "ぎょ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "g",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "くぁ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "k",
                children: []
            },
            {
                pos: 0,
                val: "c",
                children: []
            },
            {
                pos: 0,
                val: "q",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "くぃ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "k",
                children: []
            },
            {
                pos: 0,
                val: "c",
                children: []
            },
            {
                pos: 0,
                val: "q",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "くぇ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "k",
                children: []
            },
            {
                pos: 0,
                val: "c",
                children: []
            },
            {
                pos: 0,
                val: "q",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "くぉ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "k",
                children: []
            },
            {
                pos: 0,
                val: "c",
                children: []
            },
            {
                pos: 0,
                val: "q",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "しゃ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "s",
                children: []
            },
            {
                pos: 0,
                val: "c",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "しぃ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "s",
                children: []
            },
            {
                pos: 0,
                val: "c",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "しゅ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "s",
                children: []
            },
            {
                pos: 0,
                val: "c",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "しぇ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "s",
                children: []
            },
            {
                pos: 0,
                val: "c",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "しょ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "s",
                children: []
            },
            {
                pos: 0,
                val: "c",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "じゃ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "z",
                children: []
            },
            {
                pos: 0,
                val: "j",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "じぃ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "z",
                children: []
            },
            {
                pos: 0,
                val: "j",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "じゅ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "z",
                children: []
            },
            {
                pos: 0,
                val: "j",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "じぇ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "z",
                children: []
            },
            {
                pos: 0,
                val: "j",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "じょ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "z",
                children: []
            },
            {
                pos: 0,
                val: "j",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "ちゃ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "t",
                children: []
            },
            {
                pos: 0,
                val: "c",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "ちぃ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "t",
                children: []
            },
            {
                pos: 0,
                val: "c",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "ちゅ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "t",
                children: []
            },
            {
                pos: 0,
                val: "c",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "ちぇ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "t",
                children: []
            },
            {
                pos: 0,
                val: "c",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "ちょ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "t",
                children: []
            },
            {
                pos: 0,
                val: "c",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "ぢぃ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "d",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "ぢゅ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "d",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "ぢぇ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "d",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "ぢょ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "d",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "つぁ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "t",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "つぃ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "t",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "つぇ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "t",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "つぉ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "t",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "てゃ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "t",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "てぃ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "t",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "てゅ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "t",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "てぇ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "t",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "てょ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "t",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "でゃ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "d",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "でぃ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "d",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "でゅ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "d",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "でぇ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "d",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "でょ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "d",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "にゃ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "にぃ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "にゅ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "にぇ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "にょ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "ひゃ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "h",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "ひぃ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "h",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "ひゅ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "h",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "ひぇ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "h",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "ひょ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "h",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "びゃ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "b",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "びぃ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "b",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "びゅ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "b",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "びぇ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "b",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "びょ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "b",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "ぴゃ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "p",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "ぴぃ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "p",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "ぴゅ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "p",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "ぴぇ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "p",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "ぴょ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "p",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "ふぁ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "h",
                children: []
            },
            {
                pos: 0,
                val: "f",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "ふぃ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "h",
                children: []
            },
            {
                pos: 0,
                val: "f",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "ふぇ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "h",
                children: []
            },
            {
                pos: 0,
                val: "f",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "ふぉ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "h",
                children: []
            },
            {
                pos: 0,
                val: "f",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "ふゃ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "h",
                children: []
            },
            {
                pos: 0,
                val: "f",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "ふゅ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "h",
                children: []
            },
            {
                pos: 0,
                val: "f",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "ふょ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "h",
                children: []
            },
            {
                pos: 0,
                val: "f",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "みゃ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "m",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "みぃ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "m",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "みゅ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "m",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "みぇ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "m",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "みょ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "m",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "りゃ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "r",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "りぃ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "r",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "りゅ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "r",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "りぇ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "r",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "りょ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "r",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "ヴぁ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "v",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "ヴぃ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "v",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "ヴ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "v",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "ヴぇ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "v",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "ヴぉ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "v",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "ぁ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "x",
                children: []
            },
            {
                pos: 0,
                val: "l",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "ぃ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "x",
                children: []
            },
            {
                pos: 0,
                val: "l",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "ぅ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "x",
                children: []
            },
            {
                pos: 0,
                val: "l",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "ぇ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "x",
                children: []
            },
            {
                pos: 0,
                val: "l",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "ぉ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "x",
                children: []
            },
            {
                pos: 0,
                val: "l",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "ゃ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "x",
                children: []
            },
            {
                pos: 0,
                val: "l",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "ゅ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "x",
                children: []
            },
            {
                pos: 0,
                val: "l",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "ょ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "x",
                children: []
            },
            {
                pos: 0,
                val: "l",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "っ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "x",
                children: []
            },
            {
                pos: 0,
                val: "l",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("っ", "ゎ"))).toEqual([
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
            },
            {
                pos: 0,
                val: "x",
                children: []
            },
            {
                pos: 0,
                val: "l",
                children: []
            }
        ]);
    });

    test("number", () => {
        expect(mnb.build(mrb.build("１"))).toEqual([
            {
                pos: 0,
                val: "1",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("２"))).toEqual([
            {
                pos: 0,
                val: "2",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("３"))).toEqual([
            {
                pos: 0,
                val: "3",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("４"))).toEqual([
            {
                pos: 0,
                val: "4",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("５"))).toEqual([
            {
                pos: 0,
                val: "5",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("６"))).toEqual([
            {
                pos: 0,
                val: "6",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("７"))).toEqual([
            {
                pos: 0,
                val: "7",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("８"))).toEqual([
            {
                pos: 0,
                val: "8",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("９"))).toEqual([
            {
                pos: 0,
                val: "9",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("１０"))).toEqual([
            {
                pos: 0,
                val: "1",
                children: [
                    {
                        pos: 1,
                        val: "0",
                        children: []
                    }
                ]
            }
        ]);
        expect(mnb.build(mrb.build("１００"))).toEqual([
            {
                pos: 0,
                val: "1",
                children: [
                    {
                        pos: 1,
                        val: "0",
                        children: [
                            {
                                pos: 2,
                                val: "0",
                                children: []
                            }
                        ]
                    }
                ]
            }
        ]);
        expect(mnb.build(mrb.build("１０００"))).toEqual([
            {
                pos: 0,
                val: "1",
                children: [
                    {
                        pos: 1,
                        val: "0",
                        children: [
                            {
                                pos: 2,
                                val: "0",
                                children: [
                                    {
                                        pos: 3,
                                        val: "0",
                                        children: []
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]);
        expect(mnb.build(mrb.build("１００００"))).toEqual([
            {
                pos: 0,
                val: "1",
                children: [
                    {
                        pos: 1,
                        val: "0",
                        children: [
                            {
                                pos: 2,
                                val: "0",
                                children: [
                                    {
                                        pos: 3,
                                        val: "0",
                                        children: [
                                            {
                                                pos: 4,
                                                val: "0",
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
        expect(mnb.build(mrb.build("1"))).toEqual([
            {
                pos: 0,
                val: "1",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("2"))).toEqual([
            {
                pos: 0,
                val: "2",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("3"))).toEqual([
            {
                pos: 0,
                val: "3",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("4"))).toEqual([
            {
                pos: 0,
                val: "4",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("5"))).toEqual([
            {
                pos: 0,
                val: "5",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("6"))).toEqual([
            {
                pos: 0,
                val: "6",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("7"))).toEqual([
            {
                pos: 0,
                val: "7",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("8"))).toEqual([
            {
                pos: 0,
                val: "8",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("9"))).toEqual([
            {
                pos: 0,
                val: "9",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("10"))).toEqual([
            {
                pos: 0,
                val: "1",
                children: [
                    {
                        pos: 1,
                        val: "0",
                        children: []
                    }
                ]
            }
        ]);
        expect(mnb.build(mrb.build("100"))).toEqual([
            {
                pos: 0,
                val: "1",
                children: [
                    {
                        pos: 1,
                        val: "0",
                        children: [
                            {
                                pos: 2,
                                val: "0",
                                children: []
                            }
                        ]
                    }
                ]
            }
        ]);
        expect(mnb.build(mrb.build("1000"))).toEqual([
            {
                pos: 0,
                val: "1",
                children: [
                    {
                        pos: 1,
                        val: "0",
                        children: [
                            {
                                pos: 2,
                                val: "0",
                                children: [
                                    {
                                        pos: 3,
                                        val: "0",
                                        children: []
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]);
        expect(mnb.build(mrb.build("10000"))).toEqual([
            {
                pos: 0,
                val: "1",
                children: [
                    {
                        pos: 1,
                        val: "0",
                        children: [
                            {
                                pos: 2,
                                val: "0",
                                children: [
                                    {
                                        pos: 3,
                                        val: "0",
                                        children: [
                                            {
                                                pos: 4,
                                                val: "0",
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
    });

    test("symbol", () => {
        expect(mnb.build(mrb.build("！"))).toEqual([
            {
                pos: 0,
                val: "!",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("＂"))).toEqual([
            {
                pos: 0,
                val: "\"",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("＃"))).toEqual([
            {
                pos: 0,
                val: "#",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("＄"))).toEqual([
            {
                pos: 0,
                val: "$",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("％"))).toEqual([
            {
                pos: 0,
                val: "%",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("＆"))).toEqual([
            {
                pos: 0,
                val: "&",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("＇"))).toEqual([
            {
                pos: 0,
                val: "'",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("（"))).toEqual([
            {
                pos: 0,
                val: "(",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("）"))).toEqual([
            {
                pos: 0,
                val: ")",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("＊"))).toEqual([
            {
                pos: 0,
                val: "*",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("＋"))).toEqual([
            {
                pos: 0,
                val: "+",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("，"))).toEqual([
            {
                pos: 0,
                val: ",",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("－"))).toEqual([
            {
                pos: 0,
                val: "-",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("．"))).toEqual([
            {
                pos: 0,
                val: ".",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("／"))).toEqual([
            {
                pos: 0,
                val: "/",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("："))).toEqual([
            {
                pos: 0,
                val: ":",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("；"))).toEqual([
            {
                pos: 0,
                val: ";",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("＜"))).toEqual([
            {
                pos: 0,
                val: "<",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("＝"))).toEqual([
            {
                pos: 0,
                val: "=",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("＞"))).toEqual([
            {
                pos: 0,
                val: ">",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("？"))).toEqual([
            {
                pos: 0,
                val: "?",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("＠"))).toEqual([
            {
                pos: 0,
                val: "@",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("［"))).toEqual([
            {
                pos: 0,
                val: "[",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("＼"))).toEqual([
            {
                pos: 0,
                val: "\\",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("］"))).toEqual([
            {
                pos: 0,
                val: "]",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("＾"))).toEqual([
            {
                pos: 0,
                val: "^",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("＿"))).toEqual([
            {
                pos: 0,
                val: "_",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("｀"))).toEqual([
            {
                pos: 0,
                val: "`",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("｛"))).toEqual([
            {
                pos: 0,
                val: "{",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("｜"))).toEqual([
            {
                pos: 0,
                val: "|",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("｝"))).toEqual([
            {
                pos: 0,
                val: "}",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("～"))).toEqual([
            {
                pos: 0,
                val: "~",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("、"))).toEqual([
            {
                pos: 0,
                val: ",",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("。"))).toEqual([
            {
                pos: 0,
                val: ".",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("「"))).toEqual([
            {
                pos: 0,
                val: "\"",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("」"))).toEqual([
            {
                pos: 0,
                val: "\"",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("　"))).toEqual([
            {
                pos: 0,
                val: " ",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("!"))).toEqual([
            {
                pos: 0,
                val: "!",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("\""))).toEqual([
            {
                pos: 0,
                val: "\"",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("#"))).toEqual([
            {
                pos: 0,
                val: "#",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("$"))).toEqual([
            {
                pos: 0,
                val: "$",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("%"))).toEqual([
            {
                pos: 0,
                val: "%",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("&"))).toEqual([
            {
                pos: 0,
                val: "&",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("'"))).toEqual([
            {
                pos: 0,
                val: "'",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("("))).toEqual([
            {
                pos: 0,
                val: "(",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build(")"))).toEqual([
            {
                pos: 0,
                val: ")",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("*"))).toEqual([
            {
                pos: 0,
                val: "*",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("+"))).toEqual([
            {
                pos: 0,
                val: "+",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build(","))).toEqual([
            {
                pos: 0,
                val: ",",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("-"))).toEqual([
            {
                pos: 0,
                val: "-",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("."))).toEqual([
            {
                pos: 0,
                val: ".",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("/"))).toEqual([
            {
                pos: 0,
                val: "/",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build(":"))).toEqual([
            {
                pos: 0,
                val: ":",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build(";"))).toEqual([
            {
                pos: 0,
                val: ";",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("<"))).toEqual([
            {
                pos: 0,
                val: "<",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("="))).toEqual([
            {
                pos: 0,
                val: "=",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build(">"))).toEqual([
            {
                pos: 0,
                val: ">",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("?"))).toEqual([
            {
                pos: 0,
                val: "?",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("@"))).toEqual([
            {
                pos: 0,
                val: "@",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("["))).toEqual([
            {
                pos: 0,
                val: "[",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("\\"))).toEqual([
            {
                pos: 0,
                val: "\\",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("]"))).toEqual([
            {
                pos: 0,
                val: "]",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("^"))).toEqual([
            {
                pos: 0,
                val: "^",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("_"))).toEqual([
            {
                pos: 0,
                val: "_",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("`"))).toEqual([
            {
                pos: 0,
                val: "`",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("{"))).toEqual([
            {
                pos: 0,
                val: "{",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("|"))).toEqual([
            {
                pos: 0,
                val: "|",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("}"))).toEqual([
            {
                pos: 0,
                val: "}",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("~"))).toEqual([
            {
                pos: 0,
                val: "~",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build(" "))).toEqual([
            {
                pos: 0,
                val: " ",
                children: []
            }
        ]);
    });

    test("roman", () => {
        expect(mnb.build(mrb.build("ａ"))).toEqual([
            {
                pos: 0,
                val: "a",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ｂ"))).toEqual([
            {
                pos: 0,
                val: "b",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ｃ"))).toEqual([
            {
                pos: 0,
                val: "c",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ｄ"))).toEqual([
            {
                pos: 0,
                val: "d",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ｅ"))).toEqual([
            {
                pos: 0,
                val: "e",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ｆ"))).toEqual([
            {
                pos: 0,
                val: "f",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ｇ"))).toEqual([
            {
                pos: 0,
                val: "g",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ｈ"))).toEqual([
            {
                pos: 0,
                val: "h",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ｉ"))).toEqual([
            {
                pos: 0,
                val: "i",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ｊ"))).toEqual([
            {
                pos: 0,
                val: "j",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ｋ"))).toEqual([
            {
                pos: 0,
                val: "k",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ｌ"))).toEqual([
            {
                pos: 0,
                val: "l",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ｍ"))).toEqual([
            {
                pos: 0,
                val: "m",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ｎ"))).toEqual([
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ｏ"))).toEqual([
            {
                pos: 0,
                val: "o",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ｐ"))).toEqual([
            {
                pos: 0,
                val: "p",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ｑ"))).toEqual([
            {
                pos: 0,
                val: "q",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ｒ"))).toEqual([
            {
                pos: 0,
                val: "r",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ｓ"))).toEqual([
            {
                pos: 0,
                val: "s",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ｔ"))).toEqual([
            {
                pos: 0,
                val: "t",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ｕ"))).toEqual([
            {
                pos: 0,
                val: "u",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ｖ"))).toEqual([
            {
                pos: 0,
                val: "v",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ｗ"))).toEqual([
            {
                pos: 0,
                val: "w",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ｘ"))).toEqual([
            {
                pos: 0,
                val: "x",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ｙ"))).toEqual([
            {
                pos: 0,
                val: "y",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("ｚ"))).toEqual([
            {
                pos: 0,
                val: "z",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("Ａ"))).toEqual([
            {
                pos: 0,
                val: "A",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("Ｂ"))).toEqual([
            {
                pos: 0,
                val: "B",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("Ｃ"))).toEqual([
            {
                pos: 0,
                val: "C",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("Ｄ"))).toEqual([
            {
                pos: 0,
                val: "D",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("Ｅ"))).toEqual([
            {
                pos: 0,
                val: "E",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("Ｆ"))).toEqual([
            {
                pos: 0,
                val: "F",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("Ｇ"))).toEqual([
            {
                pos: 0,
                val: "G",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("Ｈ"))).toEqual([
            {
                pos: 0,
                val: "H",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("Ｉ"))).toEqual([
            {
                pos: 0,
                val: "I",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("Ｊ"))).toEqual([
            {
                pos: 0,
                val: "J",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("Ｋ"))).toEqual([
            {
                pos: 0,
                val: "K",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("Ｌ"))).toEqual([
            {
                pos: 0,
                val: "L",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("Ｍ"))).toEqual([
            {
                pos: 0,
                val: "M",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("Ｎ"))).toEqual([
            {
                pos: 0,
                val: "N",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("Ｏ"))).toEqual([
            {
                pos: 0,
                val: "O",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("Ｐ"))).toEqual([
            {
                pos: 0,
                val: "P",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("Ｑ"))).toEqual([
            {
                pos: 0,
                val: "Q",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("Ｒ"))).toEqual([
            {
                pos: 0,
                val: "R",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("Ｓ"))).toEqual([
            {
                pos: 0,
                val: "S",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("Ｔ"))).toEqual([
            {
                pos: 0,
                val: "T",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("Ｕ"))).toEqual([
            {
                pos: 0,
                val: "U",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("Ｖ"))).toEqual([
            {
                pos: 0,
                val: "V",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("Ｗ"))).toEqual([
            {
                pos: 0,
                val: "W",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("Ｘ"))).toEqual([
            {
                pos: 0,
                val: "X",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("Ｙ"))).toEqual([
            {
                pos: 0,
                val: "Y",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("Ｚ"))).toEqual([
            {
                pos: 0,
                val: "Z",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("a"))).toEqual([
            {
                pos: 0,
                val: "a",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("b"))).toEqual([
            {
                pos: 0,
                val: "b",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("c"))).toEqual([
            {
                pos: 0,
                val: "c",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("d"))).toEqual([
            {
                pos: 0,
                val: "d",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("e"))).toEqual([
            {
                pos: 0,
                val: "e",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("f"))).toEqual([
            {
                pos: 0,
                val: "f",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("g"))).toEqual([
            {
                pos: 0,
                val: "g",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("h"))).toEqual([
            {
                pos: 0,
                val: "h",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("i"))).toEqual([
            {
                pos: 0,
                val: "i",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("j"))).toEqual([
            {
                pos: 0,
                val: "j",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("k"))).toEqual([
            {
                pos: 0,
                val: "k",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("l"))).toEqual([
            {
                pos: 0,
                val: "l",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("m"))).toEqual([
            {
                pos: 0,
                val: "m",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("n"))).toEqual([
            {
                pos: 0,
                val: "n",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("o"))).toEqual([
            {
                pos: 0,
                val: "o",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("p"))).toEqual([
            {
                pos: 0,
                val: "p",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("q"))).toEqual([
            {
                pos: 0,
                val: "q",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("r"))).toEqual([
            {
                pos: 0,
                val: "r",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("s"))).toEqual([
            {
                pos: 0,
                val: "s",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("t"))).toEqual([
            {
                pos: 0,
                val: "t",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("u"))).toEqual([
            {
                pos: 0,
                val: "u",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("v"))).toEqual([
            {
                pos: 0,
                val: "v",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("w"))).toEqual([
            {
                pos: 0,
                val: "w",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("x"))).toEqual([
            {
                pos: 0,
                val: "x",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("y"))).toEqual([
            {
                pos: 0,
                val: "y",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("z"))).toEqual([
            {
                pos: 0,
                val: "z",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("A"))).toEqual([
            {
                pos: 0,
                val: "A",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("B"))).toEqual([
            {
                pos: 0,
                val: "B",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("C"))).toEqual([
            {
                pos: 0,
                val: "C",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("D"))).toEqual([
            {
                pos: 0,
                val: "D",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("E"))).toEqual([
            {
                pos: 0,
                val: "E",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("F"))).toEqual([
            {
                pos: 0,
                val: "F",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("G"))).toEqual([
            {
                pos: 0,
                val: "G",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("H"))).toEqual([
            {
                pos: 0,
                val: "H",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("I"))).toEqual([
            {
                pos: 0,
                val: "I",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("J"))).toEqual([
            {
                pos: 0,
                val: "J",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("K"))).toEqual([
            {
                pos: 0,
                val: "K",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("L"))).toEqual([
            {
                pos: 0,
                val: "L",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("M"))).toEqual([
            {
                pos: 0,
                val: "M",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("N"))).toEqual([
            {
                pos: 0,
                val: "N",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("O"))).toEqual([
            {
                pos: 0,
                val: "O",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("P"))).toEqual([
            {
                pos: 0,
                val: "P",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("Q"))).toEqual([
            {
                pos: 0,
                val: "Q",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("R"))).toEqual([
            {
                pos: 0,
                val: "R",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("S"))).toEqual([
            {
                pos: 0,
                val: "S",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("T"))).toEqual([
            {
                pos: 0,
                val: "T",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("U"))).toEqual([
            {
                pos: 0,
                val: "U",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("V"))).toEqual([
            {
                pos: 0,
                val: "V",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("W"))).toEqual([
            {
                pos: 0,
                val: "W",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("X"))).toEqual([
            {
                pos: 0,
                val: "X",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("Y"))).toEqual([
            {
                pos: 0,
                val: "Y",
                children: []
            }
        ]);
        expect(mnb.build(mrb.build("Z"))).toEqual([
            {
                pos: 0,
                val: "Z",
                children: []
            }
        ]);        
    });
});