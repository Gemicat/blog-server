const Koa = require('koa')
const Router = require('koa-router')
const app = new Koa()
const routers = require('./router')

app.use(routers.routes()).use(routers.allowedMethods())

app.listen(9000)