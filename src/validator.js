/*
 * node-error-handler
 * Copyright 2019-2020 Leonardo Furnielis.
 * Licensed under MIT License
 */

'use strcit';

const dataBuilder = require('./data_builder');

module.exports = {
  isHttpStatusCode: (code) => {
    code = Number(code);
    if (dataBuilder[code]) {
      return code;
    }
    return undefined;
  },
  isValidLog: (log) => {
    if (typeof log !== 'boolean' && typeof log !== 'function') {
      throw TypeError(`'log' value must be type 'boolean' or 'function'.`);
    }
  },
};
