import { getVerse } from './get-verse';

// TODO: refactor
export function getSong(): string {
  let song = 'The Twelve Days of Christmas';
  song += '\n\n';
  song += getVerse(1);
  song += '\n\n';
  song += getVerse(2);
  song += '\n\n';
  song += getVerse(3);
  song += '\n\n';
  song += getVerse(4);
  song += '\n\n';
  song += getVerse(5);
  song += '\n\n';
  song += getVerse(6);
  song += '\n\n';
  song += getVerse(7);
  song += '\n\n';
  song += getVerse(8);
  song += '\n\n';
  song += getVerse(9);
  song += '\n\n';
  song += getVerse(10);
  song += '\n\n';
  song += getVerse(11);
  song += '\n\n';
  song += getVerse(12);

  return song;
}
