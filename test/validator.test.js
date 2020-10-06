'use strict';

const validator = require('../lib/validator');

describe('is_http_status_code validator', () => {
  test('Should return undefined, using not valid http code', () => {
    expect(validator.is_http_status_code(600)).toEqual(undefined);
  });

  test('Should return 200 when send err.code 200', () => {
    expect(validator.is_http_status_code(200)).toEqual(200);
  });
});

describe('is_valid_log Validator', () => {
  test('Should return error when params is not an array of functions', () => {
    expect(() => {
      validator.is_valid_log([123]);
    }).toThrow(TypeError);
  });

  test('Should return error when params is not function or boolean', () => {
    expect(() => {
      validator.is_valid_log('true');
    }).toThrow(TypeError);
  });
});
