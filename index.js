"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var createDeck_1 = require("./createDeck");
var randomiseArray_1 = require("./randomiseArray");
var calculatePoints_1 = require("./calculatePoints");
var dealCards_1 = require("./dealCards");
// 1. create the deck ✅
var deck = (0, createDeck_1.createDeck)();
console.log({ deck: deck });
// 2. shuffle deck ✅
var shuffledDeck = (0, randomiseArray_1.randomiseArray)(deck);
console.log({ shuffledDeck: shuffledDeck });
// 3. Deal n cards and mutate the array ✅
var dealtCards = (0, dealCards_1.dealCards)(deck, 3);
console.log({ dealtCards: dealtCards });
// 4. work out the number of points for a hand ✅
var points = (0, calculatePoints_1.calculatePoints)((0, dealCards_1.dealCards)(deck, 3));
console.log({ points: points });
