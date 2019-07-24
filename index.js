'use strcit';

const codeValidator = require('./src/codeValidator');
const status = require('./src/httpMessages');

module.exports = env => {
  const production = env == 'production' ? true : false;

  return (err, req, res, next) => {
    const statusCode = codeValidator(err.status_code) || 500;
    const statusMessage = status[`${statusCode}_MESSAGE`];

    const error = {
      message: status[statusCode],
      details: {},
      http_response: {
        message: statusMessage,
        code: statusCode,
      },
    };

    if (!production) {
      error.details = err.stack;
    }

    if (err.message && err.message !== '') {
      error.description = err.message;
    }

    return res.status(statusCode).json(error);
  };
};
