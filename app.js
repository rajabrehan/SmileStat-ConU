const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/survey', (req, res) => {
    const { mood, stress_level, comments } = req.body;
    // insert the data into the database
    // Connect to the database
    // insert the data into the database
    // here you can use any database driver/ORM you prefer, for example Mongoose for MongoDB
    // or Sequelize for MySQL
    //example with Mongoose
    const newSurvey = new Survey({
        mood,
        stress_level,
        comments