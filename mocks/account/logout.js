module.exports = async function({ res }) {
  res.clearCookie('auth')
  res.json({
    error: 0,
    payload: {}
  })
}
