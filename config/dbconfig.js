var mysql = require('mysql');
var db = mysql.createConnection({
    host     : '127.0.0.1',
    user     : 'root',
    password : '',
    database : 'booking_app'
});

db.connect(function(err) {
    if (err) throw err;
});

module.exports = db;
