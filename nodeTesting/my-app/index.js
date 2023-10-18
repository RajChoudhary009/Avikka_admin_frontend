const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 9000;

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'avvika',
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the database');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

const sqlQuery = `SELECT * FROM brand`;

connection.query(sqlQuery, (err, results) => {
    if (err) throw err;
    console.log(results);
});


// Close the database connection when the app is terminated
// process.on('SIGINT', () => {
//     connection.end();
//     process.exit();
// });

