var manimani = require("../src/manimani");

manimani.tokenize("隣の客はよく柿食う客だ", function(moras) {
    console.log(JSON.stringify(moras, null, 2))
});
