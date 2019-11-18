const rules = {
  account: [
    {
      required: true,
      message: '请输入用户名、邮箱或手机号'
    }
  ],
  username: [
    {
      required: true,
      message: '请输入用户名'
    }
  ],
  email: [
    {
      required: true,
      message: '邮箱必须填写'
    }
  ],
  emailCode: [
    {
      required: true,
      message: '邮箱验证码必须填写'
    }
  ],
  password: [
    {
      required: true,
      message: '密码必须填写'
    }
  ]
}
export default rules
