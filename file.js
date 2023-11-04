const path = require("path");

console.log("-------------------")
console.log(path.dirname(__filename))
console.log(path.basename(__filename))
console.log(path.extname(__filename))
console.log("-------------------")
console.log(path.parse(__filename))
