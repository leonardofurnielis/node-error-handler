# node-error-handler

![npm](https://img.shields.io/npm/v/node-error-handler)
![workflow](https://github.com/leonardofurnielis/node-error-handler/actions/workflows/build-test.yml/badge.svg)
[![codecov](https://codecov.io/gh/leonardofurnielis/node-error-handler/branch/master/graph/badge.svg)](https://codecov.io/gh/leonardofurnielis/node-error-handler)
![GitHub](https://img.shields.io/github/license/leonardofurnielis/node-error-handler.svg)
![npm](https://img.shields.io/npm/dm/node-error-handler.svg)

## Installation 

```bash
npm install node-error-handler --save
```

## Usage

In an [express](https://www.npmjs.com/package/express) based application:

```js
const  express = require('express');
const  errorHandler = require('node-error-handler');
  
const  app = express();

// Setup your middlewares
// Setup your routes
app.get('/foo', (req, res, next) => {
  const  error = new  Error('Missing field: `name`');
  error.code = 422;
  next(error);
});

// HTTP errorHandler
app.use(errorHandler({ debug: true, trace: app.get('env') === 'development', camel_case: true }));
```

## Options

| Option | Type | Default | Description  |
| ------ |------|---------| ------------ |
| debug | Boolean | `false`| If `true` all errors are printed with stderr. |
| trace| Boolean | `false` | If `true` the trace is attached to output. (Recommended use in development only) |
| camel_case | Boolean | `false` | If `true` The camelCase approach is used by error handler. |

## Example

5xx error  `camel_case: false`:

```
{ "error": { "status_code": 500,"code": "INTERNAL_SERVER_ERROR" } }
```

5xx error  `camel_case: true`:

```
{ "error": { "statusCode": 500,"code": "INTERNAL_SERVER_ERROR" } }
```

5xx error  `trace: false`:

```
{ "error": { "status_code": 500,"code": "INTERNAL_SERVER_ERROR" } }
```

5xx error  `with transaction_id`:

```
{ "error": { "status_code": 500,"code": "INTERNAL_SERVER_ERROR", "transaction_id": "7616e2d3-6b90-43ba-8548-f6en12384f39" } }
```

5xx error  `trace: true`:

```
{ "error": 
  { "status_code": 500,
    "code": "INTERNAL_SERVER_ERROR",
    "trace":   
    at Module._compile (internal/modules/cjs/loader.js:892:18)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:973:10)
    at Module.load (internal/modules/cjs/loader.js:812:32)
    at Function.Module._load (internal/modules/cjs/loader.js:724:14)
    at Function.Module.runMain (internal/modules/cjs/loader.js:1025:10)
    at internal/main/run_main_module.js:17:11 
    } 
}
```

The error object could contain the following fields:

|  Error Key  |  Purpose  |
| --------- | -------------------------------------------------------------------- |
| status_code | HTTP status code for response. Default value: `500` (Internal Server Error). |
| message | Error message. |
| code | Error code, associated with `status_code`. |
| trace | Trace including data for dubug such as file, paths. |
| transaction_id | Unique identifier value that is attached to requests and messages that allow reference to a particular transaction or event chain. |

## License

[Apache-2.0](LICENSE)
