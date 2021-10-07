const express=require('express');
const app=express();
const port=3003;
const cors=require('cors');
const bodyParser=require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())
app.use(cors());

app.get('/', (req, res)=> {
    res.send("손소독");
})

app.post('/ssd', (req, res)=> {
    const server_id=req.body.getid;
    console.log(server_id);
})

app.listen(port, ()=> {
    console.log(`Connect at http://127.0.0.1:${port}`);
})

