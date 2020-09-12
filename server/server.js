const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const userController = require('./controllers/userControllers');

const app = express();
const PORT = 3000;

// handle requests to login
// app.post('api/login', (req,res) => {};
// grab username and password from req.body
// see if username and password are in the database
// if it is send them to main page
// if not, keep them at login page

//handle parsing request body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// handle requests to login
// route to controller
app.post('api/login', userController.logIn, (req, res) => {
  res.redirect('/main');
});

//handle user sign up request
//route them to controller
app.post('api/signup', userController.createUser, (req, res) => {
  res.status(200).send(/* send back to client the main page */);
});

// catch all route handler
app.use((req, res) => res.sendStatus(404));

// catch all errors
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  // console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log('Server listening on port ' + PORT);
});
