// callback function 

const callbackMessage = (msg) =>{
    console.log(`Call back message: ${msg}`)
    console.log("Call back message: " + msg)
}

const greeting = (person) =>{
    console.log(`Hi, ${person}`)
}


const parentFunction = (fx, msg) =>{
    fx(msg)
}

parentFunction(callbackMessage, "calling callback")

parentFunction(greeting, "Heidi")