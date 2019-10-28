module.exports = async function({ req, res, sleep }) {
  const { timeout } = req.query
  if (timeout) {
    await sleep(timeout)
  }
  res.json({
    a: 1,
    b: 2
  })
}
