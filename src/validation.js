/*
 * node-error-handler
 * Licensed under Apache-2.0 License
 */

'use strcit';

const http_status = require('./resources/http_status_code');

/**
 * Validate status_code defined by user.
 * @param {Number} code - The status_code defined by user.
 * @return {Number} - If valid status_code return code if invalid return undefined.
 */
const is_http_code = (code) => {
  code = Number(code);
  if (http_status[code]) {
    return code;
  }
  return undefined;
};

module.exports = {
  is_http_code,
};
