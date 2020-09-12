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