const express=require('express');
const path = require('path');
const server=express();
server.use(express.static('public'))
server.listen(8080,()=>{
       console.log('server started at 8080')
})
server.get('/file',(req,res)=>{
       console.log('hello ge request is here');
       //res.send('./index.html');
       res.sendFile(path.join(__dirname, 'index.html'));
})