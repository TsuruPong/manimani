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
    for (let i = 0; i < splited.length; i++) {
        var prev = splited[i - 1];
        var current = splited[i];
        var next = splited[i + 1];
        if (dic.kogaki.has(current)) {
            if (prev && !dic.kogaki.has(prev)) continue;
            hiraganas.push(current);
        } else {
            if (next && dic.kogaki.has(next) && kanaDic.XTU != next) {
                hiraganas.push(`${current}${next}`);
            } else {
                hiraganas.push(current)
            }
        }
    }
    return hiraganas;
}

module.exports = MoraBuilder;