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

    expect(response.error).toMatchObject({
      code: 'INTERNAL_SERVER_ERROR',
      status_code: 500,
    });
  });

  test('When sent code 400, should return code 400', async () => {
    const req = httpMocks.createRequest();
    const res = httpMocks.createResponse();
    const error = new Error();
    error.code = 400;

    errorHandler()(error, req, res, {});

    const response = JSON.parse(res._getData());

    expect(response.error).toMatchObject({
      code: 'BAD_REQUEST',
      status_code: 400,
    });
  });

  test('When sent code 400 with custom message, should return code 400 and custom message', async () => {
    const req = httpMocks.createRequest();
    const res = httpMocks.createResponse();
    const error = new Error('Missing fields: [name]');
    error.code = 400;

    errorHandler()(error, req, res, {});

    const response = JSON.parse(res._getData());

    expect(response.error).toMatchObject({
      code: 'BAD_REQUEST',
      status_code: 400,
      message: 'Missing fields: [name]',
    });
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

describe('X-transaction-ID', () => {
  test(' When req.headers x-transaction-id exist, should add to error response object', async () => {
    const req = httpMocks.createRequest({
      headers: { 'X-Transaction-ID': '7616e2d3-6b90-43ba-8548-f6en12384f39' },
    });
    const res = httpMocks.createResponse();

    const error = new Error();
    errorHandler()(error, req, res, {});

    const response = JSON.parse(res._getData());

    expect(response.error).toMatchObject({
      code: 'INTERNAL_SERVER_ERROR',
      status_code: 500,
      transaction_id: '7616e2d3-6b90-43ba-8548-f6en12384f39',
    });
  });

  test(' When req.headers. x-transaction-id empty, should ignore x-transaction-id', async () => {
    const req = httpMocks.createRequest({
      headers: { 'X-transaction-ID': ' ' },
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

  test(' When req.headers. x-transaction-id undefined, should ignore x-transaction-id', async () => {
    const req = httpMocks.createRequest({
      headers: { 'X-transaction-ID': undefined },
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

  test('When req.transactionId exist, should add to error response object', async () => {
    const req = { transactionId: '7616e2d3-6b90-43ba-8548-f6en12384f39' };
    const res = httpMocks.createResponse();

    const error = new Error();
    errorHandler()(error, req, res, {});

    const response = JSON.parse(res._getData());

    expect(response.error).toMatchObject({
      code: 'INTERNAL_SERVER_ERROR',
      status_code: 500,
      transaction_id: '7616e2d3-6b90-43ba-8548-f6en12384f39',
    });
  });

  test('When req.transactionId empty, should ignore x-transaction-id', async () => {
    const req = { transactionId: ' ' };
    const res = httpMocks.createResponse();

    const error = new Error();
    errorHandler()(error, req, res, {});

    const response = JSON.parse(res._getData());

    expect(response.error).toMatchObject({
      code: 'INTERNAL_SERVER_ERROR',
      status_code: 500,
    });
  });

  test('When req.transactionId undefined, should ignore x-transaction-id', async () => {
    const req = { transactionId: undefined };
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
