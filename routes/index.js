const express = require('express');

//remember this 
const router = express.Router();
const homeController = require('../controllers/index_controller');
router.get('/',homeController.home);
router.use('/users',require('./user'));
module.exports=router;