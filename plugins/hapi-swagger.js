//plugins/hapi-swagger.js
const inert = require('inert');
const vision = require('vision');
const package = require('package');
const hapiSwagger = require('hapi-swagger');

module.exports = [
  inert,
  vision,
  {
    register: hapiSwagger,
    options: {
      info: {
        title: '接口文档',
        vesion: package.version,
      },
      //定义接口以tags 属性定义为分组
      grouping: 'tags',
      tags: [
        { name: 'tests', description: 'test related' },
        { name: 'shops', description: 'Store related' },
        { name: 'orders', description: 'Order related' },
        { name: 'users', description: 'user related' },
      ]
    }
  }
]