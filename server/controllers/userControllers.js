const db = require('../models/usersModel')

const userControllers = {};

//query user will query the db to check if that email already exists or not
userControllers.queryNewUser = async (req, res, next) => {
  //destructure req.body and assign variables to res.locals
  const { email, firstName, lastName, username, password, confirmPassword } = req.body;
  res.locals.createuser = { email, firstName, lastName, username, password, confirmPassword }
  let value = [email]

  const string = 'SELECT * FROM users WHERE email = $1';
  db.query(string, value, (err, data) => {
    if (err) return next(err)
    if (data.rows[0]) {
      if (data.rows[0].email === email) {
        res.locals.createuser.email = data.rows[0].email;
        return next({
        error: 'Email already registered, please login or use another email.'
      })}
    } else {      
      res.locals.createuser.email = email
      return next()
    }
  })
}

userControllers.createNewUser = (req, res, next) => {
  //check if passwords don't match
  if (res.locals.createuser.password === res.locals.createuser.confirmPassword) {
    //do I need to include users_id for userinfo table
    //remove ``
    //add user to User and Userinfo tables
    //users works userinfo does not
    db.query(`INSERT INTO Users (_id, username, password, email) 
    VALUES (${Math.floor(Math.random() * 100)}, '${res.locals.createuser.username}', '${res.locals.createuser.password}', '${res.locals.createuser.email}')`)
    // .then(() => {
    //   db.query(`INSERT INTO Userinfo (_id, firstname, lastname, email, users_id, username) 
    //   VALUES (${Math.floor(Math.random() * 100)}, '${res.locals.createuser.firstName}', '${res.locals.createuser.lastName}', '${res.locals.createuser.email}', '2', '${res.locals.createuser.username}'`)
    // })
    .then(() => {
      //send confirmation back to client
      res.locals.createuser = `user created successfully`
      return next()
    })
  }
  //if passwords don't match 
  return next({
    error: 'Passwords not matching.' 
  })
}


userControllers.logIn = (req, res, next) => {
  // get username and password from req.body
  let username = req.body.username;
  let password = req.body.password;
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
                 