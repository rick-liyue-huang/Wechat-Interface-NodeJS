
const Koa = require('koa');
// const requireDirectory = require('require-directory');
// const Router = require('koa-router');
const InitManager = require('./core/init');

// manual import routers
// const classic = require('./api/v1/classic');
// const books = require('./api/v1/books');

const app = new Koa();

// get absolute path
process.cwd();

// requireDirectory(module, './app/api', {visit: whenLoadModule});

// function whenLoadModule(obj) {
//   if(obj instanceof Router) {
//     app.use(obj.routes()); // check lin CMS
//   }
// }

InitManager.initCore(app);

// manual register routers
// app.use(classic.routes());
// app.use(books.routes());





app.listen(3000);