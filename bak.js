
const Koa = require('koa');

// 应用程序对象
const app = new Koa();

// function test() {
//   console.log('test');
// }

// 注册中间件 - use - 中间件之间如果顺序执行就需要 next()
// app.use(async (ctx, next) => {
//   // test();
//   console.log(1);
//   // const a = next(); // next() 被返回一个Promise 对象
//   // a.then(res => {
//   //   console.log(res); // abc
//   // })
//   // console.log(a); // Promise{'abc'}

//   const aa = await next();
//   // const b = await 100*6;
//   console.log(aa); // abc
//   // console.log(b);
//   console.log(2);
// });

// app.use((ctx, next) => {
//   console.log(ctx.request.url);
//   console.log(ctx.query);
//   next();
// })

app.use(async (ctx, next) => {
  // console.log(3);
  // ctx.body = {name: 'rick'}
  // 对资源的操作就是异步的
  const axios = require('axios');
  const start = Date.now();
  const res = await axios.get('http://www.google.com'); //不加 async await 异步，因此不堵塞
  const end = Date.now();
  console.log(end - start);
  console.log(res);
  // console.log(4);
  // return 'abc';
});

// 启动 这个对象
app.listen(3000);

// await 可以当做求值关键字，就是将 a.then(res => {}), 就是得到 res的值, 也可以得到表达式的值
// await 可以实现等待

// //不加 async await 异步，因此不堵塞
// 如果加入 async await，则会堵塞线程，因此必须等待当前的线程结束，这样就变成了同步

// 必须加入 async 是因为 里面使用了await。


const Koa = require('koa');

const app = new Koa();

app.use(async (ctx, next) => {
  // console.log(1);
  await next();
  const r = ctx.res;
  console.log(r);
  // console.log(2);
  // 前提：计时
});

app.use(async (ctx, next) => {
  // console.log(3);
  const axios = require('axios');
  const res = await axios.get('http://www.google.com');
  ctx.r = res;
  await next();
  // console.log(4);
});

app.listen(3000);


const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

app.use(router.routes());

// callback is middleware

router.get('/classic/latest', (ctx, next) => {
  console.log(ctx.url);
  ctx.body = {url: ctx.url, path: ctx.path, query: ctx.query}
})

// app.use(async (ctx, next) => {
//   console.log(ctx.path);
//   console.log(ctx.method);
//   console.log(ctx.query);
//   console.log(ctx.url);
//   if(ctx.method === 'GET' && ctx.path === '/classic/latest') {
//     ctx.body = {ok: ctx.path}
//   }
// });

app.listen(3000, () => {
  console.log('the server is listening on 3000');
});

// get post put delete

const Koa = require('koa');
const PORT = 3000;
const classic = require('./app/api/v1/classic');
const books = require('./app/api/v1/books');

const app = new Koa();

app.use(classic.routes());
app.use(books.routes());

app.listen(3000, () => {
  console.log(`this server is listening on port of ${PORT}`);
});


const Koa = require('koa');
const Router = require('koa-router');
const requireDirectory = require('require-directory');

const app = new Koa();

function whenLoadModules (obj) {
  // determin whether it is Router
  if(obj instanceof Router) {
    app.use(obj.routes());
  }
}

// const modules = requireDirectory(module, './app/api/v1', {visit: whenLoadModules});
// console.log(modules);

// use requireDirectory to get all the modules
requireDirectory(module, './app/api/v1', {visit: whenLoadModules})


app.listen(3000);

/*

// 设计一种机制，监听任何的异常

function f1() {
  try {
    f2()
  } catch (e) {
    throw new Error('f1 e');
  }
}

function f2() {
  try {
    f3()
  } catch (e) {
    throw new Error('f2 e')
  }
}

function f3() {
  try {
    1/a
  } catch(e) {
    throw new Error('f3 e');
  }
  return 'succss';
  
}
// console.log(f3());
f1();

// 函数设计
// 判断出异常 return fasle null
// throw new Error(): preferred 

// 当调用 别人的库的时候就需要try catch




*/ 

/*
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

  // abc // simulate unknown exception
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

*/