//complete this code
class Animal {
	constructor(species){

	this.species=species;
	}
	makeSound(){
    return console.log(`The ${this.species} makes a sound`);
	}
}

class Cat extends Animal {
	constructor(species){
		super(species);
	}
	purr(){
		 console.log("purr");
	}
}

class Dog extends Animal {
		constructor(species){
		super(species);
	}
	bark(){
	 console.log("woof");
	}
}
const myCat = new Cat("Siamese");
myCat.makeSound(); // Output: The Siamese makes a sound
myCat.purr(); // Output: purr

const myDog = new Dog("Golden Retriever");
myDog.makeSound(); // Output: The Golden Retriever makes a sound
myDog.bark(); // Output: woof




//complete this code
class Rectangle {
	constructor(width, height){
      this.width=width;
	  this.height=height;
	}
	getArea(){
		 let area=this.width*this.height;
		return area;
	}
}

class Square extends Rectangle {
	constructor(side){
		super(side,side);
	}
	getPerimeter(){
     let perimeter=2*(this.width+this.height);
		return perimeter;
	}
}
const rectangle = new Rectangle(5, 10);
console.log(rectangle.width); // Output: 5
console.log(rectangle.height); // Output: 10
console.log(rectangle.getArea()); // Output: 50

const square = new Square(7);
console.log(square.width); // Output: 7
console.log(square.height); // Output: 7
console.log(square.getArea()); // Output: 49
console.log(square.getPerimeter()); // Output: 28
// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
