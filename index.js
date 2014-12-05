"use strict";

var calc = function(no){
    return no.length === 16 ? no.reduce(function(r, v, i){
        if(i % 2 === 0){
            v *= 2;
            if(v >= 10){
                v -= 9;
            }
        }
        return r + v;
    }, 0) % 10 === 0 : false
}

var parse = function(cardno){
    return cardno.
        replace(/\D/g, '').
        split('').
        map(function(v){ return parseInt(v) });
}

var validate = exports.validate = function(cardno){
    return calc(parse(cardno))
}

var reformat = exports.reformat = function(separate){
    return function(cardno){
        return parse(cardno).
            map(function(v){ return v.toString() }).
            map(function(v, i){ return i !== 15 && i % 4 === 3 ? v + separate : v }).
            join('');
    }
}

var type = exports.type = function(cardno){
    var card_types = [
          {
            name: 'amex',
            pattern: /^3[47]/,
          }, {
            name: 'diners_club_carte_blanche',
            pattern: /^30[0-5]/,
          }, {
            name: 'diners_club_international',
            pattern: /^36/,
          }, {
            name: 'jcb',
            pattern: /^35(2[89]|[3-8][0-9])/,
          }, {
            name: 'laser',
            pattern: /^(6304|670[69]|6771)/,
          }, {
            name: 'visa_electron',
            pattern: /^(4026|417500|4508|4844|491(3|7))/,
          }, {
            name: 'visa',
            pattern: /^4/,
          }, {
            name: 'mastercard',
            pattern: /^5[1-5]/,
          }, {
            name: 'maestro',
            pattern: /^(5018|5020|5038|6304|6759|676[1-3])/,
          }, {
            name: 'discover',
            pattern: /^(6011|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5]|64[4-9])|65)/,
          }
    ];
    return card_types.
        filter(function(v){ return reformat('')(cardno).match(v.pattern) }).
        map(function(v){ return v.name }).
        shift()
}

