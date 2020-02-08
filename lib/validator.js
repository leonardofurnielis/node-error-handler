/*
 * node-error-handler
 * Copyright 2019-2020 Leonardo Furnielis.
 * Licensed under MIT License
 */

'use strcit';

const status = require('./data-builder');

module.exports = {
  isHttpStatusCode: code => {
    code = Number(code);
    if (status[code]) {
      return code;
    }
    return undefined;
  },
  isArrayOfFunctions: arr => {
    if (Array.isArray(arr)) {
      arr.forEach(element => {
        if (typeof element !== 'function') {
          throw TypeError(`Logs should be an 'Array of Functions' or 'boolean'`);
        }
      });
    } else {
      throw TypeError(`Logs should be an 'Array of Functions' or 'boolean'`);
    }
  },
};
