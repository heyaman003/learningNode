const {Buffer}=require("buffer");
const { buffer } = require("stream/consumers");
const buff=Buffer.alloc(8);
buff.write("hello","utf-8");
console.log(buff);
console.log(buff.toJSON());
console.log(buff.toString());
const buff2=Buffer.from("heyladyiloveu","utf-8");
console.log(buff2);

