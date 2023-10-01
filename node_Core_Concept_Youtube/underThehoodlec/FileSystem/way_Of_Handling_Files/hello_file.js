//1.) way of handling file is like synchronously

/*
const fs=require("fs");
const path = require("path");
const filepath=path.join(__dirname,"demo.txt");
fs.writeFileSync(filepath,"hello aman");
const str=fs.readFileSync(filepath,"utf-8");
console.log(str);
*/

//2.) way of handling file is using callback api

/* const fs=require("fs");
const path = require("path");
const filepath=path.join(__dirname,"demo2.txt");
fs.writeFile(filepath,"hey lady drop it down",()=>{   //write file callback have no parameter
try {
   fs.readFile(filepath,"utf-8",(err,data)=>{   //2 params one err and 2nd data
     console.log(data);
   })
   return;   
} catch (error) {
   console.log(error.message);    
}
}) */

// 3.) way is using asynchronousway of handling files

const fs=require("fs/promises");
const path = require("path");
const filepath=path.join(__dirname,"demo3.txt");

(async()=>{
   try {
      await fs.writeFile(filepath,"bagal wali jaan mare li");
      const data = await fs.readFile(filepath,"utf-8");
      console.log(data);
     
   }
   catch(e){
   console.log(e.message);
   }
  
})();
