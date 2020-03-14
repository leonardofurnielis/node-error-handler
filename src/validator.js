/*
 * node-error-handler
 * Copyright 2019-2020 Leonardo Furnielis.
 * Licensed under MIT License
 */

'use strcit';

const dataBuilder = require('./data_builder');

module.exports = {
  isHttpStatusCode: code => {
    code = Number(code);
    if (dataBuilder[code]) {
      return code;
    }
    return undefined;
  },
  isValidLog: log => {
    if (Array.isArray(log)) {
      log.forEach(element => {
        if (typeof element !== 'function') {
          throw TypeError(`'log' value must be an 'array of functions'`);
        }
      });
    } else if (typeof log !== 'boolean' && typeof log !== 'function') {
      throw TypeError(`'log' value must be an 'array of functions', 'boolean' or 'function'`);
    }
  },
};
