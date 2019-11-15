module.exports = async ({ res, db, sleep }) => {
  await sleep(3000)
  const list = db.get('album').val()
  res.json({
    error: 0,
    payload: list
  })
}
