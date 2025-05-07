// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

describe('isPhoneNumber', () => {
  test('valid: (123) 456-7890', () => {
    expect(isPhoneNumber('(123) 456-7890')).toBe(true);
  });
  test('valid: 123-456-7890', () => {
    expect(isPhoneNumber('123-456-7890')).toBe(true);
  });
  test('invalid: 1234567890', () => {
    expect(isPhoneNumber('1234567890')).toBe(false);
  });
  test('invalid: abc-def-ghij', () => {
    expect(isPhoneNumber('abc-def-ghij')).toBe(false);
  });
});

describe('isEmail', () => {
  test('valid: test@example.com', () => {
    expect(isEmail('test@example.com')).toBe(true);
  });
  test('valid: user_1@abc.co', () => {
    expect(isEmail('user_1@abc.co')).toBe(true);
  });
  test('invalid: test@.com', () => {
    expect(isEmail('test@.com')).toBe(false);
  });
  test('invalid: test.com', () => {
    expect(isEmail('test.com')).toBe(false);
  });
});

describe('isStrongPassword', () => {
  test('valid: Abcd1234', () => {
    expect(isStrongPassword('Abcd1234')).toBe(true);
  });
  test('valid: a_1234', () => {
    expect(isStrongPassword('a_1234')).toBe(true);
  });
  test('invalid: 1234abcd', () => {
    expect(isStrongPassword('1234abcd')).toBe(false);
  });
  test('invalid: ab', () => {
    expect(isStrongPassword('ab')).toBe(false);
  });
});

describe('isDate', () => {
  test('valid: 1/1/2020', () => {
    expect(isDate('1/1/2020')).toBe(true);
  });
  test('valid: 12/31/1999', () => {
    expect(isDate('12/31/1999')).toBe(true);
  });
  test('invalid: 2020/1/1', () => {
    expect(isDate('2020/1/1')).toBe(false);
  });
  test('invalid: 1-1-2020', () => {
    expect(isDate('1-1-2020')).toBe(false);
  });
});

describe('isHexColor', () => {
  test('valid: #fff', () => {
    expect(isHexColor('#fff')).toBe(true);
  });
  test('valid: 123ABC', () => {
    expect(isHexColor('123ABC')).toBe(true);
  });
  test('invalid: #ffff', () => {
    expect(isHexColor('#ffff')).toBe(false);
  });
  test('invalid: gg1122', () => {
    expect(isHexColor('gg1122')).toBe(false);
  });
});
