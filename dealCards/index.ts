export const dealCards = (array: string[], cardCount: number) => {
  // returns array of n cards

  return array.splice(0, cardCount);
};
