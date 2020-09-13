const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')
const userControllers = require('./controllers/userControllers');

const app = express();
const PORT = 3000;

//handle parsing request body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// statically serve everything in the build folder on the route '/build'
app.use('/build', express.static(path.join(__dirname, '../build')));

// handle requests to login 
// route to controller 
app.post('/api/login',
  userControllers.verifyUser,
  (req,res) => {
    res.status(200).send(res.locals.login)
})

//handle user sign up request
//route them to controller
app.post('/api/signup', userControllers.createUser, (req, res) => {
  res.status(200).send(/* send back to client the main page */);
});


// route to get all info from posts db
app.get('/api/posts' )

// route to create posts in postgresl db
app.post('/api/posts',
  userControllers.createPost,
  (req,res) => {
  // middleware to create posts in db
  res.status(200).send(res.locals.post) // respond with all post info
})

// catch all route handler
app.use((req,res) => res.sendStatus(404))

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
})