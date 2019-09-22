
const Router = require('koa-router');
const requireDirectory = require('require-directory');

class InitManager {

  static initCore(app) {
    // entry method
    InitManager.app = app;
    InitManager.initLoaderRouters();
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
}

module.exports = InitManager;