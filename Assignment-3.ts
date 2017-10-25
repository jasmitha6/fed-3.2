
// creating a class animal with move and makeSound method
class Animal {
    constructor(public name: string) { }
    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
    makeSound(sound: string = "No sound") {
        console.log(`${this.name} makes ${sound} sound.`);
    }
}
// creating a class snake which extends class Animal
class Snake extends Animal {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 5) {
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
    makeSound(sound: string) {
        console.log("Snake");
        super.makeSound(sound);
    }
}
// creating a class Horse which extends class Animal
class Horse extends Animal {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 45) {
        console.log("Galloping...");
        super.move(distanceInMeters);
    }
    makeSound(sound = "Eeeee") {
        console.log("Horse");
        super.makeSound(sound);
    }
}
// invoking the fuctions to get the required result
let sam = new Snake("Sammy the Python");
let tom: Animal = new Horse("Tommy the Palomino");

sam.move();
sam.makeSound("shh...");
tom.move(34);
tom.makeSound();
