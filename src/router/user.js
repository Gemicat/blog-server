const router = require('koa-router')()
const UserController = require('../controller/user')

const routers = router
  .post('/signIn', UserController.signIn)

module.exports = routers