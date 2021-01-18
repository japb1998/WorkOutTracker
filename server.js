let express = require('express');
const logger = require('morgan');
const route = require('./routes/index')
let app = express();
const PORT = process.env.PORT || 3000;
let mongoose = require('mongoose');
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use(route);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutdb", { useNewUrlParser: true }).then(
    app.listen(PORT,()=>{
        console.log(`listening to port ${PORT}`)
    })
)

