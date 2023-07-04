const express=require('express');
const fs=require('fs')
const data=JSON.parse(fs.readFileSync('data.json','utf-8'))
const product=data.products;
const server=express();
server.get('/',(req,res)=>{  
       res.send(product)  //server se hmko kya chaiye waho bejh do
     //res.redirect('https://www.youtube.com/watch?v=ChVE-JbtYbM&t=7914s');
})
server.put('/',(req,res)=>{
       res.send(product.id)
})
server.post('/',(req,res)=>{
       res.send(product.title)
})
server.patch('/',(req,res)=>{
       res.send(product.price)
})
server.delete('/',(req,res)=>{
       res.json({type:'delete'})
})
server.listen(8080,()=>{
       console.log('server started');
     
})