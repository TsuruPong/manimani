"use strict"

var Tokenizer = require("./Tokenizer");

var manimani = {
    tokenize: function(sentence, callback) {
        var tokenizer = new Tokenizer();
        tokenizer.tokenize(sentence, function(moras) {
            callback(moras);
        });
    }
};

module.exports = manimani;