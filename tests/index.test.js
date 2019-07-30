'use strict';

const httpMocks = require('node-mocks-http');

const HttpErrorHandler = require('../index');

describe('HTTP Handler an JSON error', () => {
  test('Should return default error when no args passed', async () => {
    const req = httpMocks.createRequest();
    const res = httpMocks.createResponse();
    const error = new Error();

    HttpErrorHandler('production')(error, req, res, {});

    const response = JSON.parse(res._getData());

    expect(response.error.message).toEqual('INTERNAL SERVER ERROR');
    expect(response.error.code).toEqual(500);
  });

  test('Should return error code 400', async () => {
    const req = httpMocks.createRequest();
    const res = httpMocks.createResponse();
    const error = new Error();
    error.status = 400;

    HttpErrorHandler('production')(error, req, res, {});

    const response = JSON.parse(res._getData());

    expect(response.error.message).toEqual('BAD REQUEST');
    expect(response.error.code).toEqual(400);
  });

  test('Should return error code 400 with details', async () => {
    const req = httpMocks.createRequest();
    const res = httpMocks.createResponse();
    const error = new Error('Missing fields: [name]');
    error.status = 400;

    HttpErrorHandler('production')(error, req, res, {});

    const response = JSON.parse(res._getData());
    console.log(response);
    expect(response.error.message).toEqual('BAD REQUEST');
    expect(response.error.details).toEqual('Missing fields: [name]');
    expect(response.error.code).toEqual(400);
  });
});
