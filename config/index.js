// config/index.js
const { env } = process;
// console.log(env);
const config = {
  host: env.HOST,
  port: env.PORT,
}
module.exports = config;