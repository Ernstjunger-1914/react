const express=require('express');
const mysql=require('mysql');
const cors=require('cors');
const bcrypt=require('bcrypt');
const bodyPaser=require('body-parser');
const session=require('express-session');
const cookieParser=require('cookie-parser');

const app=express();
const saltRounds=10;

const db=mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '0000',
    database: 'data'
});

app.use(express.json());
app.use(cors({
    origin: ['http://localhost:3000'],
    methods: ['GET', 'POST'],
    credentials: true
}));

app.use(cookieParser());
app.use(bodyPaser.urlencoded({extended: true}));
app.use(session({
    key: 'userId',
    secret: 'subscribe',
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 60*60*24,
    },
}));

app.get('/', (req, res)=> {
    res.send("여기는 서버");
});

app.get('/login', (req, res)=> {
    if(req.session.user) {
        res.send({loggedIn: true, user: req.session.user});
    } else {
        res.send({loggedIn: false});
    }
});

app.post('/login', (req, res)=> {
    const username=req.body.username;
    const password=req.body.password;

    db.query("select * from accounts where username=?;", username, (err, result)=> {
        if(err) {
            res.send({err: err});
        }

        if(result.length>0) {
            bcrypt.compare(password, result[0].password, (error, response)=> {
                if(response) {
                    req.session.user=result;
                    console.log(req.session.user);
                    res.send(result);
                } else {
                    res.send({message: "worng username or password combination"});
                }
            })
        } else {
            res.send({message: "user doesn't exitst"});
        }
    });
});

app.post('/register', (req, res)=> {
    const username=req.body.username;
    const password=req.body.password;

    bcrypt.hash(password, saltRounds, (err, hash)=> {
        if(err) {
            console.log(err);
        }
    })

    bcrypt.hash(password, saltRounds, (err, hash)=> {
        db.query("insert into accounts(username, password) values(?, ?)", [username, hash], (err, result)=> {
            console.log(err);
        });
    });
});

app.listen(3033, ()=> {
    console.log("running on port 3033");
})

