const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

var corsOptions = {
    origin: "http://localhost:8081"
}

//Middleware
app.use(cors(corsOptions));
// parse requests of content type - application/json
app.use(bodyParser.json());
// parse requests of content type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));


//Database Connection
const db = require('./models')
const dbConfig = require('./config/db.config')

//Mongodb Connection String
db.mongoose.connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`)
.then(() => {
    console.log("Successfully connected to Mongodb!")

    //Seed database here
    seedDatabase()
})
.catch(error => {
    console.error("Connection error: ", error)
})

//Default route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to my Vue Template project" })
})

//Routes
require('./routes/api/todo.routes')(app);

//Custom port for HEROKU compatibility
const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Server started on port: ${port}`));

//Functions
function seedDatabase() {
    //For future seeding purposes, fill in the following
}