module.exports = async ({ req, res, db, sleep }) => {
  if (!req.cookies.auth) {
    res.json({
      error: 601,
      message: '未登陆'
    })
    return
  }
  await sleep(3000)
  const list = db.get('album').value()
  res.json({
    error: 0,
    payload: {
      count: list.length,
      list
    }
  })
}
