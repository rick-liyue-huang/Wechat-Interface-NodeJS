
const { HttpException } = require('../core/http-exception');

const catchError = async (ctx, next) => {
  try {
    await next();
  } catch(e) {
    // ctx.body = 'some questions about server';
    // 错误不应该直接返回到客户端去
    // HTTP status code: 2xx 4xx 5xx
    // message
    // error_code 自己定义的
    // request_url: 当前请求的url

    // 已知型错误 例如 param int 'string'
    // 未知型错误：

    // 已知异常是有 error_code
    // if(e.errorCode) {
    //   ctx.body = {
    //     msg: e.message,
    //     error_code: e.errorCode,
    //     request: e.requestUrl
    //   };
    //   ctx.status = e.status;
    // }
    if(e instanceof HttpException) {
      ctx.body = {
        msg: e.msg,
        error_code: e.errorCode,
        request: `${ctx.method} ${ctx.path}`
      };
      ctx.status = e.code;
    }

  }
}

module.exports = catchError;