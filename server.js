const Koa = require('koa')
const app = new Koa()
const routers = require('./router')
const config = require('./project.config')

app.use(routers.routes()).use(routers.allowedMethods())

app.listen(config.port)