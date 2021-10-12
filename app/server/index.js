const express=require('express')
const app=express();
const mysql=require('mysql');
const bodyParser=require('body-parser');
const cors=require('cors');

const db=mysql.createPool({
    host: "127.0.0.1",
    user: "root",
    password: "0000",
    database: "ssd"
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res)=> {
    res.send("손소독");
});

app.post('/api/insert', (req, res)=> {
    const postname=req.body.postname;
    const main=req.body.main;

    const sqlinsert="insert into ssd.content(content_name, main) values(?, ?)"
    db.query(sqlinsert, [postname, main], (err, result)=> {
        console.log(result);
    });
});

app.listen(3033, ()=>{
    console.log("Running on port 3033");
});

