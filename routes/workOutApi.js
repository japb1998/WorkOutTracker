const router = require('express').Router();
const { Workout } = require('../models');


router.get('/workouts',(req,res)=>{
   
        Workout.find({}).then((workOutData )=>{
            res.json(workOutData);
        }).catch((err)=>{
throw err;
        })
});

router.post('/workouts',({body},res)=>{
   Workout.create(body).then((workOutData)=>{
       res.json(workOutData);
   }).catch((err)=>{
       throw err;
   })
});

router.put('/workout/:id',(req,res)=>{
Workout.update({_id:req.params.id},{ $set:{ exercices: req.body }}).then((response)=>{
    res.send(response)
})
})
 
module.exports = router;