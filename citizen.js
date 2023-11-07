export class Citizen{
    constructor(name,id){
        this.name = name;
        this.id = id;
    }

    setName(name){
        this.name = name;
    }

    getName(){
        return this.name;
    }

    addAddress(address){
        this.address = address;
    }

    getAddress(){
        return `${this.address}`;
    }


    setId(id){
         this.id = id;
    }


    getId(){
        return this.id;
    }

    getDetails(){
        console.log( `${this.name} is residing at ${this.address} and has ID ${this.id}`);
    }
}