/*
 * node-error-handler
 * Copyright 2019-2020 Leonardo Furnielis.
 * Licensed under MIT License
 */

'use strcit';

const dataBuilder = require('./data-builder');

const isHTTPStatusCode = (code) => {
  code = Number(code);
  if (dataBuilder[code]) {
    return code;
  }
  return undefined;
};

const isValidLog = (log) => {
  if (typeof log !== 'boolean' && typeof log !== 'function') {
    throw TypeError(`'log' value must be type 'boolean' or 'function'.`);
  }
};
module.exports = {
  isHTTPStatusCode,
  isValidLog,
};
