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

userControllers.createNewUser = async (req, res, next) => {
  //check if passwords don't match
  if (res.locals.createuser.password === res.locals.createuser.confirmPassword) {
    //do I need to include users_id for userinfo table
    //remove ``
    //add user to User and Userinfo tables
    //users works userinfo does not
    await db.query(`INSERT INTO Users (_id, username, password, email, first_name, last_name) 
    VALUES (${Math.floor(Math.random() * 1000)}, '${res.locals.createuser.username}', '${res.locals.createuser.password}', '${res.locals.createuser.email}', '${res.locals.createuser.firstName}', '${res.locals.createuser.lastName}')`)
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


userControllers.verifyUser = (req, res, next) => {
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
    } 
      // if password checks out send back user id
      if (user.rows[0].password === password) {
        console.log(user.rows[0]);
        //store in res.locals
        res.locals.login = user.rows[0]._id;
        // return next back to server.js
        return next();
      } else {
        res.locals.login = 'password is incorrect';
        return next();
      }
  })
}

userControllers.createPost = (req, res, next) => {
  // destructure title, pros, cons, date  from the req body
  const { _id, title, pros, cons, date, users_id } = req.body;
  let values = [_id, title, pros, cons, date, users_id];
  // create query to insert into db
  const postQuery = `INSERT INTO posts (_id, title, pros, cons, date, users_id)
                    VALUES ($1, $2, $3, $4, $5, $6)`
  db.query (postQuery, values, (err, post) => {
    if (err) {
      return next({ error: err })
    } 
    res.locals.posts = post;
    return next()
  })
}

userControllers.getAllPosts = (req, res, next) => {
  const allPosts = 'SELECT * FROM posts'
  db.query(allPosts, (err, posts) => {
    if (err) {
      return next({error: err})
    }
    // send back an array of objects
    res.locals.posts = posts.rows;
    return next();
  })
}

module.exports = userControllers;

