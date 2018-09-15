// config/index.js
const { env } = process;
// console.log(env);
const config = {
  host: env.HOST,
  port: env.PORT,
  jwtSecret: env.JWT_SECRET,
}
module.exports = config;