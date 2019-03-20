const router = require('koa-router')()
const UserController = require('../controller/userController')

const routers = router
  .post('/signIn', UserController.signIn)

module.exports = routers