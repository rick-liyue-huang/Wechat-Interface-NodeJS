
const Router = require('koa-router');
const router = new Router();

// because global require
const { HttpException, ParameterException } = require('../../../core/http-exception');

router.post('/v1/:id/classic/latest', (ctx, next) => {

  const path = ctx.params;
  const query = ctx.request.query;
  const headers = ctx.request.header;
  const body = ctx.request.body;

  if(true) {
    // 面向对象方式 一个类
    // const err = new Error('why');
    // err.errorCode = 10001;
    // err.status = 400;
    // err.requestUrl = `${ctx.method} ${ctx.path}`;
    // const err = new HttpException('why', 10001, 400);
    // err.requestUrl = `${ctx.method} ${ctx.path}`;
    const err = new ParameterException();
    // const err = new global.errs.ParameterException();
    // 使用全局变量
    throw err;
  }
  ctx.body = {
    key: 'classic'
  }
  // throw new Error('wrong');
});

module.exports = router;

