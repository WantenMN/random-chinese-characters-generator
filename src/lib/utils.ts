import { GetRandomElement } from "../types/lib/utils";

export const getRandomElement: GetRandomElement = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};
