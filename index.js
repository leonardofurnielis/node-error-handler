'use strcit';

const status = require('./src/http-status');

module.exports = env => {
  const production = env == 'production' ? true : false;

  return (err, req, res, next) => {
    const code = err.code || 500;
    const statusMessage = status[`${code}_MESSAGE`];

    const error = {
      message: err.message || status[code],
      details: {},
      http_response: {
        message: statusMessage,
        code: code,
      },
    };

    if (!production) {
      error.details = err.stack;
    }

    return res.status(code).json(error);
  };
};
