const db = require('../models/usersModel')

const userControllers = {};

userControllers.createUser = (req, res, next) => {
  console.log('in createUser')
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
    //on success store the username and pw in database
    //send confirmation back to client
  //if passwords don't match 
    //trigger error
    //

userControllers.logIn = (req, res, next) => {
  console.log('hello')
  // get username and password from req.body
  const username = req.body.username
  const password = req.body.password;
  // store username as an array in values
  const values = [username];
  // query from user where id is equal to username
  const queryUser = 'SELECT * FROM users WHERE username = $1'
  // check if username exits by querying the database
  db.query(queryUser, values, (err,user) => {
    // if err send to global err handler 
    if (!user.rows[0].username) {
      return next({ 
        error: err 
      }) 
    } else {
      // if password checks out send back user id
      if (user.rows[0].password === password) {
        //store in res.locals
        res.locals.login = user.rows[0]._id;
        // return next back to server.js
        return next();
      } else {
        res.locals.login = 'password is incorrect';
        return next();
      }
    }
  })
}

module.exports = userControllers;
