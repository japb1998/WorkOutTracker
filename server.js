let express = require('express');
const logger = require('morgan');
const routes = require('./routes/index')
let app = express();
let PORT = PORT.env || 3000;
let mongoose = require('mongoose');
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutdb", { useNewUrlParser: true }).then(
    app.listen(PORT).then(()=>{
        console.log(`listening to port ${PORT}`)
    }).catch((err)=>{
        console.log(err);
    })
)

