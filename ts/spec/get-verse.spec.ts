import { expect } from 'chai';

import { getVerse } from '../src/get-verse';

describe('getVerse', () => {
  it('should return the correct verse for the first day', () => {
    expect(getVerse(1)).to.equal('On the first day of Christmas my true love sent to me\n' +
      'a Partridge in a Pear Tree.');
  });

  it('should return the correct verse for the second day', () => {
    expect(getVerse(2)).to.equal('On the second day of Christmas my true love sent to me\n' +
      'two Turtle Doves and\n' +
      'a Partridge in a Pear Tree.');
  });

  it('should return the correct verse for the third day', () => {
    expect(getVerse(3)).to.equal('On the third day of Christmas my true love sent to me\n' +
      'three French Hens,\n' +
      'two Turtle Doves and\n' +
      'a Partridge in a Pear Tree.');
  });

  it('should return the correct verse for the fourth day', () => {
    expect(getVerse(4)).to.equal('On the fourth day of Christmas my true love sent to me\n' +
      'four Calling Birds,\n' +
      'three French Hens,\n' +
      'two Turtle Doves and\n' +
      'a Partridge in a Pear Tree.');
  });

  it('should return the correct verse for the fifth day', () => {
    expect(getVerse(5)).to.equal('On the fifth day of Christmas my true love sent to me\n' +
      'five Golden Rings,\n' +
      'four Calling Birds,\n' +
      'three French Hens,\n' +
      'two Turtle Doves and\n' +
      'a Partridge in a Pear Tree.');
  });

  it('should return the correct verse for the sixth day', () => {
    expect(getVerse(6)).to.equal('On the sixth day of Christmas my true love sent to me\n' +
      'six Geese a-Laying,\n' +
      'five Golden Rings,\n' +
      'four Calling Birds,\n' +
      'three French Hens,\n' +
      'two Turtle Doves and\n' +
      'a Partridge in a Pear Tree.');
  });

  it('should return the correct verse for the seventh day', () => {
    expect(getVerse(7)).to.equal('On the seventh day of Christmas my true love sent to me\n' +
      'seven Swans a-Swimming,\n' +
      'six Geese a-Laying,\n' +
      'five Golden Rings,\n' +
      'four Calling Birds,\n' +
      'three French Hens,\n' +
      'two Turtle Doves and\n' +
      'a Partridge in a Pear Tree.');
  });

  it('should return the correct verse for the eighth day', () => {
    expect(getVerse(8)).to.equal('On the eighth day of Christmas my true love sent to me\n' +
      'eight Maids a-Milking,\n' +
      'seven Swans a-Swimming,\n' +
      'six Geese a-Laying,\n' +
      'five Golden Rings,\n' +
      'four Calling Birds,\n' +
      'three French Hens,\n' +
      'two Turtle Doves and\n' +
      'a Partridge in a Pear Tree.');
  });

  it('should return the correct verse for the ninth day', () => {
    expect(getVerse(9)).to.equal('On the ninth day of Christmas my true love sent to me\n' +
      'nine Ladies Dancing,\n' +
      'eight Maids a-Milking,\n' +
      'seven Swans a-Swimming,\n' +
      'six Geese a-Laying,\n' +
      'five Golden Rings,\n' +
      'four Calling Birds,\n' +
      'three French Hens,\n' +
      'two Turtle Doves and\n' +
      'a Partridge in a Pear Tree.');
  });

  it('should return the correct verse for the tenth day', () => {
    expect(getVerse(10)).to.equal('On the tenth day of Christmas my true love sent to me\n' +
      'ten Lords a-Leaping,\n' +
      'nine Ladies Dancing,\n' +
      'eight Maids a-Milking,\n' +
      'seven Swans a-Swimming,\n' +
      'six Geese a-Laying,\n' +
      'five Golden Rings,\n' +
      'four Calling Birds,\n' +
      'three French Hens,\n' +
      'two Turtle Doves and\n' +
      'a Partridge in a Pear Tree.');
  });

  it('should return the correct verse for the eleventh day', () => {
    expect(getVerse(11)).to.equal('On the eleventh day of Christmas my true love sent to me\n' +
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
      'a Partridge in a Pear Tree.');
  });

  it('should return the correct verse for the twelfth day', () => {
    expect(getVerse(12)).to.equal('On the twelfth day of Christmas my true love sent to me\n' +
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
      'a Partridge in a Pear Tree.');
  });

  it('should throw an error if the day is not between one and twelve', () => {
    expect(() => getVerse(13)).to.throw(Error, 'Please provide a day between 1 and 12. You provided 13.');
  });
});
