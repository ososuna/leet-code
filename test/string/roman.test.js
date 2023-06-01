const romanToInt = require('../../src/string/roman');

test('convert III to 3', () => {
  expect(romanToInt('III')).toBe(3);
});

test('convert IX to 9', () => {
  expect(romanToInt('IX')).toBe(9);
});

test('convert LVIII to 58', () => {
  expect(romanToInt('LVIII')).toBe(58);
});

test('convert MCMXCIV to 1994', () => {
  expect(romanToInt('MCMXCIV')).toBe(1994);
});

test('convert CDXLIV to 444', () => {
  expect(romanToInt('CDXLIV')).toBe(444);
});
