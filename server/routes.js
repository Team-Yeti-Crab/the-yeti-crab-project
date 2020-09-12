const express = require('express');
const userControllers = require('./controllers/userControllers');

const router = express.Router();

router.post('/login', (req, res) => {
  console.log('im in');
  return next();
},
  userControllers.logIn,
 (req,res) => {
  res.json(res.locals.login);
})