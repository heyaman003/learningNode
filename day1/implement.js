//import sum from "./div.js";
//import "./demo.txt"
const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "demo.txt");
const outpt = fs.readFileSync(filePath, "utf-8");
console.log(outpt);
;

//const result = sum(2, 3);
//console.log(result); // Output: 5
