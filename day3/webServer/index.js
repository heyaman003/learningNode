const http=require('http');
const data={age:'20',name:"aman"}
const server=http.createServer((req,res)=>{
        console.log("hello don")
        console.log(req.url);
        console.log(req.statusCode);//why it's consoling null instead of 200?
        res.setHeader('Content-Type','application/json');
        res.end(JSON.stringify(data));
        
}
      
      
)
server.listen(8080);