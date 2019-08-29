'use strict';

const log4js = require('log4js');

log4js.configure({
  appenders: {
    stderr: { type: 'stderr' },
    stderrFilter: {
      type: 'logLevelFilter',
      appender: 'stderr',
      level: 'error',
      maxLevel: 'error',
    },
  },
  categories: {
    default: {
      appenders: ['stderrFilter'],
      level: 'error',
    },
  },
});

const logger = log4js.getLogger('http-json-error');
logger.level = 'error';

module.exports = logger;
