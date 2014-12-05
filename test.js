var cardno = require('./');

var main = function(){
    var cards = [
        "4a00 0000 0000 0002",
        "4000 0000 0000 0002",
        "6011 0000 0000 0004",
        "6011+0000 0000 0004",
        "4452-5113-2004-3046",
        "4425 5113 2004 3046",
        "4451 5113 2004 3046"
    ];
    console.log(cards.filter(cardno.validate).map(cardno.reformat(' ')).map(cardno.type))
}
main();
