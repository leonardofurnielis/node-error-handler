/* eslint-disable no-underscore-dangle */

'use strict';

const httpMocks = require('node-mocks-http');

const errorHandler = require('../index');

describe('HTTP Handler an JSON error', () => {
  test('Should return default error when no args passed', async () => {
    const req = httpMocks.createRequest();
    const res = httpMocks.createResponse();
    const error = new Error();

    errorHandler()(error, req, res, {});

    const response = JSON.parse(res._getData());

    expect(response.error.code).toEqual('INTERNAL_SERVER_ERROR');
    expect(response.error.statusCode).toEqual(500);
  });

  test('Should return error code 400', async () => {
    const req = httpMocks.createRequest();
    const res = httpMocks.createResponse();
    const error = new Error();
    error.code = 400;

    errorHandler()(error, req, res, {});

    const response = JSON.parse(res._getData());

    expect(response.error.code).toEqual('BAD_REQUEST');
    expect(response.error.statusCode).toEqual(400);
  });

  test('Should return error code 400 with message', async () => {
    const req = httpMocks.createRequest();
    const res = httpMocks.createResponse();
    const error = new Error('Missing fields: [name]');
    error.code = 400;

    errorHandler()(error, req, res, {});

    const response = JSON.parse(res._getData());
    expect(response.error.code).toEqual('BAD_REQUEST');
    expect(response.error.message).toEqual('Missing fields: [name]');
    expect(response.error.statusCode).toEqual(400);
  });

  test('Should print error via console.error', async () => {
    const req = httpMocks.createRequest();
    const res = httpMocks.createResponse();
    const error = new Error();
    error.code = 400;

    errorHandler({ log: true })(error, req, res, {});

    const response = JSON.parse(res._getData());
    expect(response.error.code).toEqual('BAD_REQUEST');
    expect(response.error.statusCode).toEqual(400);
  });

  test('Should returns full error stack traces', async () => {
    const req = httpMocks.createRequest();
    const res = httpMocks.createResponse();
    const error = new Error();
    error.code = 500;

    errorHandler({ debug: true })(error, req, res, {});

    const response = JSON.parse(res._getData());
    expect(response.error.code).toEqual('INTERNAL_SERVER_ERROR');
    expect(response.error.statusCode).toEqual(500);
  });

  test('Should use custom log function', async () => {
    const req = httpMocks.createRequest();
    const res = httpMocks.createResponse();
    const error = new Error();
    error.code = 500;

    errorHandler({
      log: (err, obj) => {
        obj.error.message = 'Using custom log function.';
      },
    })(error, req, res, {});

    const response = JSON.parse(res._getData());
    expect(response.error.message).toEqual('Using custom log function.');
    expect(response.error.code).toEqual('INTERNAL_SERVER_ERROR');
    expect(response.error.statusCode).toEqual(500);
  });
});
