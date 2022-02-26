const Router = require('koa-router');
const router = new Router();

router.get("/getHomeData", (ctx, next) => {
  ctx.response.body = {
    code: 200,
    data: {
      list: [0,1],
      token: "12345"
    }
  }
  ctx.status = 200;
})


module.exports = router;