// Object spread operator 
// Allows us to do destructuring with objects aswell 
const animals = {
    tiger: 23,
    lion: 5,
    monkey: 2,
    bird: 1000
}

const { bird, lion, ...rest } = animals;


// In ES6 we were given the ability to destructure arrays
const array = [1,2,3,4,5];
function sum(a, b, c, d, e) {
    return a+b+c+d+e;
}

sum(...array);

function objectSpread(p1, p2, p3) {
    console.log(p1)
    console.log(p2)
    console.log(p3)
}