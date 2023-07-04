const express = require("express");
const app = express();
const router = express.Router();

router.get("/", (req, res) => {
  res.send("user data ");
});
router.get("/new", (req, res) => {
  res.send("new user form ");
});
router.post("/", (req, res) => {
  res.send("new user data ");
});
router
  .route("/:id")
  .get((req, res) => {
      console.log(req.user)
    res.send(`user get with id ${req.params.id}`);
  })
  .put((req, res) => {
    res.send(`user puted with id ${req.params.id}`);
  })
  .post((req, res) => {
    res.delete(`user posted with id ${req.params.id}`);
  })
  .patch((req, res) => {
    res.delete(`user posted with id ${req.params.id}`);
  })
  .delete((req, res) => {
    res.delete(`user posted with id ${req.params.id}`);
  });

//setting dynamically parameters
/*  router.get('/:id',(req,res)=>{
      res.send(`user get with id ${req.params.id}`)
      })
      router.get('/:id',(req,res)=>{
      res.send(`user get with id ${req.params.id}`)
      })
      router.post('/:id',(req,res)=>{
      res.delete(`user posted with id ${req.params.id}`)
      })
      router.put('/:id',(req,res)=>{
      res.send(`user puted with id ${req.params.id}`)
      })
      router.patch('/:id',(req,res)=>{
      res.send(`user patch with id ${req.params.id}`)
      }) */


      /* router.param('id',(req,res,next,id)=>{
            console.log(id)
            next()
      }) */


const users=[{name:"aman"}, {name:"jui"}]

      router.param('id',(req,res,next,id)=>{
            console.log(id)
            req.user=users[id];
            next()
      })




module.exports = router;

/* router.get('/user',(req,res)=>{
       res.send('user data ')
      })
router.get('/user/new',(req,res)=>{
       res.send('new user form ')
      })  */
