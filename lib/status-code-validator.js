'use strcit';

const status = require('./data-builder');

module.exports = code => {
  code = Number(code);

  if (status[code]) {
    return code;
  }

  return undefined;
};
