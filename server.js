const Koa = require('koa')
const Router = require('koa-router')
const app = new Koa()
const router = new Router({
  prefix: '/api'
})

router.post('/user/login', async(ctx, next) => {
  ctx.body = {
    success: true,
    message: '提交成功'
  }
})

app.use(router.routes()).use(router.allowedMethods())

app.listen(9000)