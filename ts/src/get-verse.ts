// TODO: refactor
export function getVerse(day: number): string {
  if (day === 1) {
    return 'On the first day of Christmas my true love sent to me\n' +
      'a Partridge in a Pear Tree.';
  } else if (day === 2) {
    return 'On the second day of Christmas my true love sent to me\n' +
      'two Turtle Doves and\n' +
      'a Partridge in a Pear Tree.';
  } else if (day === 3) {
    return 'On the third day of Christmas my true love sent to me\n' +
      'three French Hens,\n' +
      'two Turtle Doves and\n' +
      'a Partridge in a Pear Tree.';
  } else if (day === 4) {
    return 'On the fourth day of Christmas my true love sent to me\n' +
      'four Calling Birds,\n' +
      'three French Hens,\n' +
      'two Turtle Doves and\n' +
      'a Partridge in a Pear Tree.';
  } else if (day === 5) {
    return 'On the fifth day of Christmas my true love sent to me\n' +
      'five Golden Rings,\n' +
      'four Calling Birds,\n' +
      'three French Hens,\n' +
      'two Turtle Doves and\n' +
      'a Partridge in a Pear Tree.';
  } else if (day === 6) {
    return 'On the sixth day of Christmas my true love sent to me\n' +
      'six Geese a-Laying,\n' +
      'five Golden Rings,\n' +
      'four Calling Birds,\n' +
      'three French Hens,\n' +
      'two Turtle Doves and\n' +
      'a Partridge in a Pear Tree.';
  } else if (day === 7) {
    return 'On the seventh day of Christmas my true love sent to me\n' +
      'seven Swans a-Swimming,\n' +
      'six Geese a-Laying,\n' +
      'five Golden Rings,\n' +
      'four Calling Birds,\n' +
      'three French Hens,\n' +
      'two Turtle Doves and\n' +
      'a Partridge in a Pear Tree.';
  } else if (day === 8) {
    return 'On the eighth day of Christmas my true love sent to me\n' +
      'eight Maids a-Milking,\n' +
      'seven Swans a-Swimming,\n' +
      'six Geese a-Laying,\n' +
      'five Golden Rings,\n' +
      'four Calling Birds,\n' +
      'three French Hens,\n' +
      'two Turtle Doves and\n' +
      'a Partridge in a Pear Tree.';
  } else if (day === 9) {
    return 'On the ninth day of Christmas my true love sent to me\n' +
      'nine Ladies Dancing,\n' +
      'eight Maids a-Milking,\n' +
      'seven Swans a-Swimming,\n' +
      'six Geese a-Laying,\n' +
      'five Golden Rings,\n' +
      'four Calling Birds,\n' +
      'three French Hens,\n' +
      'two Turtle Doves and\n' +
      'a Partridge in a Pear Tree.';
  } else if (day === 10) {
    return 'On the tenth day of Christmas my true love sent to me\n' +
      'ten Lords a-Leaping,\n' +
      'nine Ladies Dancing,\n' +
      'eight Maids a-Milking,\n' +
      'seven Swans a-Swimming,\n' +
      'six Geese a-Laying,\n' +
      'five Golden Rings,\n' +
      'four Calling Birds,\n' +
      'three French Hens,\n' +
      'two Turtle Doves and\n' +
      'a Partridge in a Pear Tree.';
  } else if (day === 11) {
    return 'On the eleventh day of Christmas my true love sent to me\n' +
      'eleven Pipers Piping,\n' +
      'ten Lords a-Leaping,\n' +
      'nine Ladies Dancing,\n' +
      'eight Maids a-Milking,\n' +
      'seven Swans a-Swimming,\n' +
      'six Geese a-Laying,\n' +
      'five Golden Rings,\n' +
      'four Calling Birds,\n' +
      'three French Hens,\n' +
      'two Turtle Doves and\n' +
      'a Partridge in a Pear Tree.';
  } else if (day === 12) {
    return 'On the twelfth day of Christmas my true love sent to me\n' +
      'twelve Drummers Drumming,\n' +
      'eleven Pipers Piping,\n' +
      'ten Lords a-Leaping,\n' +
      'nine Ladies Dancing,\n' +
      'eight Maids a-Milking,\n' +
      'seven Swans a-Swimming,\n' +
      'six Geese a-Laying,\n' +
      'five Golden Rings,\n' +
      'four Calling Birds,\n' +
      'three French Hens,\n' +
      'two Turtle Doves and\n' +
      'a Partridge in a Pear Tree.';
  } else {
    throw new Error('Please provide a day between 1 and 12. You provided ' + day + '.');
  }
}
