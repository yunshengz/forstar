module.exports = async function({ req, res, db, sleep }) {
  const { username, password } = req.body
  const id = db
    .get('account')
    .insert({ username, password })
    .write().id

  await sleep(3000)
  res.json({
    error: 0,
    payload: {
      id
    }
  })
}
