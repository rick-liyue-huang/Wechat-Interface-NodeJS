
const Router = require('koa-router');
const router = new Router();


// use postman to set params
router.post('/v1/:id/classic/latest', (ctx, next) => {

  ctx.body = {key: 'classic'}
});

module.exports = router;