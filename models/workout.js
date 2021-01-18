const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workOutSchema = new Schema({
    date: {
        type: Date,
        default: Date.now
    },
    exercises: 
        [{
            type: {
                type: String,
                require: true
            },
            name: {
                type: String,
                require: true,
            },
            duration: {
                type: Number,
                required: true,
            },
            weight: {
                type: Number,
                required: true
            },
            reps: {
                type: Number,
                required: true
            },
            sets: {
                type: Number,
                required: true,
            }
         } ]
    
});
const workOut = mongoose.model("workOut",workOutSchema);
module.exports = workOut;