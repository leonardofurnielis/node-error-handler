/*!
 * node-error-handler
 * Copyright(c) 2019-2020 Leonardo Furnielis.
 * MIT Licensed
 */

'use strcit';

const statusCodeValidator = require('./lib/status-code-validator');
const status = require('./lib/data-builder');
const logger = require('./lib/logger');

module.exports = (options = {}) => {
  const debug = options.debug || false;
  const log = options.log || false;

  // eslint-disable-next-line no-unused-vars
  return (err, req, res, next) => {
    const statusCode = statusCodeValidator(err.code) || 500;
    const code = statusCode;

    const errorHandler = {
      error: {
        statusCode: code,
        code: status[statusCode],
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
    }

    if (log && typeof log === 'function') {
      log(errorHandler, req);
    }

    return res.status(statusCode).json(errorHandler);
  };
};
