import { expect } from 'chai';
import { getSong } from '../src/get-song';

describe('getSong', () => {
  it('should return the whole song correctly', () => {
    const song = getSong();
    const expectation = 'The Twelve Days of Christmas\n\n' +
      'On the first day of Christmas my true love sent to me\n' +
      'a Partridge in a Pear Tree.\n\n' +
      'On the second day of Christmas my true love sent to me\n' +
      'two Turtle Doves and\n' +
      'a Partridge in a Pear Tree.\n\n' +
      'On the third day of Christmas my true love sent to me\n' +
      'three French Hens,\n' +
      'two Turtle Doves and\n' +
      'a Partridge in a Pear Tree.\n\n' +
      'On the fourth day of Christmas my true love sent to me\n' +
      'four Calling Birds,\n' +
      'three French Hens,\n' +
      'two Turtle Doves and\n' +
      'a Partridge in a Pear Tree.\n\n' +
      'On the fifth day of Christmas my true love sent to me\n' +
      'five Golden Rings,\n' +
      'four Calling Birds,\n' +
      'three French Hens,\n' +
      'two Turtle Doves and\n' +
      'a Partridge in a Pear Tree.\n\n' +
      'On the sixth day of Christmas my true love sent to me\n' +
      'six Geese a-Laying,\n' +
      'five Golden Rings,\n' +
      'four Calling Birds,\n' +
      'three French Hens,\n' +
      'two Turtle Doves and\n' +
      'a Partridge in a Pear Tree.\n\n' +
      'On the seventh day of Christmas my true love sent to me\n' +
      'seven Swans a-Swimming,\n' +
      'six Geese a-Laying,\n' +
      'five Golden Rings,\n' +
      'four Calling Birds,\n' +
      'three French Hens,\n' +
      'two Turtle Doves and\n' +
      'a Partridge in a Pear Tree.\n\n' +
      'On the eighth day of Christmas my true love sent to me\n' +
      'eight Maids a-Milking,\n' +
      'seven Swans a-Swimming,\n' +
      'six Geese a-Laying,\n' +
      'five Golden Rings,\n' +
      'four Calling Birds,\n' +
      'three French Hens,\n' +
      'two Turtle Doves and\n' +
      'a Partridge in a Pear Tree.\n\n' +
      'On the ninth day of Christmas my true love sent to me\n' +
      'nine Ladies Dancing,\n' +
      'eight Maids a-Milking,\n' +
      'seven Swans a-Swimming,\n' +
      'six Geese a-Laying,\n' +
      'five Golden Rings,\n' +
      'four Calling Birds,\n' +
      'three French Hens,\n' +
      'two Turtle Doves and\n' +
      'a Partridge in a Pear Tree.\n\n' +
      'On the tenth day of Christmas my true love sent to me\n' +
      'ten Lords a-Leaping,\n' +
      'nine Ladies Dancing,\n' +
      'eight Maids a-Milking,\n' +
      'seven Swans a-Swimming,\n' +
      'six Geese a-Laying,\n' +
      'five Golden Rings,\n' +
      'four Calling Birds,\n' +
      'three French Hens,\n' +
      'two Turtle Doves and\n' +
      'a Partridge in a Pear Tree.\n\n' +
      'On the eleventh day of Christmas my true love sent to me\n' +
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
      'a Partridge in a Pear Tree.\n\n' +
      'On the twelfth day of Christmas my true love sent to me\n' +
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

    expect(song).to.equal(expectation);
  });
});
