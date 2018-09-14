// config/index.js
const { env } = process;
console.log(env);
module.exports = {
  host: env.HOST,
  port: env.PORT,
}