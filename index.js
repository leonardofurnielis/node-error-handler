'use strcit';

const statusCodeValidator = require('./lib/status-code-validator');
const status = require('./lib/http-messages');
const logger = require('./hooks/logger');

module.exports = (options = {}) => {
  const stderr = options.stderr || false;
  const stackerr = options.stackerr || false;

  // eslint-disable-next-line no-unused-vars
  return (err, req, res, next) => {
    const statusCode = statusCodeValidator(err.status) || 500;
    const code = err.code || statusCode;

    const errorHandler = {
      error: {
        code,
        message: status[statusCode],
        details: err.message,
      },
    };

    if (!err.message || err.message === '') {
      delete errorHandler.error.details;
    }

    if (stderr) {
      logger.error(errorHandler);
    }

    if (stackerr) {
      logger.debug(err.stack);
    }

    return res.status(statusCode).json(errorHandler);
  };
};
