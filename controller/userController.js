module.exports = {
  /**
   * 登录方法
   * @param {*} ctx 
   */
  async signIn(ctx) {
    ctx.body = {
      success: true,
      message: '提交成功'
    }
  }
}