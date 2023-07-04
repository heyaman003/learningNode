const express=require('express')
const app=express()
const admin = express()
app.get('/', (req, res) => {
       res.send('Hello, World!')
     })
admin.get('/', (req, res) => {
  console.log(admin.mountpath) // [ '/adm*n', '/manager' ]
  res.send('Admin Homepage')
})

const secret = express()
secret.get('/', (req, res) => {
  console.log(secret.mountpath) // /secr*t
  res.send('Admin Secret')
})

admin.use('/secr*t', secret) // load the 'secret' router on '/secr*t', on the 'admin' sub app
app.use(['/adm*n', '/manager'], admin) // load the 'admin' router on '/adm*n' and '/manager', on the parent app
app.listen(8080)