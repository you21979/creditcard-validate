"use strict";

var validate = exports.validate = function(no){
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

var parser = exports.parser = function(cardno){
    return cardno.
        replace(/ /g, '').
        replace(/-/g, '').
        split('').
        map(function(v){ return parseInt(v) });
}
