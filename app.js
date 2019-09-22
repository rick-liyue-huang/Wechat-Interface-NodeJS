
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
const Router = require('koa-router');
const app = new Koa();
const router = new Router();

router.get('/classic/latest', (ctx, next) => {
  ctx.body = {key: 'classic'};
});



app.use(router.routes());

// app.use(async (ctx, next) => {
//   console.log(ctx.path);
//   console.log(ctx.method);
//   if(ctx.path == '/classic/latest' && ctx.method === 'GET') {
//     ctx.body = {key: 'classic'};
//   }
//   await next();
// });

app.listen(3000);














