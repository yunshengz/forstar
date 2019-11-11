module.exports = async ({ res, db, sleep }) => {
  await sleep(3000)
  const data = db.get('article')
  res.json(data)
}
