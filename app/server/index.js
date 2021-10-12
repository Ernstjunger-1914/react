const express=require('express')
const app=express();

app.get('/', (req, res)=> {
    res.send("손소독");
});

app.listen(3033, ()=>{
    console.log("Running on port 3033");
});

