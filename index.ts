import { createDeck } from "./createDeck";
import { randomiseArray } from "./randomiseArray";
import { calculatePoints } from "./calculatePoints";
import { dealCards } from "./dealCards";
// 1. create the deck ✅
const deck = createDeck();
console.log({ deck });

// 2. shuffle deck ✅
const shuffledDeck = randomiseArray(deck);
console.log({ shuffledDeck });

// 3. Deal n cards and mutate the array ✅
const dealtCards = dealCards(deck, 3);
console.log({ dealtCards });

// 4. work out the number of points for a hand ✅
const points = calculatePoints(dealCards(deck, 3));
console.log({ points });
