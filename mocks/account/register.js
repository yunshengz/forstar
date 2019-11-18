module.exports = async function({ req, res, db, sleep }) {
  const { username, password } = req.body
  await sleep(3000)
  if (
    db
      .get('user')
      .find({ username })
      .value()
  ) {
    res.json({
      error: 600,
      message: '用户名已被注册'
    })
  } else {
    const user = db
      .get('user')
      .insert({ username, password })
      .write()

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
