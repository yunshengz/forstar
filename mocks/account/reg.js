module.exports = async function({ req, res, db }) {
  const { username, password } = req.body
  const id = db
    .get('account')
    .insert({ username, password })
    .write().id
  res.json({
    error: 0,
    payload: {
      id
    }
  })
}
