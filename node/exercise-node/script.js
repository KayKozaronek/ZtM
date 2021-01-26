const fs = require("fs") // file system

fs.readFile("./hello.txt", (err, data) => {
    console.time("funchallenge");
    if (err){
        console.log("error");
    }
    console.log("Async", data.toString("utf8"));
    console.timeEnd("funchallenge");
})

const file = fs.readFileSync("./hello.txt");

console.log("Sync", file.toString("utf8"));

/* APPEND
fs.appendFile("./hello.txt", " This is so cool!", err => {
    if (err) {
        console.log(err)
    }
})
*/

/* WRITE
fs.writeFile("./bye.txt", "Sad to see you go", err => {
    if (err) {
        console.log(err)
    }
})
*/ 

/* DELECT
fs.unlink("./bye.txt", err => {
    if (err) {
        console.log(err)
    }
    console.log("Inception")
})
*/
