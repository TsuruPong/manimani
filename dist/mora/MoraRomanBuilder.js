"use strict";

var KanaDictionaries = require("../dict/KanaDictionaries");
var dic = require("../dict/KanaRomanDictionaries");

function MoraRomanBuilder() {
    this.Arows = [KanaDictionaries.A, KanaDictionaries.I, KanaDictionaries.U, KanaDictionaries.E, KanaDictionaries.O];
    this.NArows = [KanaDictionaries.NA, KanaDictionaries.NI, KanaDictionaries.NU, KanaDictionaries.NE, KanaDictionaries.NO];
}

/**
 * Builds a list of Romanized representations based on the current and next kana.
 * @param {string} current 
 * @param {string} next 
 */
MoraRomanBuilder.prototype.build = function (current, next) {
    var romans = [];
    var kana = dic.KanaRomanDictionaries.get(current);

    if (!kana) {
        romans.push(toLowerCase(current));
    } else {
        romans = concat(kana.from, kana.boin, kana.shiins);
    
        if (kana.origin && kana.kogaki) {
            var youonOrigin = concat(kana.origin.from, kana.origin.boin, kana.origin.shiins);
            var youonKogaki = concat(kana.kogaki.from, kana.kogaki.boin, kana.kogaki.shiins)
            for (const origin of youonOrigin) {
                for (const kogaki of youonKogaki) {
                    romans.push(`${origin}${kogaki}`)
                }
            }
        }
    
        if (next) {
            if (KanaDictionaries.N == current) {
                if (!this.Arows.includes(next) && !this.NArows.includes(next) && next != KanaDictionaries.N) {
                    romans.push(kana.boin);
                }
            }
    
            if (KanaDictionaries.XTU == current) {
                var nextKana = dic.KanaRomanDictionaries.get(next);
                var shiins = nextKana.origin ? nextKana.origin.shiins : nextKana.shiins;
                var sliced = shiins.map(s => s.slice(0, 1));
                for (const s of sliced) {
                    if (next == "ん" && s == "n") continue;
                    if (!romans.includes(s)) {
                        romans.push(s);
                    }
                }
            }
        }
    }

    return romans;
}

/**
 * Concatenates boin and shiins to generate Romanized representations.
 * @param {string} kana
 * @param {string} boin 
 * @param {string[]} shiins 
 * @returns 
 */
function concat(kana, boin, shiins) {
    var arows = [KanaDictionaries.A, KanaDictionaries.I, KanaDictionaries.U, KanaDictionaries.E, KanaDictionaries.O];
    var rr = [];
    shiins.map(shiin => rr.push(`${shiin}${boin}`));
    if (arows.includes(kana)) {
        rr.push(boin);
    }
    return rr;
}

/**
 * Converts the specified string from full-width to half-width characters.
 * It also converts specific Japanese punctuation marks to their corresponding symbols.
 * 
 * @param {string} symbol - The string to be converted.
 * @returns {string} - The converted string.
 */
function toLowerCase(symbol) {
    if (symbol == "　") return " ";
    if (symbol == "、") return ",";
    if (symbol == "。") return ".";
    if (symbol == "「") return "\"";
    if (symbol == "」") return "\"";
    if (symbol == "ー") return "-";
    return symbol.replace(/[\u3000-\uFF5E]/g, (s) => {
        var code  = s.charCodeAt(0);
        return code >= 0xFF01 && code <= 0xFF5E
            ? String.fromCharCode(code - 0xFEE0)
            : char;
    })
}

module.exports = MoraRomanBuilder;