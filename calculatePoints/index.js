"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculatePoints = exports.getPointsPerCard = void 0;
var getPointsPerCard = function (card) {
    switch (card) {
        case "J":
        case "Q":
        case "K":
        case "T":
            return 10;
        default:
            return Number(card);
    }
};
exports.getPointsPerCard = getPointsPerCard;
var calculatePoints = function (hand) {
    var points = 0;
    var cardValues = hand.map(function (card) {
        var cardValue = card.split("-");
        return cardValue[0];
    });
    // check if there is an ace. if so remove
    var aces = cardValues.filter(function (card) { return card === "A"; });
    var nonAces = cardValues.filter(function (card) { return card !== "A"; });
    nonAces.forEach(function (card) {
        points += (0, exports.getPointsPerCard)(card);
    });
    if (aces.length > 0) {
        for (var i = 0; i < aces.length; i++) {
            if (points >= 11) {
                points += 1;
            }
            else {
                points += 11;
            }
        }
    }
    return points;
};
exports.calculatePoints = calculatePoints;
