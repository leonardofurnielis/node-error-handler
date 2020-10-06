/*
 * node-error-handler
 * Copyright 2019-2020 Leonardo Furnielis.
 * Licensed under MIT License
 */

'use strcit';

const data_builder = require('./lib/data-builder');
const logger = require('./lib/logger');
const validator = require('./lib/validator');

module.exports = (options = {}) => {
  const debug = options.debug || false;
  const log = options.log || false;
  validator.is_valid_log(log);

  // eslint-disable-next-line no-unused-vars
  return (err, req, res, next) => {
    const status_code = validator.is_http_status_code(err.code) || 500;
    const code = status_code;

    const error_handler = {
      error: {
        status_code: code,
        code: data_builder[status_code],
      },
    };

    if (err.message && err.message !== '') {
      error_handler.error.message = err.message;
    }

    if (debug) {
      error_handler.error.stack = err.stack;
    }

    if (log && typeof log === 'boolean') {
      logger.error(error_handler);
    } else if (log && typeof log === 'function') {
      log(err, error_handler, req);
    }

    return res.status(status_code).json(error_handler);
  };
};
