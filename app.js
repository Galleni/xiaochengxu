//app.js
const Hapi = require("hapi");
const hapiAuthJWT2 = require("hapi-auth-jwt2");
//这个env2引入必须放在最上面，不然每次起的服务都是随机的
require("env2")("./.env");
const config = require("./config");
//路由配置
const routesHelloHpi = require("./routes/hello-hapi");
const routesShops = require("./routes/shops");
const routesOrders = require("./routes/orders");
const routesUsers = require("./routes/users");
//引入自定义的hapi-swagger插件配置
const pluginHapiSwagger = require("./plugins/hapi-swagger");

const pluginHapiPagination = require("./plugins/hapi-pagination");

const pluginHapiAuthJWT2 = require("./plugins/hapi-auth-jwt2");

const server = new Hapi.Server();
//配置服务器启动 host 与端口
server.connection({
  port: config.port,
  host: config.host
});

const init = async () => {
  //注册插件
  await server.register([
    //为系统使用hapi-swagger
    ...pluginHapiSwagger,
    pluginHapiPagination,
    hapiAuthJWT2
  ]);
  pluginHapiAuthJWT2(server);
  // 注册路由
  server.route([
    //创建一个简单的hello hapi 窗口
    ...routesHelloHpi,
    ...routesShops,
    ...routesOrders,
    ...routesUsers
  ]);
  //启动服务
  await server.start();
  console.log(`Server running at:${server.info.uri}`);
};
init();
