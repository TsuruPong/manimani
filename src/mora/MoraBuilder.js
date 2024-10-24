"use strict";

var dic = require("../dict/KanaRomanDictionaries");
var kanaDic = require("../dict/KanaDictionaries");
var MoraLattice = require("./MoraLattice");
var MoraNodeBuilder = require("./MoraNodeBuilder");
var MoraRomanBuilder = require("./MoraRomanBuilder");

/**
 * constructor
 */
function MoraBuilder() {
    this.nodeBuilder = new MoraNodeBuilder();
    this.romanBuilder = new MoraRomanBuilder();
}

/**
 * Builds a list of MoraLattice objects from a given hiragana string.
 * @param {string} hiragana 
 * @returns {MoraLattice[]} moras
 */
MoraBuilder.prototype.build = function(hiragana) {
    var hiraganas = splitHiragana(hiragana);
    var moras = [];
    for (let i = 0; i < hiraganas.length; i++) {
        const romans = this.romanBuilder.build(hiraganas[i], hiraganas[i + 1]);
        const nodes = this.nodeBuilder.build(romans);
        const mora = new MoraLattice(hiraganas[i], i, nodes);
        moras.push(mora);
    }

    return moras;
}

/**
 * Splits a hiragana string into its components, handling special cases.
 * @param {string} hiragana 
 * @returns {string[]} hiraganas
 */
function splitHiragana(hiragana) {
    var hiraganas = [];
    var splited = [...hiragana];
    var skip = false;
    for (let i = 0; i < splited.length; i++) {
        var current = splited[i];
        if ((dic.kogaki.has(current) && kanaDic.XTU != current) && skip) {
            skip = false;
            continue;
        }
        if (i + 1 < splited.length) {
            const next = splited[i + 1];
            if ((dic.kogaki.has(current) && kanaDic.XTU != current)) {
                hiraganas.push(`${current}${next}`);
                skip = true;
                continue;
            }
        }
        hiraganas.push(current);
    }
    return hiraganas;
}

module.exports = MoraBuilder;