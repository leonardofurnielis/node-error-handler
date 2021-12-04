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
 * @param {Boolean|Function} options.log - If true all errors are printed with stderr. If function use custom fuction defined by user.
 * @param {Boolean} options.trace - If true the trace is attached to output.
 * @param {Boolean} options.camel_case - If true the camelCase approach is used by error handler.
 * @return {VoidFunction}
 */
module.exports = (options = {}) => {
  const trace = options.trace || false;
  const log = options.log || false;
  const camelCase = options.camel_case || false;

  validation.isLog(log);

  // eslint-disable-next-line no-unused-vars
  return (err, req, res, next) => {
    const code = validation.isHTTPCode(err.code) || 500;

    const errorHandler = {
      error: {
        code: HttpStatus[code],
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

    if (trace) {
      errorHandler.error.trace = err.stack;
    }

    if (log && typeof log === 'boolean') {
      logging.error(errorHandler);
    } else if (log && typeof log === 'function') {
      log(err, errorHandler, req);
    }

    return res.status(code).json(errorHandler);
  };
};
