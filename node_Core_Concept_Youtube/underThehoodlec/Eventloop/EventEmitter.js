const emitter=require("events");
//console.log(emitter)
 class usingInheritance extends emitter{

 }
 const newobj=new emitter();
 newobj.on('run',()=>{
  console.log("event occurs")
 })
 newobj.emit('run')