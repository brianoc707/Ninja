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
    }
    drinkSake(){
        this.health += 10;
        console.log(`${this.name}'s health is now ${this.health}`);
    }
}

const ninja1 = new Ninja("Brian", 100);
ninja1.drinkSake();
ninja1.showStats();
