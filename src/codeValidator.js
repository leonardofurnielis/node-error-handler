'use strcit';

const status = require('./httpMessages');

module.exports = code => {
  code = Number(code);

  if (status[code]) {
    return code;
  }

  return undefined;
};
