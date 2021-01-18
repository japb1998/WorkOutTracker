const router = require('express').Router();
const mongoose = require('mongoose');
const { workOut } = require('../models/workout');
const path = require('path');


router.get('/',(req,res)=>{
    res.sendFile(path.join( __dirname ,'../views/index.html'));
})
router.get('/exercise',(req,res)=>{
  
    res.sendFile(path.join( __dirname ,'../views/exercise.html'));
   
});
router.get('/stats',(req,res)=>{
  
    res.sendFile(path.join( __dirname ,'../views/stats.html'));
   
});

module.exports=router;