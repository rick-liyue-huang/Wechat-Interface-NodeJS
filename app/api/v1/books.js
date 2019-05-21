
const Router = require('koa-router');
const router = new Router();

router.get('/v1/book/latest', (ctx, next) => {
  ctx.body = {
    name: ctx.path
  }
});

module.exports = router;