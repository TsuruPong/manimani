var manimani = require("../src/manimani");

manimani.tokenize("柿の種", function(moras) {
    console.log(JSON.stringify(moras, null, 2))
});
