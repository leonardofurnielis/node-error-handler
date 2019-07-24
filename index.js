'use strcit';

const codeValidator = require('./src/codeValidator');
const status = require('./src/httpMessages');

module.exports = env => {
  const production = env == 'production' ? true : false;

  return (err, req, res, next) => {
    const httpCode = codeValidator(err.http_code) || 500;
    const statusMessage = status[`${httpCode}_MESSAGE`];

    const error = {
      message: status[httpCode],
      details: {},
      http_response: {
        message: statusMessage,
        code: httpCode,
      },
    };

    if (!production) {
      error.details = err.stack;
    }

    if (err.message && err.message !== '') {
      error.description = err.message;
    }

    return res.status(httpCode).json(error);
  };
};
