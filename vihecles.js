export class Vehicle{

    constructor(make,name,engine){
        this.make = make;
        this.name = name;
        this.engine = engine;
    }

    get getDetails()
    {
        return `this is ${this.name}, ${this.make}, ${this.engine}`
    }

    
}
