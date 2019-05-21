
// create middleware for global exception
// const catchError = async (ctx, next) => {
//   try {
//     await next()
//   } catch (e) {
//     ctx.body = {
//       content: 'server is wrong'
//     };
//   }
// }

const { HttpException, ParameterException } = require('../core/http-exception');

const catchError = async (ctx, next) => {
  try {
    await next()
  } catch (error) {
    // error should be clarified
    // including: HTTP Status code 
    // message
    // error_code more detailed by developers
    // request_url: current request url
    //  error divided to: known and unkown
    // known error: params error, 
    // unknown error: connect database, by wrong username or password

    // deal with known error
    // if(error.errorCode) {
    //   ctx.body = {
    //     msg: error.message,
    //     error_code: error.errorCode, // for python
    //     request: error.requestUrl
    //   }
    //   ctx.status = error.status;
    // }
    if(error instanceof ParameterException) {
      ctx.body = {
        msg: error.msg,
        error_code: error.errorCode, // for python
        request: `${ctx.method} ${ctx.path}`
      }
      ctx.status = error.code;
    }

  }
}

module.exports = catchError;