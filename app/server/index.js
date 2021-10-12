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

app.get('/api/get', (req, res)=> {
    const sqlselect="select * from ssd.content";
    db.query(sqlselect, (err, result)=> {
        res.send(result);
    });
});

app.post('/api/insert', (req, res)=> {
    const postname=req.body.postname;
    const main=req.body.main;

    const sqlinsert="insert into ssd.content(postname, main) values(?, ?)"
    db.query(sqlinsert, [postname, main], (err, result)=> {
        console.log(result);
    });
});

app.delete('/api/delete/:postname', (req, res)=> {
    const name=req.params.postname;
    const sqldelete="delete from ssd.content where postname=?";

    db.query(sqldelete, name, (err, result)=> {
        if(err) {
            console.log(err);
        }
    });
});

app.put('/api/update', (req, res)=> {
    const name=req.body.postname;
    const main=req.body.main;
    const sqlupdate="update content set main=? where postname=?";

    db.query(sqlupdate, [main, name], (err, result)=> {
        if(err) {
            console.log(err);
        }
    });
});

app.listen(3033, ()=>{
    console.log("Running on port 3033");
});

