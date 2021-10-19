const express=require('express');
const mysql=require('mysql');
const cors=require('cors');

const app=express();

const db=mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '0000',
    database: 'data'
});

app.use(express.json());
app.use(cors());

app.get('/', (req, res)=> {
    res.send("여기는 서버");
});

app.post('/login', (req, res)=> {
    const username=req.body.username;
    const password=req.body.password;

    db.query("select * from accounts where username=? and password=?", [username, password], (err, result)=> {
        if(err) {
            res.send({err: err});
        }

        if(result.length>0) {
            res.send(result);
        } else {
            res.send({message: "worng username or password combination"});
        }
    });
});

app.post('/register', (req, res)=> {
    const username=req.body.username;
    const password=req.body.password;

    db.query("insert into accounts(username, password) values(?, ?)", [username, password], (err, result)=> {
        console.log(err);
    });
});

app.listen(3033, ()=> {
    console.log("running on port 3033");
})

