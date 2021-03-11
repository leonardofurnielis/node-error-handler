/*
 * node-error-handler
 * Copyright 2019-2020 Leonardo Furnielis.
 * Licensed under MIT License
 */

'use strcit';

const dataBuilder = require('./lib/data-builder');
const logger = require('./lib/logger');
const validator = require('./lib/validator');

module.exports = (options = {}) => {
  const debug = options.debug || false;
  const log = options.log || false;
  // const camelCase = options.camel_case || false;
  validator.isValidLog(log);

  // eslint-disable-next-line no-unused-vars
  return (err, req, res, next) => {
    const statusCode = validator.isHTTPStatusCode(err.code) || 500;
    const code = statusCode;

    const errorHandler = {
      error: {
        status_code: code,
        code: dataBuilder[statusCode],
      },
    };

    if (err.message && err.message !== '') {
      errorHandler.error.message = err.message;
    }

    if (debug) {
      errorHandler.error.stack = err.stack;
    }

    if (log && typeof log === 'boolean') {
      logger.error(errorHandler);
    } else if (log && typeof log === 'function') {
      log(err, errorHandler, req);
    }

    return res.status(statusCode).json(errorHandler);
  };
};
