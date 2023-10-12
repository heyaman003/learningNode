const fs = require("fs");
const path = require("path");
const filehandler = path.join(__dirname, "stream2.txt");


fs.open(filehandler, "w", (err, fd) => {

  console.log(fd);
  if (err) console.log(err.message);

  const stream = fs.createWriteStream(filehandler, "utf-8");

  console.log(stream.writableHighWaterMark);
  console.log(stream.writableLength);


const buff=Buffer.from("string","utf-8");
stream.write("string","utf-8");


console.log(buff);
console.log(buff.toString());
console.log(buff.toLocaleString());
console.log(buff.toJSON());
  console.log(stream.writableLength);
  console.log(stream.writableNeedDrain);
});


/*

output :-
3
16384
0
<Buffer 73 74 72 69 6e 67>
string
string
{ type: 'Buffer', data: [ 115, 116, 114, 105, 110, 103 ] }
6

*/