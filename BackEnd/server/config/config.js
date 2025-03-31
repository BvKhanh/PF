const mysql = require('mysql2');

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "12345678",
    database: "pf"
});

module.exports = db;
