'use strcit';

module.exports = {
  // 3xx
  300: 'MULTIPLE CHOICES',
  '300_MESSAGE':
    'The requested resource corresponds to any one of a set of representations, each with its own specific location.',
  MULTIPLE_CHOICES: 300,

  301: 'MOVED PERMANENTLY',
  '301_MESSAGE': 'The resource has moved permanently. Please refer to the documentation.',
  MOVED_PERMANENTLY: 301,

  302: 'FOUND',
  '302_MESSAGE': 'The resource has moved temporarily. Please refer to the documentation.',
  FOUND: 302,

  303: 'SEE OTHER',
  '303_MESSAGE': 'The resource can be found under a different URI.',
  SEE_OTHER: 303,

  304: 'NOT MODIFIED',
  '304_MESSAGE': 'The resource is available and not modified.',
  NOT_MODIFIED: 304,

  305: 'USE PROXY',
  '305_MESSAGE':
    'The requested resource must be accessed through the proxy given by the Location field.',
  USE_PROXY: 305,

  307: 'TEMPORARY REDIRECT',
  '307_MESSAGE': 'The resource resides temporarily under a different URI.',
  TEMPORARY_REDIRECT: 307,

  // 4xx
  400: 'BAD REQUEST',
  '400_MESSAGE': '	Invalid syntax for this request was provided.',
  BAD_REQUEST: 400,

  401: 'UNAUTHORIZED',
  '401_MESSAGE': 'You are unauthorized to access the requested resource. Please log in.',
  UNAUTHORIZED: 401,

  403: 'FORBIDDEN',
  '403_MESSAGE': 'Your account is not authorized to access the requested resource.',
  FORBIDDEN: 403,

  404: 'NOT FOUND',
  '404_MESSAGE':
    'We could not find the resource you requested. Please refer to the documentation for the list of resources.',
  NOT_FOUND: 404,

  405: 'METHOD NOT ALLOWED',
  '405_MESSAGE': 'This method type is not currently supported.',
  METHOD_NOT_ALLOWED: 405,

  406: 'NOT ACCEPTABLE',
  '406_MESSAGE': 'Acceptance header is invalid for this endpoint resource.',
  NOT_ACCEPTABLE: 406,

  407: 'PROXY AUTHENTICATION REQUIRED',
  '407_MESSAGE': 'Authentication with proxy is required.',
  PROXY_AUTHENTICATION_REQUIRED: 407,

  408: 'REQUEST TIMEOUT',
  '408_MESSAGE':
    'Client did not produce a request within the time that the server was prepared to wait.',
  REQUEST_TIMEOUT: 408,

  409: 'CONFLICT',
  '409_MESSAGE':
    '	The request could not be completed due to a conflict with the current state of the resource.',
  CONFLICT: 409,

  410: 'GONE',
  '410_MESSAGE': '	The requested resource is no longer available and has been permanently removed.',
  GONE: 410,

  411: 'LENGTH REQUIRED',
  '411_MESSAGE': '	Length of the content is required, please include it with the request.',
  LENGTH_REQUIRED: 411,

  412: 'PRECONDITION FAILED',
  '412_MESSAGE': 'The request did not match the pre-conditions of the requested resource.',
  PRECONDITION_FAILED: 412,

  413: 'REQUEST ENTITY TOO LARGE',
  '413_MESSAGE': 'The request entity is larger than the server is willing or able to process.',
  REQUEST_ENTITY_TOO_LARGE: 413,

  414: 'REQUEST-URI TOO LONG',
  '414_MESSAGE': 'The request URI is longer than the server is willing to interpret.',
  REQUEST_URI_TOO_LONG: 414,

  415: 'UNSUPPORTED MEDIA TYPE',
  '415_MESSAGE': 'The requested resource does not support the media type provided.',
  UNSUPPORTED_MEDIA_TYPE: 415,

  416: 'REQUESTED RANGE NOT SATISFIABLE',
  '416_MESSAGE': 'The requested range for the resource is not available.',
  REQUESTED_RANGE_NOT_SATISFIABLE: 416,

  417: 'EXPECTATION FAILED',
  '417_MESSAGE': 'Unable to meet the expectation given in the Expect request header.',
  EXPECTATION_FAILED: 417,

  419: 'MISSING ARGUMENTS',
  '419_MESSAGE': '	The requested resource is missing required arguments.',
  MISSING_ARGUMENTS: 419,

  420: 'INVALID ARGUMENTS',
  '420_MESSAGE': 'The requested resource does not support one or more of the given parameters.',
  INVALID_ARGUMENTS: 420,

  422: 'UNPROCESSABLE ENTITY',
  '422_MESSAGE':
    'The request was well-formed but was unable to be followed due to semantic errors.',
  UNPROCESSABLE_ENTITY: 422,

  // 5xx
  500: 'BAD REQUEST',
  '500_MESSAGE': '	Invalid syntax for this request was provided.',
  BAD_REQUEST: 500,

  501: 'UNAUTHORIZED',
  '501_MESSAGE': 'You are unauthorized to access the requested resource. Please log in.',
  UNAUTHORIZED: 501,

  502: 'PROXY AUTHENTICATION REQUIRED',
  '502_MESSAGE': 'Authentication with proxy is required.',
  PROXY_AUTHENTICATION_REQUIRED: 502,

  503: 'FORBIDDEN',
  '503_MESSAGE': 'Your account is not authorized to access the requested resource.',
  FORBIDDEN: 503,

  504: 'NOT FOUND',
  '504_MESSAGE':
    'We could not find the resource you requested. Please refer to the documentation for the list of resources.',
  NOT_FOUND: 504,

  505: 'METHOD NOT ALLOWED',
  '505_MESSAGE': 'This method type is not currently supported.',
  METHOD_NOT_ALLOWED: 505,

  550: 'NOT ACCEPTABLE',
  '550_MESSAGE': 'Acceptance header is invalid for this endpoint resource.',
  NOT_ACCEPTABLE: 550,
};
