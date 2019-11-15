module.exports = async function({ req, res, db }) {
  const { username, password } = req.body
  const user = db
    .get('user')
    .find({ username, password })
    .value()

  if (user) {
    res.json({
      error: 100,
      message: '用户不存在'
    })
  } else {
    res.json({
      error: 0,
      payload: {
        auth: user.id
      }
    })
  }
}
