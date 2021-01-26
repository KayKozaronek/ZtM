const fs = require("fs");

fs.readFile("./adventOfCode.txt", (err, data) => {
    console.time("challenge");
    if (err) {
        console.log("Error");
        throw err;
    }
    floorNumber = 0;
    for (c of data.toString()) {
    
        if (c == "(") {
            floorNumber++;
        }
        else {
            floorNumber--;
        }
    }
    console.log(floorNumber);
    console.timeEnd("challenge");
})