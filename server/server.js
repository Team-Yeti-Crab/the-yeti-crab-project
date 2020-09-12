const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')
const userControllers = require('./controllers/userControllers');
const app = express();
const PORT = 3001;


//handle parsing request body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// serve from build folder with route '/build'
app.use('/build', express.static(path.join(__dirname, '../build')));

//handle login request
app.post('/api/login', 
  userControllers.logIn,
 (req,res) => {
  res.json(res.locals.login);
})

//handle signup request
app.post('api/signup', userControllers.createUser, (req, res) => {
  res.json(`User created! Welcome!`)
});

// catch all route handler
app.use((req,res) => res.sendStatus(400))

// global event handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred, Global error handler' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  // console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log('Server listening on port ' + PORT);
})