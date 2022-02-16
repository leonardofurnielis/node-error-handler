/*
 * node-error-handler
 * Copyright 2019-2022 Leonardo Furnielis.
 * Licensed under MIT License
 */

'use strcit';

const httpStatus = require('./src/resources/http-status-code');
const logging = require('./src/logging');
const validation = require('./src/validation');
const convertToCamelCase = require('./src/camel-case-convert');

/**
 * Express error handlers for JSON APIs in development and production environments.
 * @param {Object} [options]
 * @param {Boolean} options.debug - If true all errors are printed with stderr.
 * @param {Boolean} options.trace - If true the trace is attached to output.
 * @param {Boolean} options.camel_case - If true the camelCase approach is used by error handler.
 * @return {VoidFunction}
 */
module.exports = (options = {}) => {
  const trace = options.trace || false;
  const debug = options.debug || false;
  const camelCase = options.camel_case || false;

  // eslint-disable-next-line no-unused-vars
  return (err, req, res, next) => {
    const code = validation.isHTTPCode(err.code) || 500;

    const errorHandler = {
      error: {
        code: httpStatus[code],
        status_code: code,
      },
    };

    // const correlationId = 'X-Correlation-ID';
    // if((req.headers[correlationId] && !req.headers[correlationId].trim() === '') || req.correlationId && req.correlationId.trim() === '') {

    // }

    if (err.message && err.message !== '') {
      errorHandler.error.message = err.message;
    }

    if (trace) {
      errorHandler.error.trace = err.stack;
    }

    if (debug === true) {
      logging.error(errorHandler);
    }

    if (camelCase === true) {
      errorHandler.error = convertToCamelCase(errorHandler.error);
    }

    return res.status(code).json(errorHandler);
  };
};
