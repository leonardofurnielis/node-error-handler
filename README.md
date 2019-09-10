# request-errorhandler

![npm](https://img.shields.io/npm/v/request-errorhandler)
[![Build Status](https://travis-ci.org/lfurnielis/request-errorhandler.svg?branch=master)](https://travis-ci.org/lfurnielis/request-errorhandler)
![GitHub](https://img.shields.io/github/license/lfurnielis/request-errorhandler.svg)
![npm](https://img.shields.io/npm/dm/request-errorhandler.svg)
[![Coverage Status](https://coveralls.io/repos/github/lfurnielis/request-errorhandler/badge.svg?branch=master)](https://coveralls.io/github/lfurnielis/request-errorhandler?branch=master)

## Installation

You can download `request-errorhandler` from NPM

```bash
$ npm install request-errorhandler --save
```

then in your project require request-errorhandler

```js
const errorhandler = require('request-errorhandler');
```

or GitHub

```bash
$ git clone https://github.com/lfurnielis/request-errorhandler.git
```

## Guide

```js
const errorhandler =  require('request-errorhandler');
const express = require('express');

const app = express();

// Your defined middlewares
...
...

// Your defined routes
app.get('/foo', (req, res, next) => {
    const error = new Error('Missing field(s): foo');
    error.code = 422;
    next(error);
});

// HTTP error handler
app.use(errorhandler({
  log: true // Default: false
  debug: true // // Default: false
}));
```

## Options

```js
{
  log: false; // Log errors using console.error(), Default: false
  debug: false; // Log error.stack using console.debug() only for statusCode >= 500, Default: false
}
```

### Definition of a "Error"

The error could contain the following fields:

| Error Key | Purpose                                                              |
| --------- | -------------------------------------------------------------------- |
| status_code  | HTTP status code for response. Default: 500 (Internal Server Error). |
| message | Error details.                                                       |
| code    | Error code.                               |

### HTTP JSON Error Example

```json
{
  "error": {
    "status_code": 422,
    "message": "Missing field(s): foo",
    "details": "MISSING_REQUIRED_FIELDS"
  }
}
```
