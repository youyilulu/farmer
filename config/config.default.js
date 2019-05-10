'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '123456';

  // add your config here
  config.middleware = [];

  exports.sequelize = {
    dialect: 'mysql',
    hostname: '127.0.0.1',
    port: 3307,
    username: 'root',
    password: 'Abcd@1234',
    database: 'farmer_unittest',
  };

  return config;
};
