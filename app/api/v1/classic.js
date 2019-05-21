

const Router = require('koa-router');
const router = new Router();

const { PositiveIntergerValidator } = require('../../validators/validator');

router.post('/v1/:id/classic/latest', (ctx, next) => {
  const path = ctx.path;
  const query = ctx.query;
  const header = ctx.request.header;
  const body = ctx.request.body;

  const v = new PositiveIntergerValidator().validate(ctx);
  const id = v.get('body.b', parsed=false);
  ctx.body = 'success'
});

module.exports = router;