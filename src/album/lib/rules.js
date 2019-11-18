const rules = {
  title: [
    {
      required: true,
      message: '请输入标题'
    }
  ],
  cover: [
    {
      required: true,
      message: '请选择或上传封面'
    }
  ],
  tags: [
    {
      required: true,
      message: '请设置标签'
    }
  ],
  desc: [
    {
      required: true,
      message: '请输入专辑描述信息'
    }
  ],
  isPublic: [
    {
      required: true,
      message: '请选择访问权限'
    }
  ]
}
export default rules
