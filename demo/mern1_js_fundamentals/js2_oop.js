class Developer{
    constructor(name, brainCells =0){
        this.name = name;
        this.health = 400;
        this.belts = 0
        this.brainCells = brainCells
        this.abilities =[]
    }


    sleep(){
        console.log(this.name + " is sleeping")
        this.health+= 50;
        this.brainCells++;
    }

    completeProject(title){
        console.log(this.name + " has completed " + title)
        this.health -=50
        this.brainCells--;
        this.abilities.push(title)
    }
}

class SeniorDeveloper extends Developer{
    constructor(name){
        super(name, 10) // calling the constructor of superclass
        this.numberOfEmployees = 0
    }
}


const dev1 = new Developer("Heidi")
dev1.sleep();
dev1.completeProject("MERN")
dev1.completeProject("Java")
console.log(dev1)

const dev2 = new SeniorDeveloper("John")
console.log(dev2)