/*
 * node-error-handler
 * Licensed under MIT License
 */

'use strcit';

const http_status = require('./src/resources/http-status-code');
const validation = require('./src/validation');
const convert_to_camelcase = require('./src/camel-case-convert');

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
    const code = validation.is_http_code(err.code) || 500;

    const error_handler = {
      error: {
        code: http_status[code],
        status_code: code,
      },
    };

    const transaction_id = 'x-transaction-id';
    if (req.headers && req.headers[transaction_id] && req.headers[transaction_id].trim() !== '') {
      error_handler.error.transaction_id = req.headers[transaction_id].trim();
    } else if (req.transaction_id && req.transaction_id.trim() !== '') {
      error_handler.error.transaction_id = req.transaction_id.trim();
    }

    if (err.message && err.message !== '') {
      error_handler.error.message = err.message;
    }

    if (trace) {
      error_handler.error.trace = err.stack;
    }

    if (debug === true) {
      console.error(error_handler);
    }

    if (camelCase === true) {
      error_handler.error = convert_to_camelcase(error_handler.error);
    }

    return res.status(code).json(error_handler);
  };
};
