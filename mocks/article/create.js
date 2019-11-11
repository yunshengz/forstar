module.exports = async function({ req, res, db }) {
  const { title, content } = req.body
  db
    .get('article')
    .insert({ title, content })
    .write().id

  res.json({
    error: 0
  })
}
