const koa = require('koa');
// import mockjs from 'mockjs';
const homeRouter = require('./routers/home');

const parsed = require("dotenv").config({
  path: '.env.development'
}).parsed;
let port;
if(parsed.REACT_APP_DEV_BaseURL) {
  port = parsed.REACT_APP_DEV_BaseURL.split(":")[2].split('"')[0];
}
const app = new koa();
//跨域设置
const cros = (ctx, next) => {
  ctx.set("Access-Control-Allow-Origin", "*");
  next();
}
app.use(cros);

app.use(homeRouter.routes());
app.use(homeRouter.allowedMethods())

app.listen(port,()=>{
	console.log(`mock服务开启成功,拦截端口${port}`)
})