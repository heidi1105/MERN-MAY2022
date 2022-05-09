// callback function 

const callbackMessage = (msg) =>{ // var that store a function that takes msg as parameter
    console.log(`Call back message: ${msg}`)
    console.log("Call back message: " + msg)
}

const greeting = (person) =>{
    console.log(`Hi, ${person}`)
}


const parentFunction = (fx, msg) =>{ // 2 parameters: a function, a string
    fx(msg)
}

callbackMessage("Hello")

parentFunction(callbackMessage, "calling callback")

parentFunction(greeting, "Heidi")


// Object.freeze()
const arr = Object.freeze([1,2,3,4,5])

const shoppingList = Object.freeze([
    {id: 3, itemName: "wetfood", price: 1.29, shops: ["petco", "amazon"]}, 
    {id: 5, itemName: "red gamer chair", price: 300, shops: ["amazon", "Trader Joes"]},
    {id: 9, itemName: "chips", price: 3.29, shops: ["Trader Joes"]},
    {id: 2, itemName: "Air ticket to Japan", price: 800, shops: ["expedia"]}, 
    {id: 10, itemName: "custard tart", price: 3.99, shops: ["Trader Joes"]}    
])

// adding an item - spread
const addGame = [...shoppingList, {itemName: "tetris", price: 29, shop: ["BestBuy", "amazon"]}]
console.log(addGame)

// adding an item - concat
const addTV = shoppingList.concat([{itemName: "TV", price: 1299, shop: ["BestBuy"]}])
console.log(addTV)

// returning part of the array - slice
const firstTwo = [...shoppingList.slice(0,2)] // return an array including the first 2 items
console.log(firstTwo)
const onlyChair = [...shoppingList.slice(1,2)]
console.log(onlyChair)

// splice vs slice
const array=[1,2,3,4,5];
console.log([...array].splice(1, 2)) // delete 2 elements from array[1]
console.log(array)

const array2=[1,2,3,4,5]
console.log(array2.slice(1,2)); // starting at 1, ends at 2
console.log(array2)

// map
const prices = shoppingList.map(function(item){
    return item.price
})

const prices2 = shoppingList.map((item)=>item.price)

const prices3 = shoppingList.map((item)=>{
    return item.price
})

console.log(prices)
console.log(prices2)
console.log(prices3)

const itemNames = shoppingList.map(item=>item.itemName)
console.log(itemNames)

// const details = shoppingList.map(({itemName, price})=>itemName+price)
// console.log(details)
// filter

const cheapItems = shoppingList.filter((item)=> item.price<100 )
console.log(cheapItems)

// given an id
const deleteId = 2
const deleteId5 = shoppingList.filter(item=>item.id !== deleteId)
console.log(deleteId5)

const deleteThirdItem = shoppingList.filter((item, i)=> i!== deleteId ) // i: position of the element in the array
console.log(deleteThirdItem)

const traderJoesItems = shoppingList
    .filter((item, i)=>item.shops.includes("Trader Joes")) // return a filtered array
    .map((item)=> item.itemName)
console.log(traderJoesItems)

// sort 

const sortedItems = itemNames.sort()
console.log(sortedItems)

const sortedPrices = prices.sort((a, b)=>a-b)
console.log(sortedPrices)
