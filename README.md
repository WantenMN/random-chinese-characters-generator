# Random Chinese Characters Generator

A simple package to generate random Chinese characters based on various criteria.

## Installation

```bash
npm install random-chinese-characters-generator

yarn add random-chinese-characters-generator

pnpm add random-chinese-characters-generator
```

## Usage

```javascript
import getRandomCharacters from "random-chinese-characters-generator";

// Get a random character
const randomCharacter = getRandomCharacters();

// Get 10 random characters
const tenRandomCharacters = getRandomCharacters({ count: 10 });

// Get characters within a level range
const charactersInLevelRange = getRandomCharacters({ levelRange: [1, 3] });

// Get characters within a stroke count range
const charactersInStrokeCountRange = getRandomCharacters({
  strokeCountRange: [5, 10],
});

// Get characters within a level range and stroke count range
const charactersWithinRanges = getRandomCharacters({
  levelRange: [1, 3],
  strokeCountRange: [5, 10],
});
```

If `count` is missing, it will return one random character.

If `levelRange` is missing, it may use characters from all levels.

If `strokeCountRange` is missing, it will use characters with any stroke count.

To specify a single level, use the same number for both ends of the range: levelRange: [3, 3].

To specify a single stroke count, use the same number for both ends of the range: strokeCountRange: [8, 8].

## API

### `getRandomCharacters(options?: RandomCharactersOptions): string[]`

Returns an array of random Chinese characters based on the provided options.

#### `RandomCharactersOptions`

- `count?: number`: The number of random characters to generate.
- `levelRange?: [number, number]`: The range of levels to include in the generated characters. The current available level range is from 1 to 3.
- `strokeCountRange?: [number, number]`: The range of stroke counts to include in the generated characters. The current available stroke count range is from 1 to 36.

## Level Descriptions

- Level 1 (一级字表): Consists of commonly used characters, with a collection of 3500 characters, primarily meeting the basic needs of education and cultural dissemination.
- Level 2 (二级字表): Contains 3000 characters, slightly less common than Level 1 characters. The combined Level 1 and Level 2 lists comprise 6500 characters, catering to general usage in publishing, dictionary compilation, and information processing.
- Level 3 (三级字表): Includes 1605 characters, featuring surnames, place names, scientific and technical terms, and less commonly used characters in primary and secondary school Chinese textbooks. These characters address the specialized needs of the information age and areas closely related to public life.

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

## Data Source

This package uses character data from the source [通用规范汉字表 (Wikisource)](https://zh.wikisource.org/wiki/%E9%80%9A%E7%94%A8%E8%A7%84%E8%8C%83%E6%B1%89%E5%AD%97%E8%A1%A8).

## License

This project is licensed under the [MIT License](LICENSE).
