class Vehicle {
    color: string;

    constructor(color: string) {
        this.color = color;
    }

    drive(): void {
        console.log('chugga chugga');
    }
}

// This wouldn't compile in Java! constructor(string) is inherited!
class Car extends Vehicle {
    drive(): void {
        console.log(`vroom ${this.color} car`);
    }
}

const car = new Car('red');

car.drive();
