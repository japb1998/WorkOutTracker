let express = require('express');
const logger = require('morgan');
const route = require('./routes');
let app = express();
let {Workout} = require('./models')
const PORT = process.env.PORT || 3001;
let mongoose = require('mongoose');
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use(route);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutdb", {
  useNewUrlParser: true,
  useFindAndModify: false
}).then(
    app.listen(PORT,()=>{
        console.log(`listening to port ${PORT}`)
    })
)
