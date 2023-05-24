const mysql =require('mysql')
const config = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'contactless'
});
// connect to database
config.connect(); 
module.exports = config;