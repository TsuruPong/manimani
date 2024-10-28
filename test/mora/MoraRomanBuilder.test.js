"use strict";

var MoraRomanBuilder = require("../../src/mora/MoraRomanBuilder");
var builder = new MoraRomanBuilder();

describe("Roman Builder Test", () => {
    test("single word", () => {
        expect(builder.build("あ")).toEqual(["a"]);
        expect(builder.build("い")).toEqual(["i"]);
        expect(builder.build("う")).toEqual(["u"]);
        expect(builder.build("え")).toEqual(["e"]);
        expect(builder.build("お")).toEqual(["o"]);
        expect(builder.build("か")).toEqual(["ka", "ca"]);
        expect(builder.build("き")).toEqual(["ki"]);
        expect(builder.build("く")).toEqual(["ku", "cu"]);
        expect(builder.build("け")).toEqual(["ke"]);
        expect(builder.build("こ")).toEqual(["ko", "co"]);
        expect(builder.build("さ")).toEqual(["sa"]);
        expect(builder.build("し")).toEqual(["si", "shi", "ci"]);
        expect(builder.build("す")).toEqual(["su"]);
        expect(builder.build("せ")).toEqual(["se", "ce"]);
        expect(builder.build("そ")).toEqual(["so"]);
        expect(builder.build("た")).toEqual(["ta"]);
        expect(builder.build("ち")).toEqual(["ti", "chi"]);
        expect(builder.build("つ")).toEqual(["tu", "tsu"]);
        expect(builder.build("て")).toEqual(["te"]);
        expect(builder.build("と")).toEqual(["to"]);
        expect(builder.build("な")).toEqual(["na"]);
        expect(builder.build("に")).toEqual(["ni"]);
        expect(builder.build("ぬ")).toEqual(["nu"]);
        expect(builder.build("ね")).toEqual(["ne"]);
        expect(builder.build("の")).toEqual(["no"]);
        expect(builder.build("は")).toEqual(["ha"]);
        expect(builder.build("ひ")).toEqual(["hi"]);
        expect(builder.build("ふ")).toEqual(["hu"]);
        expect(builder.build("へ")).toEqual(["he"]);
        expect(builder.build("ほ")).toEqual(["ho"]);
        expect(builder.build("ま")).toEqual(["ma"]);
        expect(builder.build("み")).toEqual(["mi"]);
        expect(builder.build("む")).toEqual(["mu"]);
        expect(builder.build("め")).toEqual(["me"]);
        expect(builder.build("も")).toEqual(["mo"]);
        expect(builder.build("や")).toEqual(["ya"]);
        expect(builder.build("ゆ")).toEqual(["yu"]);
        expect(builder.build("よ")).toEqual(["yo"]);
        expect(builder.build("ら")).toEqual(["ra"]);
        expect(builder.build("り")).toEqual(["ri"]);
        expect(builder.build("る")).toEqual(["ru"]);
        expect(builder.build("れ")).toEqual(["re"]);
        expect(builder.build("ろ")).toEqual(["ro"]);
        expect(builder.build("わ")).toEqual(["wa"]);
        expect(builder.build("を")).toEqual(["wo"]);
        expect(builder.build("ん")).toEqual(["nn", "xn"]);
    })
})