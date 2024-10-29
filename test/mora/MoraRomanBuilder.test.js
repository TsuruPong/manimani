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
        expect(builder.build("が")).toEqual(["ga"]);
        expect(builder.build("ぎ")).toEqual(["gi"]);
        expect(builder.build("ぐ")).toEqual(["gu"]);
        expect(builder.build("げ")).toEqual(["ge"]);
        expect(builder.build("ご")).toEqual(["go"]);
        expect(builder.build("ざ")).toEqual(["za"]);
        expect(builder.build("じ")).toEqual(["zi", "ji"]);
        expect(builder.build("ず")).toEqual(["zu"]);
        expect(builder.build("ぜ")).toEqual(["ze"]);
        expect(builder.build("ぞ")).toEqual(["zo"]);
        expect(builder.build("だ")).toEqual(["da"]);
        expect(builder.build("ぢ")).toEqual(["di"]);
        expect(builder.build("づ")).toEqual(["du"]);
        expect(builder.build("で")).toEqual(["de"]);
        expect(builder.build("ど")).toEqual(["do"]);
        expect(builder.build("ば")).toEqual(["ba"]);
        expect(builder.build("び")).toEqual(["bi"]);
        expect(builder.build("ぶ")).toEqual(["bu"]);
        expect(builder.build("べ")).toEqual(["be"]);
        expect(builder.build("ぼ")).toEqual(["bo"]);
        expect(builder.build("ぱ")).toEqual(["pa"]);
        expect(builder.build("ぴ")).toEqual(["pi"]);
        expect(builder.build("ぷ")).toEqual(["pu"]);
        expect(builder.build("ぺ")).toEqual(["pe"]);
        expect(builder.build("ぽ")).toEqual(["po"]);
        expect(builder.build("いぇ")).toEqual(expect.arrayContaining(["ye", "ixe", "ile"]));
        expect(builder.build("うぃ")).toEqual(expect.arrayContaining(["wi", "uxi", "uli"]));
        expect(builder.build("うぇ")).toEqual(expect.arrayContaining(["we", "uxe", "ule"]));
        expect(builder.build("きゃ")).toEqual(expect.arrayContaining(["kya", "kilya", "kixya"]));
        expect(builder.build("きぃ")).toEqual(expect.arrayContaining(["kyi", "kili", "kixi"]));
        expect(builder.build("きゅ")).toEqual(expect.arrayContaining(["kyu", "kilyu", "kixyu"]));
        expect(builder.build("きぇ")).toEqual(expect.arrayContaining(["kye", "kile", "kixe"]));
        expect(builder.build("きょ")).toEqual(expect.arrayContaining(["kyo", "kilyo", "kixyo"]));
        expect(builder.build("ぎゃ")).toEqual(expect.arrayContaining(["gya", "gilya", "gixya"]));
        expect(builder.build("ぎぃ")).toEqual(expect.arrayContaining(["gyi", "gili", "gixi"]));
        expect(builder.build("ぎゅ")).toEqual(expect.arrayContaining(["gyu", "gilyu", "gixyu"]));
        expect(builder.build("ぎぇ")).toEqual(expect.arrayContaining(["gye", "gile", "gixe"]));
        expect(builder.build("ぎょ")).toEqual(expect.arrayContaining(["gyo", "gilyo", "gixyo"]));
        expect(builder.build("くぁ")).toEqual(expect.arrayContaining(["qa", "kwa", "kula", "kuxa", "cula", "cuxa"]));
        expect(builder.build("くぃ")).toEqual(expect.arrayContaining(["qi", "kwi", "kuli", "kuxi", "culi", "cuxi"]));
        expect(builder.build("くぇ")).toEqual(expect.arrayContaining(["qe", "kwe", "kule", "kuxe", "cule", "cuxe"]));
        expect(builder.build("くぉ")).toEqual(expect.arrayContaining(["qo", "kwo", "kulo", "kuxo", "culo", "cuxo"]));
        expect(builder.build("しゃ")).toEqual(expect.arrayContaining(["sha", "sya", "shya", "shilya", "shixya", "silya", "sixya", "cilya", "cixya"]));
        expect(builder.build("しぃ")).toEqual(expect.arrayContaining(["syi", "shyi", "shili", "shixi", "sili", "sixi", "cili", "cixi"]));
        expect(builder.build("しゅ")).toEqual(expect.arrayContaining(["shu", "syu", "shyu", "shilyu", "shixyu", "silyu", "sixyu", "cilyu", "cixyu"]));
        expect(builder.build("しぇ")).toEqual(expect.arrayContaining(["she", "sye", "shye", "shile", "shixe", "sile", "sixe", "cile", "cixe"]));
        expect(builder.build("しょ")).toEqual(expect.arrayContaining(["sho", "syo", "shyo", "shilyo", "shixyo", "silyo", "sixyo", "cilyo", "cixyo"]));
        expect(builder.build("じぃ")).toEqual(expect.arrayContaining(["jyi", "jili", "jixi"]));
        expect(builder.build("じゅ")).toEqual(expect.arrayContaining(["ju", "jilyu", "jixyu"]));
        expect(builder.build("じぇ")).toEqual(expect.arrayContaining(["je", "jile", "jixe"]));
        expect(builder.build("じょ")).toEqual(expect.arrayContaining(["jo", "jilyo", "jixyo"]));
        expect(builder.build("ちゃ")).toEqual(expect.arrayContaining(["cha", "cya", "tya", "chya", "tilya", "tixya", "chixya", "chilya"]));
        expect(builder.build("ちぃ")).toEqual(expect.arrayContaining(["tyi", "cyi", "chyi", "tili", "tixi"]));
        expect(builder.build("ちゅ")).toEqual(expect.arrayContaining(["chu", "cyu", "tyu", "chyu", "tilyu", "tixyu"]));
        expect(builder.build("ちぇ")).toEqual(expect.arrayContaining(["che", "cye", "tye", "chye", "tile", "tixe"]));
        expect(builder.build("ちょ")).toEqual(expect.arrayContaining(["cho", "cyo", "tyo", "chyo", "tilyo", "tixyo"]));
        expect(builder.build("ぢぃ")).toEqual(expect.arrayContaining(["dyi", "dili", "dixi"]));
        expect(builder.build("ぢゅ")).toEqual(expect.arrayContaining(["dyu", "dilyu", "dixyu"]));
        expect(builder.build("ぢぇ")).toEqual(expect.arrayContaining(["dye", "dile", "dixe"]));
        expect(builder.build("ぢょ")).toEqual(expect.arrayContaining(["dyo", "dilyo", "dixyo"]));
        expect(builder.build("つぁ")).toEqual(expect.arrayContaining(["tsa", "tuxa", "tula", "tsuxa", "tsula"]));
        expect(builder.build("つぃ")).toEqual(expect.arrayContaining(["tsi", "tuxi", "tuli"]));
        expect(builder.build("つぇ")).toEqual(expect.arrayContaining(["tse", "tuxe", "tule"]));
        expect(builder.build("つぉ")).toEqual(expect.arrayContaining(["tso", "tuxo", "tulo"]));
        expect(builder.build("でゃ")).toEqual(expect.arrayContaining(["dha", "dexya", "delya"]));
        expect(builder.build("でぃ")).toEqual(expect.arrayContaining(["dhi", "dexi", "deli"]));
        expect(builder.build("でゅ")).toEqual(expect.arrayContaining(["dhu", "dexyu", "delyu"]));
        expect(builder.build("でぇ")).toEqual(expect.arrayContaining(["dhe", "dexe", "dele"]));
        expect(builder.build("でょ")).toEqual(expect.arrayContaining(["dho", "dexyo", "delyo"]));
        expect(builder.build("にゃ")).toEqual(expect.arrayContaining(["nya", "nilya", "nixya"]));
        expect(builder.build("にぃ")).toEqual(expect.arrayContaining(["nyi", "nili", "nixi"]));
        expect(builder.build("にゅ")).toEqual(expect.arrayContaining(["nyu", "nilyu", "nixyu"]));
        expect(builder.build("にぇ")).toEqual(expect.arrayContaining(["nye", "nile", "nixe"]));
        expect(builder.build("にょ")).toEqual(expect.arrayContaining(["nyo", "nilyo", "nixyo"]));
        expect(builder.build("ひゃ")).toEqual(expect.arrayContaining(["hya", "hilya", "hixya"]));
        expect(builder.build("ひぃ")).toEqual(expect.arrayContaining(["hyi", "hili", "hixi"]));
        expect(builder.build("ひゅ")).toEqual(expect.arrayContaining(["hyu", "hilyu", "hixyu"]));
        expect(builder.build("ひぇ")).toEqual(expect.arrayContaining(["hye", "hile", "hixe"]));
        expect(builder.build("ひょ")).toEqual(expect.arrayContaining(["hyo", "hilyo", "hixyo"]));
        expect(builder.build("びゃ")).toEqual(expect.arrayContaining(["bya", "bilya", "bixya"]));
        expect(builder.build("びぃ")).toEqual(expect.arrayContaining(["byi", "bili", "bixi"]));
        expect(builder.build("びゅ")).toEqual(expect.arrayContaining(["byu", "bilyu", "bixyu"]));
        expect(builder.build("びぇ")).toEqual(expect.arrayContaining(["bye", "bile", "bixe"]));
        expect(builder.build("びょ")).toEqual(expect.arrayContaining(["byo", "bilyo", "bixyo"]));
        expect(builder.build("ぴゃ")).toEqual(expect.arrayContaining(["pya", "pilya", "pixya"]));
        expect(builder.build("ぴぃ")).toEqual(expect.arrayContaining(["pyi", "pili", "pixi"]));
        expect(builder.build("ぴゅ")).toEqual(expect.arrayContaining(["pyu", "pilyu", "pixyu"]));
        expect(builder.build("ぴぇ")).toEqual(expect.arrayContaining(["pye", "pile", "pixe"]));
        expect(builder.build("ぴょ")).toEqual(expect.arrayContaining(["pyo", "pilyo", "pixyo"]));
        expect(builder.build("ふぁ")).toEqual(expect.arrayContaining(["fa", "hwa", "fwa"]));
        expect(builder.build("ふぃ")).toEqual(expect.arrayContaining(["fi", "hwi", "fwi"]));
        expect(builder.build("ふぇ")).toEqual(expect.arrayContaining(["fe", "hwe", "fwe"]));
        expect(builder.build("ふぉ")).toEqual(expect.arrayContaining(["fo", "hwo", "fwo"]));
        expect(builder.build("ふゃ")).toEqual(expect.arrayContaining(["fya", "hulya", "huxya"]));
        expect(builder.build("ふゅ")).toEqual(expect.arrayContaining(["fyu", "hulyu", "huxyu"]));
        expect(builder.build("ふょ")).toEqual(expect.arrayContaining(["fyo", "hulyo", "huxyo"]));
        expect(builder.build("みゃ")).toEqual(expect.arrayContaining(["mya", "milya", "mixya"]));
        expect(builder.build("みぃ")).toEqual(expect.arrayContaining(["myi", "mili", "mixi"]));
        expect(builder.build("みゅ")).toEqual(expect.arrayContaining(["myu", "milyu", "mixyu"]));
        expect(builder.build("みぇ")).toEqual(expect.arrayContaining(["mye", "mile", "mixe"]));
        expect(builder.build("みょ")).toEqual(expect.arrayContaining(["myo", "milyo", "mixyo"]));
        expect(builder.build("りゃ")).toEqual(expect.arrayContaining(["rya", "rilya", "rixya"]));
        expect(builder.build("りぃ")).toEqual(expect.arrayContaining(["ryi", "rili", "rixi"]));
        expect(builder.build("りゅ")).toEqual(expect.arrayContaining(["ryu", "rilyu", "rixyu"]));
        expect(builder.build("りぇ")).toEqual(expect.arrayContaining(["rye", "rile", "rixe"]));
        expect(builder.build("りょ")).toEqual(expect.arrayContaining(["ryo", "rilyo", "rixyo"]));
        expect(builder.build("ヴぁ")).toEqual(expect.arrayContaining(["va"]));
        expect(builder.build("ヴぃ")).toEqual(expect.arrayContaining(["vi"]));
        expect(builder.build("ヴ")).toEqual(expect.arrayContaining(["vu"]));
        expect(builder.build("ヴぇ")).toEqual(expect.arrayContaining(["ve"]));
        expect(builder.build("ヴぉ")).toEqual(expect.arrayContaining(["vo"]));
        expect(builder.build("ぁ")).toEqual(expect.arrayContaining(["xa", "la"]));
        expect(builder.build("ぃ")).toEqual(expect.arrayContaining(["xi", "li"]));
        expect(builder.build("ぅ")).toEqual(expect.arrayContaining(["xu", "lu"]));
        expect(builder.build("ぇ")).toEqual(expect.arrayContaining(["xe", "le"]));
        expect(builder.build("ぉ")).toEqual(expect.arrayContaining(["xo", "lo"]));
        expect(builder.build("ゃ")).toEqual(expect.arrayContaining(["xya", "lya"]));
        expect(builder.build("ゅ")).toEqual(expect.arrayContaining(["xyu", "lyu"]));
        expect(builder.build("ょ")).toEqual(expect.arrayContaining(["xyo", "lyo"]));
        expect(builder.build("っ")).toEqual(expect.arrayContaining(["xtu", "xtsu", "ltu", "ltsu"]));
        expect(builder.build("ゎ")).toEqual(expect.arrayContaining(["xwa", "lwa"]));
    })
})