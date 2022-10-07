/*
 * node-error-handler
 * Licensed under Apache-2.0 License
 */

'use strcit';

const httpStatus = require('./resources/http-status-code');

/**
 * Validate status_code defined by user.
 * @param {Number} code - The status_code defined by user.
 * @return {Number} - If valid status_code return code if invalid return undefined.
 */
const isHTTPCode = (code) => {
  code = Number(code);
  if (httpStatus[code]) {
    return code;
  }
  return undefined;
};

module.exports = {
  isHTTPCode,
};
