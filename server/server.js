const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')
const userControllers = require('./controllers/userControllers');
const cookieController = require('./controllers/cookieController');


const app = express();
const PORT = 3000;

//handle parsing request body
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// serve from build folder with route '/build'
app.use('/build', express.static(path.join(__dirname, '../build')));

// add cookie to any requests to / 
// app.use('/', 
//   cookieController.setCookie,
//   (req,res) => {
//     res.sendStatus(200);
//   })git 
  
//handle login request
app.post('/api/login', 
  userControllers.verifyUser,
  cookieController.setSSIDCookie,
  (req,res) => {
    res.status(200).json(res.locals.login)
})

//handle signup request
app.post('/api/signup',
 userControllers.queryNewUser,
 userControllers.createNewUser, 
 (req, res) => {
  res.status(200).json(res.locals.createuser)
});


// get req to get all posts in the post table
app.get('/api/posts',
  userControllers.getAllPosts,
  (req, res) => {
  res.status(200).json(res.locals.posts)
})

// post req to create posts in posts table
app.post('/api/posts',
  // middleware to create posts
  userControllers.createPost,
  (req,res) => {
  // middleware to create posts in db
  res.status(200).json(res.locals.posts) // respond with all post info
})


// catch all route handler
app.use((req,res) => res.sendStatus(402))

//get req to get all posts in the post table
//req body has user id

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
})