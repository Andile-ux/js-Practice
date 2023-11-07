import { Vehicle } from "./vihecles";

let bike = new Vehicle('Suzuki','Yahhal','1234c');
let car = new Vehicle('yaris','toyota','1.5-liter four-cylinder');
let truck = new Vehicle('Daimler','benz',' inline-6 diesel engine');
let van = new Vehicle('two sitter','hulux','2.8L Turbo Diesel engine');
let bus = new Vehicle('Toyota Coaster Specs','Toyota','4.0-litre, diesel engine');
// let vehicles = [];
// vehicles.push(bike);
// vehicles.push(bus);
// vehicles.push(truck);
// vehicles.push(van);
// vehicles.push(car);



console.log(bike.getDetails);
console.log(car.getDetails);
console.log(truck.getDetails);
console.log(van.getDetails);
console.log(bus.getDetails);