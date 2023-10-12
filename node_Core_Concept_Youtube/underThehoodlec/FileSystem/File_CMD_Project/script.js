const fs=require('fs');
const path=require('path');
const cmdfile=path.join(__dirname,"command.txt");
let cmd="wait"
/* fs.readFile(cmdfile,"utf-8",(err,data)=>{
  cmd=data; 
}); */
fs.watch(cmdfile,(e,command)=>{
if(e){
  fs.readFile(cmdfile,"utf-8",(err,data)=>{
    cmd=data
    console.log(data);
  })
  if(cmd=="create a file"){
    console.log("hii")
    fs.writeFile(__dirname+"/demo.txt","",()=>{
      console.log("file created")
    })
  }
}


})
fs.mkdir(__dirname,)
