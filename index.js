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
        status_code: code,
        code: status[statusCode],
      },
    };

    if (err.message && err.message !== '') {
      errorHandler.error.message = err.message;
    }

    if (debug) {
      errorHandler.error.stack = err.stack;
    }

    if (log) {
      logger.error(errorHandler);
    }

    return res.status(statusCode).json(errorHandler);
  };
};
