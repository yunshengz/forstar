module.exports = async function({ req, res, db }) {
  const userid = req.cookies.auth
  if (userid) {
    const user = db
      .get('user')
      .find({ id: userid })
      .value()

    res.json({
      error: 0,
      userid,
      payload: user
    })
  } else {
    res.json({
      error: 601,
      message: '未登陆'
    })
  }
}
