/*
 * node-error-handler
 * Copyright 2019-2021 Leonardo Furnielis.
 * Licensed under MIT License
 */

'use strcit';

const HttpStatus = require('./src/resources/HttpStatus');
const logging = require('./src/Logging');
const validation = require('./src/Validation');

/**
 * Express error handlers for JSON APIs in development and production environments.
 * @param {Object} [options]
 * @param {Boolean} options.log - If true all errors are printed with stderr. If function use custom fuction defined by user.
 * @param {Boolean|Function} options.debug - If true the stack trace is attached to output.
 * @param {Boolean} options.camel_case - If true the camelCase approach is used by error handler.
 * @return {VoidFunction}
 */
module.exports = (options = {}) => {
  const debug = options.debug || false;
  const log = options.log || false;
  const camelCase = options.camel_case || false;

  validation.isLog(log);

  // eslint-disable-next-line no-unused-vars
  return (err, req, res, next) => {
    const statusCode = validation.isHTTPCode(err.code) || 500;
    const code = statusCode;

    const errorHandler = {
      error: {
        code: HttpStatus[statusCode],
      },
    };

    if (camelCase === true) {
      errorHandler.error.statusCode = code;
    } else {
      errorHandler.error.status_code = code;
    }

    if (err.message && err.message !== '') {
      errorHandler.error.message = err.message;
    }

    if (debug) {
      errorHandler.error.stack = err.stack;
    }

    if (log && typeof log === 'boolean') {
      logging.error(errorHandler);
    } else if (log && typeof log === 'function') {
      log(err, errorHandler, req);
    }

    return res.status(statusCode).json(errorHandler);
  };
};
