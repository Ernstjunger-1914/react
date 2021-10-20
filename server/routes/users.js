var express = require('express');
var router = express.Router();
const MySQL = require("../utils/mysql");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/auth', (req, res) => {
    const id=req.body.userid;
    const passwd=req.body.password;
    const db = MySQL.getConn();

    if(id&&passwd) {
        db.query("select * from nodelogin.accounts where id=? and passwd=?", [id, passwd], (err, result, fields)=> {
            if(result.length>0) {
                req.session.loggedin=true;
                req.session.id=id;
                console.log('login success!');
                res.send({
                    status: true
                });
            } else {
                console.log('login fail!');
                res.send({
                    status: false
                });
            }
            res.end();
        });
    } else {
        res.send("Please enter id and password");
        res.end();
    }
});

router.get('/home', (req, res)=> {
    if(req.session.loggedin) {
        res.send("Welcome back, "+req.session.id+"!");
    } else {
        res.send("Please login to view this page!");
    }
    res.end();
});

module.exports = router;
