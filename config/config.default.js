/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1597409966317_3286';

  // add your middleware config here
  config.middleware = [];

  config.mysql = {
    client: {
      host: '106.54.193.152',
      user: 'root',
      password: 'woaini',
      port: '3306',
      database: 'flutterDemo',
  },
  app: true,
  agent: false
  }

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
