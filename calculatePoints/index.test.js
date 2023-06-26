import { dealCards } from "../dealCards";
import { createDeck } from "../createDeck";
import { calculatePoints } from ".";

test("Calculate Points from hands", () => {
  const deck = createDeck();
  expect(deck).toHaveLength(52);

  const dealtCards = dealCards(deck, 3);

  const points1 = calculatePoints(dealtCards);
  expect(points1).toEqual(16);

  const testValue1 = ["A-C", "2-S"];
  expect(calculatePoints(testValue1)).toEqual(13);
  const testValue2 = ["5-D", "T-H"]; // = 15
  expect(calculatePoints(testValue2)).toEqual(15);
  const testValue3 = ["A-H", "A-S"]; // = 12
  expect(calculatePoints(testValue3)).toEqual(12);
  const testValue4 = ["A-C", "7-S", "9-C"]; // = 17
  expect(calculatePoints(testValue4)).toEqual(17);
});
