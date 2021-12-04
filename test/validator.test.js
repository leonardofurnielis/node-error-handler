'use strict';

const validator = require('../lib/validator');

describe('isHTTPCode()', () => {
  test('When sent not valid code, should return undefined', () => {
    expect(validator.isHTTPCode(600)).toBeUndefined();
  });

  test('When code=200, should return 200', () => {
    expect(validator.isHTTPCode(200)).toBe(200);
  });
});

describe('isLog()', () => {
  test('When params is not function or boolean, should return error', () => {
    expect(() => {
      validator.isLog('true');
    }).toThrow(TypeError);
  });
});
