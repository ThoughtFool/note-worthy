const express = require ('express');
const MongoClient = require('mongodb');
const bodyParser = require('body-parser');
const db = require('./config/db');

const app = express();

const PORT = 8000;

app.use(bodyParser.urlencoded({ extended: true }))

MongoClient.connect(db.url, (err, database) => {
    if (err) return console.log(err)
    require('./app/routes')(app, database);
    app.listen(PORT, () => {
        console.log("We are live on " + PORT);
    })
})

// MongoClient.connect('mongodb://localhost:27017', (err, client) => {
//     // Client returned
//     var db = client.db('mytestingdb');
// });