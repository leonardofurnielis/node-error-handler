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
    expect(response.error.status_code).toEqual(500);
  });

  test('Should return error code 400', async () => {
    const req = httpMocks.createRequest();
    const res = httpMocks.createResponse();
    const error = new Error();
    error.code = 400;

    errorHandler()(error, req, res, {});

    const response = JSON.parse(res._getData());

    expect(response.error.code).toEqual('BAD_REQUEST');
    expect(response.error.status_code).toEqual(400);
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
    expect(response.error.status_code).toEqual(400);
  });

  test('Should log error in logger.error', async () => {
    const req = httpMocks.createRequest();
    const res = httpMocks.createResponse();
    const error = new Error();
    error.code = 400;

    errorHandler({ log: true })(error, req, res, {});

    const response = JSON.parse(res._getData());
    expect(response.error.code).toEqual('BAD_REQUEST');
    expect(response.error.status_code).toEqual(400);
  });

  test('Should log error in logger.debug', async () => {
    const req = httpMocks.createRequest();
    const res = httpMocks.createResponse();
    const error = new Error();
    error.code = 500;

    errorHandler({ debug: true })(error, req, res, {});

    const response = JSON.parse(res._getData());
    expect(response.error.code).toEqual('INTERNAL_SERVER_ERROR');
    expect(response.error.status_code).toEqual(500);
  });
});
