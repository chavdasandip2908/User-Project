// below code is Connect MySQL DataBase
const mysql = require("mysql");
const con = mysql.createConnection({
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: 'Sandip@123',
    database: 'User_DB'
});
// below code check database connected or not connected
// con.connect((err) => {
//     if (err) {
//         console.error("DataBase Not Conected ");
//     } else {
//         console.log("DataBase Connected Successfully");
//     }
// });

module.exports = con;