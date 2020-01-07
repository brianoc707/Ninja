class Ninja {
    constructor(name, health){
        this.name = name;
        this.health = health;
        this.speed = 3; 
        this.strength = 3;

    }
    sayName() {
        console.log(this.name);
    }
    showStats(){
        console.log(this.name);
        console.log(this.health);
        console.log(this.speed);
        console.log(this.strength);
        console.log(this.wisdom);
        
    }
    drinkSake(){
        this.health += 10;
        console.log(`${this.name}'s health is now ${this.health}`);
    }
}

class Sensei extends Ninja{
    constructor(name){
     super(name, 200);
     this.wisdom = 10;
     this.speed = 10; 
     this.strength = 10;
    }
    speakWisdom() {
        this.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months.")
    }
}

const Sensei1 = new Sensei("Bernard");
Sensei1.speakWisdom();
Sensei1.showStats();


// const ninja1 = new Ninja("Brian", 100);
// ninja1.drinkSake();
// ninja1.showStats();
