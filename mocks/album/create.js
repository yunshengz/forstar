module.exports = async function({ req, res, db }) {
  const { title, desc } = req.body
  const album = db
    .get('album')
    .insert({ title, desc })
    .write()

  res.json({
    error: 0,
    payload: album.id
  })
}
