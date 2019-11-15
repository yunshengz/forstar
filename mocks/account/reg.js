module.exports = async function({ req, res, db }) {
  const { username, password } = req.body
  const user = db
    .get('account')
    .insert({ username, password })
    .write()

  res.json({
    error: 0,
    payload: {
      auth: user.id
    }
  })
}
