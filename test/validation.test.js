'use strict';

const validation = require('../src/validation');

describe('isHTTPCode()', () => {
  test('When sent invalid code, it should return undefined', () => {
    expect(validation.is_http_code(600)).toBeUndefined();
  });

  test('When code 200, it should return 200', () => {
    expect(validation.is_http_code(200)).toBe(200);
  });
});
