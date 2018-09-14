//app.js
const Hapi = require('hapi');
const config = require('./config');
const routesHelloHpi = require('./routes/hello-hapi');
require('env2')('./.env')
const server = new Hapi.Server();
//配置服务器启动 host 与端口
server.connection({
  port: config.port,
  host: config.host,
});

const init = async () => {
  server.route([
    //创建一个简单的hello hapi 窗口
    ...routesHelloHpi,
  ]);
  //启动服务
  await server.start();
  console.log(`Server running at:${server.info.uri}`);
};
init();
