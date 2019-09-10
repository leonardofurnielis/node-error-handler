'use strcit';

const statusCodeValidator = require('./lib/status-code-validator');
const status = require('./lib/http-messages');
const logger = require('./hooks/logger');

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
        message: err.message,
        code: status[statusCode],
      },
    };

    if (!err.message || err.message === '') {
      delete errorHandler.error.message;
    }

    if (log) {
      logger.error(errorHandler);
    }

    if (debug) {
      logger.debug(err.stack);
    }

    return res.status(statusCode).json(errorHandler);
  };
};
