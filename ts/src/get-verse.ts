const daysAndPresents: { [day: number]: { numeral: string, present: string } } = {
  1: { numeral: 'first', present: 'a Partridge in a Pear Tree' },
  2: { numeral: 'second', present: 'two Turtle Doves' },
  3: { numeral: 'third', present: 'three French Hens' },
  4: { numeral: 'fourth', present: 'four Calling Birds' },
  5: { numeral: 'fifth', present: 'five Golden Rings' },
  6: { numeral: 'sixth', present: 'six Geese a-Laying' },
  7: { numeral: 'seventh', present: 'seven Swans a-Swimming' },
  8: { numeral: 'eighth', present: 'eight Maids a-Milking' },
  9: { numeral: 'ninth', present: 'nine Ladies Dancing' },
  10: { numeral: 'tenth', present: 'ten Lords a-Leaping' },
  11: { numeral: 'eleventh', present: 'eleven Pipers Piping' },
  12: { numeral: 'twelfth', present: 'twelve Drummers Drumming' },
};

export function getVerse(day: number): string {
  if (typeof day !== 'number' || day < 1 || day > 12) {
    throw new Error('Please provide a day between 1 and 12. You provided ' + day + '.');
  }

  const firstLine = `On the ${daysAndPresents[day].numeral} day of Christmas my true love sent to me\n`;

  const dayLines = new Array<number>(day - 1)
    .fill(0)
    .map((_, index) => day - index)
    .map((d) => daysAndPresents[d].present)
    .join(',\n');

  const middleLines = day !== 1
    ? `${dayLines} and\n`
    : '';

  return `${firstLine}${middleLines}${daysAndPresents[1].present}.`;
}
