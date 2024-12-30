// ES6 introduced classes in JavaScript. 
// Classes in javascript can be used to create new Objects with the help of a constructor, 
// each class can only have one constructor inside it.

class Animal {
    speak() {
        console.log('Animal makes a sound');
    }
};

const dog = new Animal();

dog.speak();

// Classes in JavaScript are a blueprint for creating objects, introduced in ES6. 
// They encapsulate data and behavior by defining properties and methods, enabling object-oriented programming. 
// Classes simplify the creation of objects and inheritance, making code more organized and reusable.

class Emp {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

const emp = new Emp("Aman", "25 years");
console.log(emp.name); // Aman
console.log(emp.age); // 25 years

// The constructor method is a special method used for initializing objects created with a class. 
// It’s called automatically when a new instance of the class is created. It typically assigns initial values 
// to object properties using parameters passed to it. This ensures objects are properly initialized upon creation.

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

const p1 = new Person("Alice", 30);
console.log(p1.name);
console.log(p1.age);

const p2 = new Person("Bob", 25);
console.log(p2.name);
console.log(p2.age);