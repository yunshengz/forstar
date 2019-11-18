module.exports = async function({ req, res, db }) {
  if (!req.cookies.auth) {
    res.json({
      error: 601,
      message: '未登陆'
    })
    return
  }
  const { id, title, tags, desc } = req.body
  db.get('album')
    .find({ id })
    .assign({
      title,
      tags,
      desc
    })
    .write()

  res.json({
    error: 0
  })
}
