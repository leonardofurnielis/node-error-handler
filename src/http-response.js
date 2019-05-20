'use strcit';

module.exports = {
  // 1xx
  100: 'CONTINUE',
  '100_MESSAGE':
    'The server has received the request headers and the client should proceed to send the request body.',
  CONTINUE: 100,
  101: 'SWITCHING PROTOCOLS',
  '101_MESSAGE':
    'The requester has asked the server to switch protocols and the server has agreed to do so.',
  SWITCHING_PROTOCOLS: 101,
  102: 'PROCESSING',
  '102_MESSAGE':
    'The server has received and is processing the request, but no response is available yet.',
  PROCESSING: 102,
  103: 'EARLY_HINTS',
  '103_MESSAGE': 'Used to return some response headers before final HTTP message.',
  EARLY_HINTS: 103,

  // 2xx
  200: 'OK',
  '200_MESSAGE': 'The request has succeeded.',
  OK: 200,
  201: 'CREATED',
  '201_MESSAGE': 'The request has succeeded and a new resource has been created as a result of it.',
  CREATED: 201,
  202: 'ACCEPTED',
  '202_MESSAGE':
    'The request has been accepted for processing, but the processing has not been completed.',
  ACCEPTED: 202,
  203: 'NON_AUTHORITATIVE_INFORMATION',
  '203_MESSAGE':
    'This response code means returned meta-information set is not exact set as available from the origin server.',
  NON_AUTHORITATIVE_INFORMATION: 203,
  204: 'NO CONTENT',
  '204_MESSAGE': 'The server successfully processed the request and is not returning any content.',
  NO_CONTENT: 204,
  205: 'RESET CONTENT',
  '205_MESSAGE':
    'There is no content to send for this request, the user-agent may update its cached.',
  RESET_CONTENT: 205,
  206: 'PARTIAL CONTENT',
  '206_MESSAGE':
    'The server is delivering only part of the resource (byte serving) due to a range header sent by the client.',
  PARTIAL_CONTENT: 206,
  207: 'MULTI STATUS',
  '207_MESSAGE':
    'The message body that follows is by default an XML message and can contain a number of separate response codes, depending on how many sub-requests were made.',
  MULTI_STATUS: 207,
  208: 'ALREADY REPORTED',
  '208_MESSAGE':
    'The members of a DAV binding have already been enumerated in a preceding part of the (multistatus) response, and are not being included again.',
  ALREADY_REPORTED: 208,
  226: 'IM USED',
  '226_MESSAGE':
    'The server has fulfilled a request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the current instance.',
  IM_USED: 226,

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
  500: 'INTERNAL SERVER ERROR',
  '500_MESSAGE': 'Unexpected internal server error.',
  INTERNAL_SERVER_ERROR: 500,

  501: 'NOT IMPLEMENTED',
  '501_MESSAGE': 'The requested resource is recognized but not implemented.',
  NOT_IMPLEMENTED: 501,

  502: 'BAD GATEWAY',
  '502_MESSAGE': 'Invalid response received when acting as a proxy or gateway.',
  BAD_GATEWAY: 502,

  503: 'SERVICE UNAVAILABLE',
  '503_MESSAGE': 'The server is currently unavailable.',
  SERVICE_UNAVAILABLE: 503,

  504: 'GATEWAY_TIMEOUT',
  '504_MESSAGE':
    '	Did not receive a timely response from upstream server while acting as a gateway or proxy.',
  BAD_REQUEST: 504,

  505: 'HTTP VERSION NOT SUPPORTED',
  '505_MESSAGE': 'The HTTP protocol version used in the request message is not supported.',
  HTTP_VERSION_NOT_SUPPORTED: 505,

  550: 'INITIALIZATION FAILURE',
  '550_MESSAGE': 'A failure occurred during initialization of services. API will be unavailable.',
  INITIALIZATION_FAILURE: 550,
};
