# request-json-errorhandler

![npm](https://img.shields.io/npm/v/request-json-errorhandler)
[![Build Status](https://travis-ci.org/lfurnielis/request-json-errorhandler.svg?branch=master)](https://travis-ci.org/lfurnielis/request-json-errorhandler)
![GitHub](https://img.shields.io/github/license/lfurnielis/request-json-errorhandler.svg)
![npm](https://img.shields.io/npm/dm/request-json-errorhandler.svg)
[![Coverage Status](https://coveralls.io/repos/github/lfurnielis/request-json-errorhandler/badge.svg?branch=master)](https://coveralls.io/github/lfurnielis/request-json-errorhandler?branch=master)

## Installation

You can download `request-json-errorhandler` from NPM

```bash
$ npm install request-json-errorhandler --save
```

then in your project require request-json-errorhandler

```js
const errorhandler = require('request-json-errorhandler');
```

or GitHub

```bash
$ git clone https://github.com/lfurnielis/request-json-errorhandler.git
```

## Guide

In an Express-based application:

```js
const express = require('express');
const errorhandler =  require('request-json-errorhandler');

const app = express();

// Your defined middlewares
...

// Your defined routes
app.get('/foo', (req, res, next) => {
    const error = new Error('Missing field(s): foo');
    error.code = 422;
    next(error);
});

// HTTP errorhandler
app.use(errorhandler({
  log: true, 
  debug: true 
}));
```

## Options

```js
{
  log: false; // Log errors using console.error(), Default: false
  debug: false; // Log error.stack using console.debug(), Default: false
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
    "code": "MISSING_REQUIRED_FIELDS"
  }
}
```
