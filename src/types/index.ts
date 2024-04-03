type Range = [number, number];

export interface RandomCharactersOptions {
  count?: number;
  levelRange?: Range;
  strokeCountRange?: Range;
}

export type GetRandomCharacters = (
  options: RandomCharactersOptions
) => string[];

export type GetCharactersByRange = (
  charactersObject: Record<string, string>,
  range?: Range
) => string[];

export type GetCharactersByLevels = (levelRange?: Range) => string[];

export type GetCharactersByStrokeCountRange = (
  strokeCountRange?: Range
) => string[];
