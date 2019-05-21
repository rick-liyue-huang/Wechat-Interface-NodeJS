
const Koa = require('koa');
const InitManager = require('./core/init');
const parser = require('koa-bodyparser');
const catchError = require('./middlewares/exception');

const app = new Koa();
app.use(catchError);
// console.log(process.cwd()); // can be seen on debug
app.use(parser());

// 将这些方法放到类中，保持代码的整洁
InitManager.initCore(app);

app.listen(3000);