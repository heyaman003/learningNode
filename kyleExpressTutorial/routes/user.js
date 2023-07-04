const express=require('express');
const app=express();
const router=express.Router()
 router.get('/user',(req,res)=>{
       res.send('user data ')
      })
router.get('/user/new',(req,res)=>{
       res.send('new user form ')
      }) 
/* router.get('/',(req,res)=>{
       res.send('user data ')
      })
router.get('/new',(req,res)=>{
       res.send('new user form ')
      }) */
module.exports=router;