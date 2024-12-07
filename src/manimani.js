"use strict"

var Tokenizer = require("./Tokenizer");

var manimani = {
    tokenize: function(dic, sentence, callback) {
        var tokenizer = new Tokenizer();
        tokenizer.tokenize(dic, sentence, function(moras) {
            callback(moras);
        });
    }
};

module.exports = manimani;