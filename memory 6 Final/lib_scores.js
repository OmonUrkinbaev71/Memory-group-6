"use strict";
var gamesApp = gamesApp || {};

gamesApp.scores = {
    score: function(count){
        const inc = count == 0 ? count+1 : count+1;
        return inc;
    }
}
