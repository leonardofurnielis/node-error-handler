# node-error-handler


![npm](https://img.shields.io/npm/v/node-error-handler)
[![Build Status](https://travis-ci.org/leonardofurnielis/node-error-handler.svg?branch=master)](https://travis-ci.org/leonardofurnielis/node-error-handler)
[![codecov](https://codecov.io/gh/leonardofurnielis/node-error-handler/branch/master/graph/badge.svg)](https://codecov.io/gh/leonardofurnielis/node-error-handler)
![GitHub](https://img.shields.io/github/license/leonardofurnielis/node-error-handler.svg)
![npm](https://img.shields.io/npm/dm/node-error-handler.svg)
  

## Installation 


```bash
$ npm install node-error-handler --save
```

  
## Use


In an Express-based application:

```js

const  express = require('express');
const  errorHandler = require('node-error-handler');
  
const  app = express();

// Setup your middlewares
// Setup your routes
app.get('/foo', (req, res, next) => {
const  error = new  Error('Missing field(s): foo');
error.code = 422;
next(error);
});

// HTTP errorHandler
app.use(errorHandler({ log: true, debug: true }));

```


## Options

  
| Option | Type | Default | Description  |
| ------ |------|---------| ------------ |
| log | Boolean \| Function | `false`| If `true` all errors are printed via console.error. If `function` use custom fuction defined by user. |
| debug| Boolean | `false` | If `true` responses include stack trace into output. |
  

### Customizing log


```js
app.use(errorHandler({ log: errorStorage }));

function errorStorage (err, obj, req) {
   // Do some stuff
}
```


## Example


5xx error  `debug: false`:

```
{ "error": { "statusCode": 500,"code": "INTERNAL_SERVER_ERROR" } }
```

5xx error  `debug: true`:

```
{ "error": 
  { "statusCode": 500,
    "code": "INTERNAL_SERVER_ERROR",
    "stack":   
    at Module._compile (internal/modules/cjs/loader.js:892:18)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:973:10)
    at Module.load (internal/modules/cjs/loader.js:812:32)
    at Function.Module._load (internal/modules/cjs/loader.js:724:14)
    at Function.Module.runMain (internal/modules/cjs/loader.js:1025:10)
    at internal/main/run_main_module.js:17:11 
    } 
}
```


### Definition of a "Error"

  
The error could contain the following fields:

|  Error Key  |  Purpose  |
| --------- | -------------------------------------------------------------------- |
| statusCode | HTTP status code for response. Default value: `500` (Internal Server Error). |
| message | Error message. |
| code | Error code. |
| stack | Error stack trace including data such as file paths, URLs. |


## License

[MIT](LICENSE)
