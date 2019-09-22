
// // import koa
// const Koa = require('koa');
// const axios = require('axios');

// // use koa
// const app = new Koa(); // application object
// // can use middleware
// // middleware is a function
// function test () {
//   console.log('test');
// }

// // register middleware
// app.use(async (ctx, next) => {
//   console.log();
//   const result = await next();
//   // result.then(res => {
//   //   console.log(res);
//   // })
//   // await -> 求值 res
//   // await 堵塞当前线程
//   console.log(result);
//   console.log(ctx.r);
//   console.log(2);
// });
// // ctx -> context, next -> next middleware 
// app.use(async (ctx, next) => {
//   console.log(3);
//   console.log('test1');
//   // await next();
//   // 读文件，发送http 请求
//   const start = Date.now();
//   const res = await axios.get('http://www.google.com');
//   // console.log(res);
//   // ctx.body(res.data);
//   ctx.r = res;
//   const end = Date.now();
//   console.log(end - start);
//   console.log(4);
//   return 'abc';
// });

// // next 的调用结果一定是 promise
// // async 函数，就会包装结果为promise
// app.listen(3000);


const Koa = require('koa');
const InitManager = require('./core/init');

const app = new Koa();
// const router = new Router();

// export all the modules from the required directory

// const classic = require('./api/v1/classic');
// const book = require('./api/v1/book');

// app.use(async (ctx, next) => {
//   if(ctx.method === 'GET' && ctx.path === '/classic/latest') {
//     ctx.body = {key: 'latest'}
//   }
// });

// router.get('/classic/latest', (ctx, next) => {
//   ctx.body = {key: 'classic'}
// });

// app.use(router.routes());
// app.use(classic.routes());
// app.use(book.routes());

InitManager.initCore(app);

app.listen(3000);
















