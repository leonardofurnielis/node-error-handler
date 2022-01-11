'use strict';

const validation = require('../src/validation');

describe('isHTTPCode()', () => {
  test('When sent not valid code, should return undefined', () => {
    expect(validation.isHTTPCode(600)).toBeUndefined();
  });

  test('When code=200, should return 200', () => {
    expect(validation.isHTTPCode(200)).toBe(200);
  });
});

describe('isLog()', () => {
  test('When params is not function or boolean, should return error', () => {
    expect(() => {
      validation.isLog('true');
    }).toThrow(TypeError);
  });
});
