const db = require('../models/usersModel')

const userController = {};

userController.createUser = (req, res, next) => {
  const string = `SELECT * FROM users`;
  
  //destructure req.body to get pertinent info
  const { email, firstName, lastName, username, password, confirmPassword } = res.body;
  
  //check if passwords match
  if (password === confirmPassword) {
    //check if email already exists or not
    if (db.query(string, (err, res) => res[0].email === email )) {
      //if it does return error msg back to client
      return next({
        error: 'Email already registered, please login or use another email.'
      })
    } else {
      //on success store the username and pw in database
      db.query(`INSERT INTO User VALUES (${Math.floor(Math.random() * 100)}, '${username}', '${password}', '${email}')`)
      db.query(`INSERT INTO Userinfo VALUES (${Math.floor(Math.random() * 100)}, '${firstName}', '${lastName}', '${email}', '${username}'`)
    }
  } else {
    //if passwords don't match 
    return next({
      error: 'Passwords not matching.'
    })
  }
  //send confirmation back to client
  return next()
}

module.exports = userController;