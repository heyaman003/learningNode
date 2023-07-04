const express=require('express');
const app=express();
//No default engine was specified and no extension was provided.
app.set('view engine','ejs')
app.get('/',(req,res,next)=>{
       console.log('here');
       //res.status(300).send('hii')
       //res.status(500).json({message:"hello"})
       //res.download('express.js')
       //for rendring file 
       //res.render('index')
       //now passing info to the user from server
       res.render('index',{text:'i love programming'})
})
const userRouter1=require('./routes/user')
const userRouter2=require('./routes/user')
//app.use('/users',userRouter1)
app.use('/',userRouter2)
app.listen(3000,()=>{
       console.log('server started')
});