//Evaluate these:
//#1
[2] === [2] // false
{} === {} // false

//#2 what is the value of property a for each object.
const object1 = { a: 5 }; 
const object2 = object1; 
const object3 = object2; 
const object4 = { a: 5}; 
object1.a = 4;
// 4, 4, 4, 5 


//#3 create two classes: an Animal class and a Mamal class. 
// create a cow that accepts a name, type and color 
// give it a sound method that moo's her name, type and color. 

class Animal {
    constructor(name, type, color)
    {
        this.name = name;
        this.type = type;
        this.color = color;
    }

}

class Mamal extends Animal{
    constructor(name, type, color){
        super(name, type, color) 
    }
    sound(){
        console.log(`Hey my name is ${this.name} I'm a ${this.type} and I'm ${this.color}`)
    }
}