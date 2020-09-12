const db = require('../models/usersModel')

const userControllers = {};

userControllers.createUser = (req, res, next) => {
  const string = `SELECT * FROM users`;
  //destructure req.body to get pertinent info
  const { email, firstName, lastName, username, password, confirmPassword } = res.body;
  
  //check if passwords match
  if (password === confirmPassword) {
    //check if email already exists or not
    if (db.query(string, (err, res) => res.rows[0].email === email )) {
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
  res.locals.createuser = `user created successfully`
  return next()
}

userControllers.logIn = (req, res, next) => {
  // get username and password from req.body
  let username = req.body.username;
  let password = req.body.password;
  let values = [username];
  // query from user where id is equal to username
  const queryUser = 'SELECT * FROM users WHERE username = $1'
  // check if username exits by querying the database
  db.query(queryUser, values, (err,user) => {
    console.log(user.rows)
    // if err send to global err handler 
    if (!user.rows[0].username) {
      return next({ 
        error: err 
      }) 
    } else {
      // if password checks out send them to the main page
      if (user.rows[0].password === password) {
        // if it is send them to main page
        res.locals.login = user.rows._id;
        return next();
      } else {
        res.locals.login = `password is incorrect`;
        return next()
      }
    }
  })
}

module.exports = userControllers;
                 