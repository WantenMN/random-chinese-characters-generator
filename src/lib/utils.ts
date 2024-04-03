import { GetRandomElement } from "../types/lib/utils";

export const getRandomElement: GetRandomElement = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

export const splitCharacters = (value: string): string[] => {
  const characters: string[] = [];
  let index = 0;
  while (index < value.length) {
    const char = value.charAt(index);
    // Check if it's a high surrogate and there's a next character
    if (
      /[\uD800-\uDBFF]/.test(char) &&
      /[\uDC00-\uDFFF]/.test(value.charAt(index + 1))
    ) {
      characters.push(value.substr(index, 2)); // Push the surrogate pair
      index += 2; // Move to the next character
    } else {
      // It's either a regular character or an isolated high surrogate
      characters.push(char);
      index++;
    }
  }
  return characters;
};
