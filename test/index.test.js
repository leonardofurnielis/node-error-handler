/* eslint-disable no-underscore-dangle */

'use strict';

const httpMocks = require('node-mocks-http');
const errorHandler = require('../index');

describe('ErrorHandler()', () => {
  test('When no args passed, should return default error object', async () => {
    const req = httpMocks.createRequest();
    const res = httpMocks.createResponse();
    const error = new Error();

    errorHandler()(error, req, res, {});

    const response = JSON.parse(res._getData());

    expect(response.error.code).toBe('INTERNAL_SERVER_ERROR');
    expect(response.error.status_code).toBe(500);
  });

  test('When sent code 400, should return code 400', async () => {
    const req = httpMocks.createRequest();
    const res = httpMocks.createResponse();
    const error = new Error();
    error.code = 400;

    errorHandler()(error, req, res, {});

    const response = JSON.parse(res._getData());

    expect(response.error.code).toBe('BAD_REQUEST');
    expect(response.error.status_code).toBe(400);
  });

  test('When sent code 400 with custom message, should return code 400 and custom message', async () => {
    const req = httpMocks.createRequest();
    const res = httpMocks.createResponse();
    const error = new Error('Missing fields: [name]');
    error.code = 400;

    errorHandler()(error, req, res, {});

    const response = JSON.parse(res._getData());
    expect(response.error.code).toBe('BAD_REQUEST');
    expect(response.error.message).toBe('Missing fields: [name]');
    expect(response.error.status_code).toBe(400);
  });

  test('When trace=true, should returns full error traces', async () => {
    const req = httpMocks.createRequest();
    const res = httpMocks.createResponse();
    const error = new Error();
    error.code = 500;

    errorHandler({ trace: true })(error, req, res, {});

    const response = JSON.parse(res._getData());

    expect(response.error.trace).toBeDefined();
  });

  test('When defined camel_case=true, should use camelCase response object', async () => {
    const req = httpMocks.createRequest();
    const res = httpMocks.createResponse();
    const error = new Error();

    errorHandler({ camel_case: true })(error, req, res, {});

    const response = JSON.parse(res._getData());
    expect(response.error.statusCode).toBeDefined();
  });
});

describe('X-Correlation-ID', () => {
  test(' When req.headers.x-correlation-id exist, should add to error response object', async () => {
    const req = httpMocks.createRequest({
      headers: { 'X-Correlation-ID': '7616e2d3-6b90-43ba-8548-f6en12384f39' },
    });
    const res = httpMocks.createResponse();

    const error = new Error();
    errorHandler()(error, req, res, {});

    const response = JSON.parse(res._getData());

    expect(response.error).toMatchObject({
      code: 'INTERNAL_SERVER_ERROR',
      status_code: 500,
      correlation_id: '7616e2d3-6b90-43ba-8548-f6en12384f39',
    });
  });

  test(' When req.headers.x-correlation-id empty, should ignore x-correlation-id', async () => {
    const req = httpMocks.createRequest({
      headers: { 'X-Correlation-ID': ' ' },
    });
    const res = httpMocks.createResponse();

    const error = new Error();
    errorHandler()(error, req, res, {});

    const response = JSON.parse(res._getData());

    expect(response.error).toMatchObject({
      code: 'INTERNAL_SERVER_ERROR',
      status_code: 500,
    });
  });

  test(' When req.headers.x-correlation-id undefined, should ignore x-correlation-id', async () => {
    const req = httpMocks.createRequest({
      headers: { 'X-Correlation-ID': undefined },
    });
    const res = httpMocks.createResponse();

    const error = new Error();
    errorHandler()(error, req, res, {});

    const response = JSON.parse(res._getData());

    expect(response.error).toMatchObject({
      code: 'INTERNAL_SERVER_ERROR',
      status_code: 500,
    });
  });

  test('When req.correlationId exist, should add to error response object', async () => {
    const req = { correlationId: '7616e2d3-6b90-43ba-8548-f6en12384f39' };
    const res = httpMocks.createResponse();

    const error = new Error();
    errorHandler()(error, req, res, {});

    const response = JSON.parse(res._getData());

    expect(response.error).toMatchObject({
      code: 'INTERNAL_SERVER_ERROR',
      status_code: 500,
      correlation_id: '7616e2d3-6b90-43ba-8548-f6en12384f39',
    });
  });

  test('When req.correlationId empty, should ignore x-correlation-id', async () => {
    const req = { correlationId: ' ' };
    const res = httpMocks.createResponse();

    const error = new Error();
    errorHandler()(error, req, res, {});

    const response = JSON.parse(res._getData());

    expect(response.error).toMatchObject({
      code: 'INTERNAL_SERVER_ERROR',
      status_code: 500,
    });
  });

  test('When req.correlationId undefined, should ignore x-correlation-id', async () => {
    const req = { correlationId: undefined };
    const res = httpMocks.createResponse();

    const error = new Error();
    errorHandler()(error, req, res, {});

    const response = JSON.parse(res._getData());

    expect(response.error).toMatchObject({
      code: 'INTERNAL_SERVER_ERROR',
      status_code: 500,
    });
  });
});
