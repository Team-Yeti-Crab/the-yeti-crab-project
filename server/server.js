const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')

const app = express();
const PORT = 3000;


// handle requests to login 
app.post('api/login', (req,res) => {
  // grab username and password from req.body
  // see if username and password are in the database 
  // if it is send them to main page
  // if not, keep them at login page

})

//handle user sign up request
//route them to controller
app.post('API/SIGNUP', (req, res) => {

})

app.listen(PORT, () => {
  console.log('Server listening on port ' + PORT);
})