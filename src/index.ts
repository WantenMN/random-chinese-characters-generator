import { levelsCharacters, strokeCountCharacters } from "./characters";
import { getRandomElement } from "./lib/utils";
import { GetCharactersByRange, GetRandomCharacters } from "./types/index";

const getRandomCharacters: GetRandomCharacters = (options = {}) => {
  const { count, levelRange, strokeCountRange } = options;

  const charactersByLevels = getCharactersByRange(levelsCharacters, levelRange);
  const charactersByStrokeCounts = getCharactersByRange(
    strokeCountCharacters,
    strokeCountRange
  );

  const intersection = charactersByLevels.filter((character) =>
    charactersByStrokeCounts.includes(character)
  );

  if (count === undefined) {
    return [getRandomElement(intersection)];
  }

  const characters = [];
  const maxLength = Math.min(count, intersection.length);

  for (let i = 0; i < maxLength; i++) {
    const randomIndex = Math.floor(Math.random() * intersection.length);
    characters.push(intersection.splice(randomIndex, 1)[0]);
  }

  return characters;
};

const getCharactersByRange: GetCharactersByRange = (
  charactersObject,
  range
) => {
  if (!range) {
    return Object.values(charactersObject).flatMap((value) => value.split(""));
  }

  const characters: string[] = [];
  const [minValue, maxValue] = range.sort((a, b) => a - b);

  Object.entries(charactersObject)
    .filter(([key]) => {
      const value = parseInt(key);
      return value >= minValue && value <= maxValue;
    })
    .map(([, value]) => {
      characters.push(...value.split(""));
    });

  return characters;
};

export default getRandomCharacters;
export { getRandomCharacters };
