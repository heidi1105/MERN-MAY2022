// import all dependencies
const express = require("express")
const app = express()
const { faker } = require('@faker-js/faker');

// config
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

// construct the class
class Animal{
    constructor(type, name){
        this.type= type
        this.name = name
    }
}

const animals =[]

app.post("/api/animals/new", (req, res)=>{
    const fakeType = faker.animal.type()
    const fakeName = faker.name.firstName()
    const newAnimal = new Animal(fakeType, fakeName)
    animals.push(newAnimal)
    res.json(newAnimal)
})



app.listen(8000, ()=>console.log(`Listening to port : 8000`))