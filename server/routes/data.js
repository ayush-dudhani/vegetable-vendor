const router=require('express').Router();
const Data=require('../models/data');
const auth=require('../middlewares/auth');
const {login,register}=require('../controllers/userControllers')
// const bcrypt=require('bcrypt')

module.exports=router