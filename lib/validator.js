/*
 * node-error-handler
 * Copyright 2019-2020 Leonardo Furnielis.
 * Licensed under MIT License
 */

'use strcit';

const dataBuilder = require('./data-builder');

/**
 * Validate status_code defined by user.
 * @param {Number} code - The status_code defined by user.
 * @returns {Number} - If valid status_code return code if invalid return undefined.
 */
const isHTTPCode = (code) => {
  code = Number(code);
  if (dataBuilder[code]) {
    return code;
  }
  return undefined;
};

/**
 * Validate user log param.
 * @param {Boolean|Function} log - The log param defined by user.
 */
const isLog = (log) => {
  if (typeof log !== 'boolean' && typeof log !== 'function') {
    throw TypeError(`'log' value must be type 'boolean' or 'function'.`);
  }
};
module.exports = {
  isHTTPCode,
  isLog,
};
