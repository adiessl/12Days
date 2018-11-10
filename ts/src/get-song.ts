import { getVerse } from './get-verse';

export function getSong(): string {
  const verses = new Array(12)
    .fill(0)
    .map((_, index) => index + 1)
    .map((day) => getVerse(day))
    .join('\n\n');

  return `The Twelve Days of Christmas\n\n${verses}`;
}
