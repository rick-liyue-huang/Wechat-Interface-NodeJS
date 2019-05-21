
const Router = require('koa-router');
const router = new Router();

// use loadException in core/init.js
const { HttpException, ParameterException } = require('../../../core/http-exception');


router.post('/v1/:id/classic/latest', (ctx, next) => {
  // para : url, query header body
  const params = ctx.params;
  const query = ctx.query;
  const headers = ctx.request.headers;
  const body = ctx.request.body;

  if(true) {
    // dynamic 
    // const error = new Error('why error');
    // error.errorCode = 10001;
    // error.status = 400;
    // error.requestUrl = `${ctx.method} ${ctx.path}`;
    // throw error;

    // use error class
    // const error = new HttpException('why error', 10001, 400);
    const error = new ParameterException('no parameters', 10002);
    // const error = new global.errs.ParameterException(); // one method on which we donot need load each time.
    throw error;
  }
  ctx.body = {
    key: 'rick'
  }
  // 监听错误，输出一段有意义的提示信息
  // throw new Error('API Exception');
  // AOP 面向切面编程
});

module.exports = router;