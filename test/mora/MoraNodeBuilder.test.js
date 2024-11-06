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
    })
})