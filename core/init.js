
// use class to organize 
const Router = require('koa-router');
const requireDirectory = require('require-directory');

class InitManager {
  static initCore(app) {
    // entry method
    InitManager.app = app;
    InitManager.initLoadRouters(app)

  }
  // this is static method
  static initLoadRouters() {

    const apiDirectory = `${process.cwd()}/app/api`;

    function whenLoadModules(obj) {
      if (obj instanceof Router) {
        InitManager.app.use(obj.routes());
      }
    }
    
    requireDirectory(module, apiDirectory, {visit: whenLoadModules});
  }
}

module.exports = InitManager;