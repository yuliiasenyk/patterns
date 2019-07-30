let instances = 0;
class SingletonClass {
    constructor(name = "") {
        if (SingletonClass.instance) {
            return SingletonClass.instance;
        }
        SingletonClass.instance = this;
        this.name = name;
        instances++;
        return this;
    }
    getName = () => this.name;
}

const instanceOne = new SingletonClass("One");
const instanceTwo = new SingletonClass("Two");
const instanceThree = new SingletonClass();

console.log(instanceOne.getName());          // One
console.log(instanceTwo.getName());          // One
console.log(instanceThree.getName());        // One

// So, every instance is really using the first initialized one.

class Extending extends SingletonClass {
    shoutName() { return this.name.toUpperCase();}
}
const A = new Extending();

A.getName()   // One
A.shoutName()  // not a function

console.log(instances);                 // 1

// The extension process can't even start, because SingletonClass constructor returns the instance first thing.
// The only way to extend a singleton class is to do it before any instance is initiated.
