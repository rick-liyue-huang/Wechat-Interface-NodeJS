
const Router = require('koa-router');
const requireDirectory = require('require-directory');

class InitManager {

  static initCore(app) {
    // entry method
    InitManager.app = app;
    InitManager.initLoaderRouters();
    // InitManager.loadHttpException();
  }
  static initLoaderRouters(app) {

    // path config
    const apiDirectory = `${process.cwd()}/app/api`;
    console.log(process.cwd());
    requireDirectory(module, apiDirectory, 
      {visit: whenLoadModule});

    function whenLoadModule(obj) {
      if(obj instanceof Router) {
        InitManager.app.use(obj.routes())
      }
    }

  }

  // just one try
  static loadHttpException() {
    const errors = require('./http-exception');
    global.errs = errors;
  }
}

module.exports = InitManager;