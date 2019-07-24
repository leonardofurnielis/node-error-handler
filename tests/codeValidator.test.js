'use strict';

const codeValidator = require('../src/codeValidator');

describe('Validate code from err.code', () => {
  test('Should return undefined, using not valid http code', () => {
    expect(codeValidator(600)).toEqual(undefined);
  });

  test('Should return 200 when send err.code 200', () => {
    expect(codeValidator(200)).toEqual(200);
  });
});
