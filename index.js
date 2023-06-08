const express = require('express');
const app = express();
const phones= require('./phones.json');
const port = 5000;
const cors = require('cors');

app.use(cors());

app.get('/',(req,res)=>{
    res.send('Hello, from phone hunter')
});
app.get('/phones',(req,res)=>{
    res.send(phones)
});

app.get('/phones/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    // console.log(id);
    const phone = phones.find(singlePhone=> singlePhone.id===id) || 'Not Available';
    res.send(phone)

})
app.listen(port,()=>{
    console.log(`phone hunter server port :${port}`);
})