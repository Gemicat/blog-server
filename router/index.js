const {
  API_PREFIX
} = require('../utils/constant')
const router = require('koa-router')({
  prefix: API_PREFIX
})
// 用户模块
const user = require('./user')

router.use('/user', user.routes(), user.allowedMethods())

module.exports = router