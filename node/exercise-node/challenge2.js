const fs = require("fs");

// Question 1 - What floor does Santa end up on 
// ( --> should go UP 1 floor
// ) --> should go DOWN 1 floor

function question1() {
    fs.readFile("./adventOfCode.txt", (err, data) => {
        console.time("santa-time");
        if (err) {
            console.log("error");
            return 
        }
        const directions = data.toString();
        const directionsArray = directions.split("");
        //console.log(directionsArray);

        const answer = directionsArray.reduce((acc, currentValue) => {
            if (currentValue === "(") {
                return acc += 1
            } else if (currentValue == ")") {
                return acc -= 1
            }
        }, 0)
        console.log("floor: ", answer);
        console.timeEnd("santa-time");
    })
}

question1()


// Question 2 - When does Santa first enter the basement?
function question2() {
    console.time("santa-time2");
    fs.readFile("./adventOfCode.txt", (err, data) => {
        const directions = data.toString();
        const directionsArray = directions.split("");
        let accumulator = 0;
        let counter = 0;
        const answer = directionsArray.some((currentItem) => {
            if (currentItem === "(") {
                accumulator += 1
                
            } else if (currentItem === ")") {
                accumulator -= 1 
            }
            counter ++
            return accumulator < 0;
        })
        console.log("basement entered at: ", counter);
    })
    console.timeEnd("santa-time2");
}

question2(); 

// Question 2 Alternative
function question2alt() {
    console.time("santa-time2alt");
    fs.readFile("./adventOfCode.txt", (err, data) => {
        const directions = data.toString();
        let accumulator = 0;
        let counter = 0;
        for (c of directions) {
            if (c === "(") {
                accumulator += 1
                counter ++
            } else if (c === ")") {
                accumulator -= 1
                counter ++ 
            }
            if (accumulator < 0 ){
                break; 
            }   
        }
        console.log("basement entered at: ", counter);
    })
    
    console.timeEnd("santa-time2alt");
}

question2alt(); 