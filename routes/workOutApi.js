const router = require('express').Router();
const {
    Workout
} = require('../models');


router.get('/workouts', (req, res) => {

    Workout.aggregate([{

        $addFields: {
            totalDuration: {
                $sum: "$exercises.duration"
            }
        }
    }]).then((workOutData) => {
        res.json(workOutData);
    }).catch((err) => {
        throw err;
    })
});

router.post('/workouts', ({
    body
}, res) => {
    Workout.create(body).then((workOutData) => {
        res.json(workOutData);
    }).catch((err) => {
        throw err;
    })
});

router.put('/workouts/:id', (req, res) => {
    Workout.update({
        _id: req.params.id
    }, {
        $push: {
            exercises: {
                $each: [req.body],
                $position: 0
            }
        }
    }).then((response) => {
        res.send(response)
    }).catch((err) => {
        res.status(400).send(err.message);
    })
});

router.get('/workouts/range',(req,res)=>{
    Workout.aggregate([{

        $addFields: {
            totalDuration: {
                $sum: "$exercises.duration"
            }
        }
    }]).limit(10).then((workOutData) => {
        res.json(workOutData);
    }).catch((err) => {
        throw err;
    })
})


module.exports = router;