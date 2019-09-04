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

    expect(response.error.message).toEqual('INTERNAL SERVER ERROR');
    expect(response.error.code).toEqual(500);
  });

  test('Should return error code 400', async () => {
    const req = httpMocks.createRequest();
    const res = httpMocks.createResponse();
    const error = new Error();
    error.status = 400;

    errorHandler()(error, req, res, {});

    const response = JSON.parse(res._getData());

    expect(response.error.message).toEqual('BAD REQUEST');
    expect(response.error.code).toEqual(400);
  });

  test('Should return error code 400 with details', async () => {
    const req = httpMocks.createRequest();
    const res = httpMocks.createResponse();
    const error = new Error('Missing fields: [name]');
    error.status = 400;

    errorHandler()(error, req, res, {});

    const response = JSON.parse(res._getData());
    expect(response.error.message).toEqual('BAD REQUEST');
    expect(response.error.details).toEqual('Missing fields: [name]');
    expect(response.error.code).toEqual(400);
  });

  test('Should log error in logger.error', async () => {
    const req = httpMocks.createRequest();
    const res = httpMocks.createResponse();
    const error = new Error();
    error.status = 400;

    errorHandler({ stderr: true })(error, req, res, {});

    const response = JSON.parse(res._getData());
    expect(response.error.message).toEqual('BAD REQUEST');
    expect(response.error.code).toEqual(400);
  });

  test('Should log error in logger.debug', async () => {
    const req = httpMocks.createRequest();
    const res = httpMocks.createResponse();
    const error = new Error();
    error.status = 400;

    errorHandler({ stackerr: true })(error, req, res, {});

    const response = JSON.parse(res._getData());
    expect(response.error.message).toEqual('BAD REQUEST');
    expect(response.error.code).toEqual(400);
  });
});
