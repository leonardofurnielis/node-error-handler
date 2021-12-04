/*
 * node-error-handler
 * Copyright 2019-2021 Leonardo Furnielis.
 * Licensed under MIT License
 */

'use strict';

const log4js = require('log4js');

log4js.configure({
  appenders: {
    stderr: { type: 'stderr' },
    stderrFilter: {
      type: 'logLevelFilter',
      appender: 'stderr',
      level: 'debug',
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

const logging = log4js.getLogger('HTTP:node-error-handler');
logging.level = 'error';

module.exports = logging;
