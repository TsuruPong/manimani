"use strict";

var KanaDictionaries = require("../dict/KanaDictionaries");
var dic = require("../dict/KanaRomanDictionaries");

function MoraRomanBuilder() {
    this.NArows = [KanaDictionaries.NA, KanaDictionaries.NI, KanaDictionaries.NU, KanaDictionaries.NE, KanaDictionaries.NO]
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
        romans.push(current.toLocaleLowerCase());
    } else {
        romans = this.concat(kana.boin, kana.shiins);
    
        if (kana.origin && kana.kogaki) {
            var youonOrigin = this.concat(kana.origin.boin, kana.origin.shiins);
            var youonKogaki = this.concat(kana.kogaki.boin, kana.kogaki.shiins)
            for (const origin of youonOrigin) {
                for (const kogaki of youonKogaki) {
                    romans.push(`${origin}${kogaki}`)
                }
            }
        }
    
        if (next) {
            if (KanaDictionaries.N == current) {
                if (!this.NArows.includes(next)) {
                    romans.push(kana.boin);
                }
            }
    
            if (KanaDictionaries.XTU == current) {
                var nextKana = dic.KanaRomanDictionaries.get(next);
                var shiins = nextKana.origin ? nextKana.origin.shiins.map(v => v.slice(0, 1)) : nextKana.shiins;
                romans = [...romans, ...shiins];
            }
        }
    }

    return romans;
}

/**
 * Concatenates boin and shiins to generate Romanized representations.
 * @param {string[]} romans 
 * @param {string} boin 
 * @param {string[]} shiins 
 * @returns 
 */
MoraRomanBuilder.prototype.concat = function (boin, shiins) {
    var rr = [];
    if (shiins.length == 0) {
        rr.push(boin);
    } else{ 
        shiins.map(shiin => rr.push(`${shiin}${boin}`));
    }
    return rr;
}

module.exports = MoraRomanBuilder;