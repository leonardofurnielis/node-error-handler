'use strcit';

const status = require('./http-messages');

module.exports = code => {
  code = Number(code);

  if (status[code]) {
    return code;
  }

  return undefined;
};
