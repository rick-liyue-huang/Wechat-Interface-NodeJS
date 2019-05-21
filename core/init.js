
// use class to organize 
const Router = require('koa-router');
const requireDirectory = require('require-directory');

class InitManager {
  static initCore(app) {
    // entry method
    InitManager.app = app;
    InitManager.initLoadRouters(app);
    InitManager.loadHttpException();
    InitManager.loadConfig();
  }

  static loadConfig (path='') {
    const configPath = path || process.cwd() + '/config/config.js';
    const config = require(configPath);
    global.config = config;
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

  // define a global method to load exceptions, so it does not need to load exception in any model file.
  static loadHttpException() {
    const errors = require('./http-exception');
    global.errs = errors;
  }
}

module.exports = InitManager;