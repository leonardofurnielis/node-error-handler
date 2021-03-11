'use strict';

const validator = require('../lib/validator');

describe('is HTTP StatusCode', () => {
  test('When sent not valid code, should return undefined', () => {
    expect(validator.isHTTPStatusCode(600)).toBeUndefined();
  });

  test('When code=200, should return 200', () => {
    expect(validator.isHTTPStatusCode(200)).toEqual(200);
  });
});

describe('is Valid Log', () => {
  test('When params is not function or boolean, should return error', () => {
    expect(() => {
      validator.isValidLog('true');
    }).toThrow(TypeError);
  });
});
