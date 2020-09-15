const db = require('../models/usersModel')

const cookieController = {};

cookieController.setCookie = (req, res, next) => {
  const randomCookieNumber = Math.floor(Math.random() * 100);
  res.cookie('yeti', randomCookieNumber).send('cookie is set');
  return next();
}

cookieController.setSSIDCookie = (req, res, next) => {
  const _id = req.body._id;
  const values = [_id]
  const queryId = 'SELECT * FROM users WHERE _id = $1'
  db.query(queryId , values, (err, data) => {
    if(err) {
      return next({ error: err})
    }
    if (!req.cookies.ssid) {
    res.cookie('yetissid', data.rows[0]._id, { httpOnly: true });
    }
    return next();
  })
}

module.exports = cookieController;