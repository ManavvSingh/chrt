class Animal{
    constructor(type,speak,legCount){
        this.type = type;
        this.speaks = speak;
        this.legCount = legCount;
    }

    speak(){
        console.log(`I am ${this.type} i speak ${this.speaks}`);
    }
}

let dog = new Animal('Dog','Bark',4);

dog.speak();
