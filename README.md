
# http-json-error-handler

  
[![Build Status](https://travis-ci.org/lfurnielis/http-json-error-handler.svg?branch=master)](https://travis-ci.org/lfurnielis/loopsailor-sort)
[![License](https://img.shields.io/github/license/lfurnielis/http-json-error-handler.svg)](https://github.com/Naereen/StrapDown.js/blob/master/LICENSE)
![npm](https://img.shields.io/npm/dt/http-json-error-handler.svg)
[![Coverage Status](https://coveralls.io/repos/github/lfurnielis/http-json-error-handler/badge.svg?branch=master)](https://coveralls.io/github/lfurnielis/http-json-error-handler?branch=master)

  
## Installation


You can download `http-json-error-handler` from NPM


```bash

$ npm install http-json-error-handler --save

```

  
then in your project require http-json-error-handler

  
```js

const HttpErrorHandler =  require('http-json-error-handler');

```

 
or GitHub

  
```bash

$ git clone https://github.com/lfurnielis/http-json-error-handler.git

```

  
## Guide

 
```js

const HttpErrorHandler =  require('http-json-error-handler');
const express = require('express');

const app = express();

// Your defined middlewares
..
..

// Your defined routes
app.get('/foo', (req, res, next) => {
    const error = new Error('Missing fields `foo`.');
    error.http_code = 400;
    next(error);
});

// HTTP error handler
app.use(HttpErrorHandler(process.env.NODE_ENV));

```


### Definition of a "Error"

 
The error could contain the following fields:

| Error Key          | Purpose                                                                          |
|--------------------|----------------------------------------------------------------------------------|
| message (optional) | Error description.                                                               |
| http_code (optional)    | HTTP status code for response. By default is set to 500 (Internal Server Error). |


### HTTP JSON Error Example

```json
{
  "message": "NOT FOUND",
  "details": {}, 
  "description": "The reference set does not exist.",
  "http_response": {
     "message": "We could not find the resource you requested. Please refer to the documentation for the list of resources.",
      "code": 404
   }
}
```
