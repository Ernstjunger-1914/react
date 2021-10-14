const mysql=require('mysql');

function getConn() {
            const connection = mysql.createPool({
            host: 'localhost',
            user: 'root',
            password: '0000',
            database: 'nodelogin'
        });

        return connection;
}


module.exports = {
    getConn
}