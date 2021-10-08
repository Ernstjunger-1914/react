const express=require('express');
const cors=require('cors');
const app=express()
const port=3033;

app.use(cors());
app.use('/login', (req, res)=> {
    res.send({
        token: 'ssd1234'
    });
});

app.listen(port, ()=>{
    console.log(`API is running on http://127.0.0.1:${port}`)
})
