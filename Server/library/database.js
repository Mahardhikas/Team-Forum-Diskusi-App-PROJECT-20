// module.exports = {
//     multipleStatements  : true,
//     host                : 'localhost',
//     user                : 'root',
//     password            : '',
//     database            : 'discussion_forum_app'
// };

const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'discussion_forum_app',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = pool.promise(); // Menggunakan .promise() untuk menggunakan API berbasis Promise
