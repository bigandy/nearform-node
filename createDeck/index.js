"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDeck = void 0;
// create deck of 52 cards
var createDeck = function () {
    var deck = [];
    var suites = ["H", "C", "D", "S"];
    var values = ["A", 2, 3, 4, 5, 6, 7, 8, 9, "T", "J", "Q", "K"];
    suites.forEach(function (suite) {
        values.forEach(function (value) {
            var combined = "".concat(value, "-").concat(suite);
            deck.push(combined);
        });
    });
    return deck;
};
exports.createDeck = createDeck;
