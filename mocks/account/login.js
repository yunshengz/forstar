module.exports = async function({ req, res, db }) {
  const { username, password } = req.body
  const user = db
    .get('user')
    .find({ username, password })
    .value()

  if (!user) {
    res.json({
      error: 600,
      message: '账号有误'
    })
  } else {
    res.cookie('auth', user.id, {
      expires: new Date(Date.now() + 365 * 24 * 3600000)
    })
    res.json({
      error: 0,
      payload: {
        auth: user.id
      }
    })
  }
}
