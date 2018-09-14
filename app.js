//app.js
const Hapi = require('hapi');
//这个env2引入必须放在最上面，不然每次起的服务都是随机的
require('env2')('./.env');
const config = require('./config');
const routesHelloHpi = require('./routes/hello-hapi');
const routesShops = require('./routes/shops');
const routesOrders = require('./routes/orders');
//引入自定义的hapi-swagger插件配置
const pluginHapiSwagger = require('./plugins/hapi-swagger');

const server = new Hapi.Server();
//配置服务器启动 host 与端口
server.connection({
  port: config.port,
  host: config.host,
});

const init = async () => {
  await server.register([
    //为系统使用hapi-swagger
    ...pluginHapiSwagger,
  ]);
  server.route([
    //创建一个简单的hello hapi 窗口
    ...routesHelloHpi,
    ...routesShops,
    ...routesOrders,
  ]);
  //启动服务
  await server.start();
  console.log(`Server running at:${server.info.uri}`);
};
init();
