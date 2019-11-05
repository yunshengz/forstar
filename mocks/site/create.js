module.exports = async function({ res }) {
  res.json({
    error: 405,
    message: '请登录后操作'
  })
}
