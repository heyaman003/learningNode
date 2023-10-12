const fs=require("fs");
 /* fs.writeFile(__dirname+"/stream.txt","writing steam of content",()=>{
   console.log("file is being written");   
 })
 console.time("writing started");
for(let i=0;i<100000;i++){
   fs.appendFile(__dirname+"/stream.txt",`${i}    `,()=>{
   })
}
console.timeEnd("writing started");

 */
const filePath = __dirname + "/stream.txt";

fs.open(filePath, "w", (err, fd) => {
  if (err) {
    console.error("Error opening file:", err);
  } else {
    for (let i = 0; i < 1000000; i++) {
      const data = ` ${i}`;
      fs.write(fd, data, (writeErr) => {

        if (writeErr) {
          console.error("Error writing to file:", writeErr.message);
        }
      });
    }
    fs.close(fd, (closeErr) => {
      if (closeErr) {
        console.error("Error closing file:", closeErr);
      }
    });
  }
});
