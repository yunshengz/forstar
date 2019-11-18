module.exports = async function({ req, res, db, sleep }) {
  if (!req.cookies.auth) {
    res.json({
      error: 601,
      message: '未登陆'
    })
    return
  }
  await sleep(3000)
  const { id } = req.query
  db.get('album')
    .remove({ id })
    .write()

  res.json({
    error: 0
  })
}
