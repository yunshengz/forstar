module.exports = async function({ req, res, db, sleep }) {
  if (!req.cookies.auth) {
    res.json({
      error: 601,
      message: '未登陆'
    })
    return
  }
  await sleep(2000)
  const { id } = req.query
  const album = db
    .get('album')
    .find({ id })
    .value()

  res.json({
    error: 0,
    payload: album
  })
}
