const db = require('../models/usersModel')

const userController = {};
  //destructure req.body to get pertinent info
  //check if passwords match
    //check if email already exists or not
      //if it does return error msg back to client
    //on success store the username and pw in database
    //send confirmation back to client
  //if passwords don't match 
    //trigger error
    //

userController.logIn = (req, res, next) => {
  // get username and password from req.body
  let username = req.body.username;
  let password = req.body.password;
  // query from user where id is equal to username
  const queryUser = 'SELECT * FROM users'
  // check if username exits by querying the database
  db.query(queryUser,(err,user) => {
    // if err send to global err handler 
    if (!user.username) {
      return next({err}) 
    } else {
      // if password checks out send them to the main page
      if (user[0].password === password) {
        // if it is send them to main page
        return next();
      }
    }
  })
}