'use strict';

const validator = require('../src/validator');

describe('isHttpStatusCode validator', () => {
  test('Should return undefined, using not valid http code', () => {
    expect(validator.isHttpStatusCode(600)).toEqual(undefined);
  });

  test('Should return 200 when send err.code 200', () => {
    expect(validator.isHttpStatusCode(200)).toEqual(200);
  });
});

describe('isValidLog Validator', () => {
  test('Should return error when params is not an array of functions', () => {
    expect(() => {
      validator.isValidLog([123]);
    }).toThrow(TypeError);
  });

  test('Should return error when params is not function or boolean', () => {
    expect(() => {
      validator.isValidLog('true');
    }).toThrow(TypeError);
  });
});
