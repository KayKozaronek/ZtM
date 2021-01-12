// Great resource for array methods
// https://sdras.github.io/array-explorer/
 

const array = [1,2,10,16];

const double = []

// forEach
const newArray = array.forEach((num) => {
    double.push(num * 2);
})

console.log("forEach: ", newArray);

//map - preferable over forEach because it doesn't have side effects
const mapArray = array.map((num) => {
    return num *2;
});

// Since we have only 1 argument and a return we can clean up the code
// const mapArray = array.map(num => num * 2);

console.log("map: ", mapArray)

//filter
const filterArray = array.filter(num => {
    return num > 5
})
// const filterArray = array.filter(num => num > 5);


//reduce
const reduceArray = array.reduce((accumulator, num) => {
    return accumulator + num
}, 0); //After our function we define the default value for accumulator

