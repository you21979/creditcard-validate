var cardno = require('./');

var main = function(){
    var cards = [
        "4452-5113-2004-3046",
        "4425 5113 2004 3046",
        "4451 5113 2004 3046"
    ];
    console.log(cards.map(cardno.parser).map(cardno.validate))
}
main();
