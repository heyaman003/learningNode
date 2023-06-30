const http=require('http');

const fs=require('fs');
const path = require("path");
const filePath = path.join(__dirname, "index.html");
const outpt = fs.readFileSync(filePath, "utf-8");
const data={age:'20',name:"aman"}
const server=http.createServer((req,res)=>{
        console.log("hello don")
        console.log(req.url);
        console.log(req.statusCode);//why it's consoling null instead of 200?
        res.setHeader('Content-Type','text/html');
       //res.end(JSON.stringify(data));
       res.end(outpt);

        
}
      
      
)
server.listen(8080);