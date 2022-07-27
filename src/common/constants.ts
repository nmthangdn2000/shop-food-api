const LIMIT = 10;

enum HTTP_METHOD {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

enum USER_STATUS {
  ACTIVE,
  BLOCK,
}

export { LIMIT, HTTP_METHOD, USER_STATUS };
