const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')
const userControllers = require('./controllers/userControllers');
<<<<<<< HEAD
const { EEXIST } = require('constants');
const app = express();
const PORT = 3000;
=======

const app = express();
const PORT = 3000;

>>>>>>> 7f32929bc0146b51cdab427f78f68bde4d5abb5b

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
<<<<<<< HEAD
app.post('/api/signup',
 userControllers.queryNewUser,
 userControllers.createNewUser, 
 (req, res) => {
  res.status(200).json(res.locals.createuser)
});

// catch all route handler
app.use((req,res) => res.sendStatus(402))

//get req to get all posts in the post table
=======
app.post('/api/signup', userControllers.createUser, (req, res) => {
  res.json(`User created! Welcome!`)
});

// catch all route handler
app.use((req, res) => res.sendStatus(404));
>>>>>>> 7f32929bc0146b51cdab427f78f68bde4d5abb5b

// global event handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: err },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log('Server listening on port ' + PORT);
});
