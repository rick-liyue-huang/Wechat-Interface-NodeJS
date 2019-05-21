
// define one class about error api

// this is base class
class HttpException extends Error {
  constructor(msg='server exception', errorCode=10000, code=400) {
    super()
    this.errorCode = errorCode;
    this.code = code;
    this.msg = msg;
  }
}

class ParameterException extends HttpException {
  constructor(msg, errorCode) {
    super();
    this.code = 400;
    this.msg = msg || 'parameter wrong';
    this.errorCode = errorCode || 10000
  }
}

module.exports = {
  HttpException,
  ParameterException
}