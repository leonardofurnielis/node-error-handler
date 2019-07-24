'use strict';

const httpMocks = require('node-mocks-http');

const HttpErrorHandler = require('../index');

describe('Handler an JSON error in production', () => {
  test('Should return default error when no args passed', async () => {
    const req = httpMocks.createRequest();
    const res = httpMocks.createResponse();
    const error = new Error();

    HttpErrorHandler('production')(error, req, res, {});

    const response = JSON.parse(res._getData());

    expect(response.message).toEqual('INTERNAL SERVER ERROR');
    expect(response.http_response.message).toEqual('Unexpected internal server error.');
    expect(response.http_response.code).toEqual(500);
  });

  test('Should return error 400 when err.code: 400', async () => {
    const req = httpMocks.createRequest();
    const res = httpMocks.createResponse();
    const error = new Error();
    error.status_code = 400;

    HttpErrorHandler('production')(error, req, res, {});

    const response = JSON.parse(res._getData());

    expect(response.message).toEqual('BAD REQUEST');
    expect(response.http_response.message).toEqual('Invalid syntax for this request was provided.');
    expect(response.http_response.code).toEqual(400);
  });

  test('Should return error 400 when err.code: 400 with custom message', async () => {
    const req = httpMocks.createRequest();
    const res = httpMocks.createResponse();
    const error = new Error('Missing fields `name`.');
    error.status_code = 400;

    HttpErrorHandler('production')(error, req, res, {});

    const response = JSON.parse(res._getData());

    expect(response.message).toEqual('BAD REQUEST');
    expect(response.description).toEqual('Missing fields `name`.');
    expect(response.http_response.message).toEqual('Invalid syntax for this request was provided.');
    expect(response.http_response.code).toEqual(400);
  });
});

describe('Handler an JSON error in development', () => {
  test('Should return default error when no args passed', async () => {
    const req = httpMocks.createRequest();
    const res = httpMocks.createResponse();
    const error = new Error();

    HttpErrorHandler('development')(error, req, res, {});

    const response = JSON.parse(res._getData());

    expect(response.message).toEqual('INTERNAL SERVER ERROR');
    expect(response.details).not.toBeUndefined();
    expect(response.http_response.message).toEqual('Unexpected internal server error.');
    expect(response.http_response.code).toEqual(500);
  });

  test('Should return error 400 when err.code: 400', async () => {
    const req = httpMocks.createRequest();
    const res = httpMocks.createResponse();
    const error = new Error();
    error.status_code = 400;

    HttpErrorHandler('development')(error, req, res, {});

    const response = JSON.parse(res._getData());

    expect(response.message).toEqual('BAD REQUEST');
    expect(response.details).not.toBeUndefined();
    expect(response.http_response.message).toEqual('Invalid syntax for this request was provided.');
    expect(response.http_response.code).toEqual(400);
  });

  test('Should return error 400 when err.code: 400 with custom message', async () => {
    const req = httpMocks.createRequest();
    const res = httpMocks.createResponse();
    const error = new Error('Missing fields `name`.');
    error.status_code = 400;

    HttpErrorHandler('development')(error, req, res, {});

    const response = JSON.parse(res._getData());

    expect(response.message).toEqual('BAD REQUEST');
    expect(response.details).not.toBeUndefined();
    expect(response.description).toEqual('Missing fields `name`.');
    expect(response.http_response.message).toEqual('Invalid syntax for this request was provided.');
    expect(response.http_response.code).toEqual(400);
  });
});
