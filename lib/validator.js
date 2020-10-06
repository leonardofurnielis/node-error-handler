/*
 * node-error-handler
 * Copyright 2019-2020 Leonardo Furnielis.
 * Licensed under MIT License
 */

'use strcit';

const data_builder = require('./data-builder');

const is_http_status_code = (code) => {
  code = Number(code);
  if (data_builder[code]) {
    return code;
  }
  return undefined;
};

const is_valid_log = (log) => {
  if (typeof log !== 'boolean' && typeof log !== 'function') {
    throw TypeError(`'log' value must be type 'boolean' or 'function'.`);
  }
};
module.exports = {
  is_http_status_code,
  is_valid_log,
};
