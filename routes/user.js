
const express = require('express');

//remember this 
const router = express.Router();
const passport=require('passport');
const usersController = require('../controllers/user_controller');
router.get('/sign-up',usersController.signUp);

router.get('/sign-in',usersController.signIn);
// router.get('/sign-out',usersController.destroySession);
router.post('/create',usersController.create); 

//use passport as a middleware to authenticate
router.post('/create-session',passport.authenticate(
    'local',
    {failureRedirect:'/users/sign-in'},
),usersController.createSession);


module.exports=router;