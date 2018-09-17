// config/index.js
const { env } = process;
// console.log(env);
const config = {
  host: env.HOST,
  port: env.PORT,
  jwtSecret: env.JWT_SECRET,
  wxAppid : env.WX_APPID,
  wxSecret: env.WX_SECRET,
  wxMchid: env.WX_MCHID,
  wxPayApiKey:env.WX_PAY_API_KEY
}
module.exports = config;