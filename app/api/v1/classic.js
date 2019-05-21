
const Router = require('koa-router');
const router = new Router();


router.post('/v1/:id/classic/latest', (ctx, next) => {
  // para : url, query header body
  const params = ctx.params;
  const query = ctx.query;
  const headers = ctx.request.headers;
  const body = ctx.request.body;
  ctx.body = {
    key: 'rick'
  }
  // 监听错误，输出一段有意义的提示信息
  throw new Error('API Exception');
  // AOP 面向切面编程
});

module.exports = router;