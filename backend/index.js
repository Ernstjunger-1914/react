const expres=require('express');
const app=expres();


app.post('/register', (req, res)=> {
    const userid=req.body.userid;
    const password=req.body.password;
  
    db.query("insert into data.user(userid, password) values(?, ?)", [userid, password], (err, result)=> {
      console.log(err);
    });
  });