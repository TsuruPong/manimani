"use strict";

const kuromoji = require("kuromoji");

/**
 * constructor
 */
function Kuromoji() {

}

/**
 * Tokenizes a given Japanese sentence into tokens.
 * @param {string} dic
 * @param {string} sentence 
 * @returns {string} tokenized
 */
Kuromoji.prototype.tokenize = function(dic, sentence, callback) {
    kuromoji.builder({ dicPath: dic }).build((err, tokenizer) => {
        if (err) {
            console.error(err);
            return;
        }
        const tokens = tokenizer.tokenize(sentence);
        callback(tokens)
    });
}

module.exports = Kuromoji;