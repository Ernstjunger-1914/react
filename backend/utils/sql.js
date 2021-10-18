const mysql=require('mysql');

function sql() {
    const db=mysql.createConnection({
        user: "root",
        host: "localhost",
        password: "0000",
        database: "appdata"
    });

    return db;
}


module.exports = {
    sql
}

