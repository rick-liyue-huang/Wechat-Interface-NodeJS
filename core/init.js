
const Router = require('koa-router');
const requireDirectory = require('require-directory');

class InitManager {
  static initCore(app) {
    // entry mthod
    InitManager.app = app;
    InitManager.initLoadRouter()
  }
  static initLoadRouter() {

    // 1.  config path for developers
    const apiDirectory = `${process.cwd()}/app/api`;
    requireDirectory(module, apiDirectory, {visit: whenLoadModule});

    function whenLoadModule(obj) {
      if(obj instanceof Router) {
        InitManager.app.use(obj.routes()); // check lin CMS
      }
    }
  }
}

module.exports = InitManager;

