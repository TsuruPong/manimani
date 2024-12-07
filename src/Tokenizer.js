"use strict";

var Kuromoji = require("./lib/kuromoji");
var MoraBuilder = require("./mora/MoraBuilder");

/**
 * constructor
 */
function Tokenizer() {

}

/**
 * Tokenizes a given Japanese sentence and converts it into moras.
 * @param {string} dic
 * @param {string} sentence 
 * @param {Function} callback 
 */
Tokenizer.prototype.tokenize = function(dic, sentence, callback) {
    new Kuromoji().tokenize(dic, sentence, function(tokens) {
        const katakana = tokens.map(token => token.reading || token.surface_form).join("");
        const hiragana = katakana.replace(/[\u30a1-\u30f6]/g, function(match) {
            var chr = match.charCodeAt(0) - 0x60;
            return String.fromCharCode(chr);
        });
        var moras = new MoraBuilder().build(hiragana);
        callback(moras);
    })
}

module.exports = Tokenizer;