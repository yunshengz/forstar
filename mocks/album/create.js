module.exports = async function({ req, res, db }) {
  if (!req.cookies.auth) {
    res.json({
      error: 601,
      message: '未登陆'
    })
    return
  }
  const { title, tags, desc } = req.body
  const album = db
    .get('album')
    .insert({ title, tags, desc })
    .write()

  res.json({
    error: 0,
    payload: album.id
  })
}
