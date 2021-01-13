// reference type 
let object1 = { value:10 };

let object2 = object1;

var object3 = { value:10 };

// context vs scope
let object4 = {
    a: function() {
        console.log(this);
    }
}

// instantiation
class Player {
    constructor(name, type) {
        console.log(this);
        this.name = name; 
        this.type = type;
    }
    introduce() {
        console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
    }
}

class Wizard extends Player {
    constructor(name, type){
        super(name, type)
    }
    play() {
        console.log(`WEEEE I'm a ${this.type}`);
    }
}

let wizard1 = new Wizard("Shelly", "Healer");
let wizard2 = new Wizard("Shawn", "Dark Magician");