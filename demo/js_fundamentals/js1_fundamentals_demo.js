// javascript

// Scope, hoisting, intepreted language
// global scope , local scope 
// global variables , local variables
console.log(cat)
// Step 1: Var cat 
// Step 2: console.log(cat) : undefined 
// Step 3: cat = "pepper"

var cat = "pepper"
function changeName(){
    var cat = "Kitty" // change the local var : cat as kitty 
    console.log(cat)
}
console.log(cat)
changeName()
console.log(cat)


// const vs let
const name = "Heidi" // const: unable to reassign
let stack = "MERN" // let: able to reassign
 stack= "JAVA"

for(let i=0; i< 5; i++){
    console.log(i)
}

const trips = ["Japan", "Spain", "France", "Norway"] // memory address
trips.push("Iceland")
trips.pop()
trips.pop()

console.log(trips)

const post = {
    title: "First day in MERN",
    viewers: 1000,
    likes: 500,
    description: "An awesome day with MERN. It just works"
}
console.log(post)

// destructuring
const titleFromPost = post.title;
const viewersfromPost = post.viewers
console.log(titleFromPost)
// object destructuring: naming matters, order doesn't matter
const {title, ...details} = post // search for the keys inside the post, grab the value and store it
console.log(title)
console.log(details)


//const trips = ["Japan", "Spain", "France", "Norway"] 
const [firstPlace, , thirdPlace] = trips // array destructuring: naming doesn't matter, order matters
// console.log(firstPlace)
// console.log(thirdPlace)


// spread/rest
const postCopy = {...post}
// console.log(postCopy)
const tripsCopy = [...trips]
console.log(tripsCopy)
tripsCopy.pop();
console.log(tripsCopy)
console.log(trips)

// arrow function
function printHello(){
    console.log("Hello");
} // () => {}

// arrow function
const printHello2 = () =>{
    console.log("Hello2")
}

// change Price
function changePrice(price, discount){
    return price * discount;
}

const changePrice2 = (price, discount) =>{
    return price * discount;
}

// shorthanded version -- () or no {} --> a return 
const changePrice3 = (price, discount) => {price *discount}


console.log(changePrice(100, 0.8))
console.log(changePrice2(100, 0.8))
console.log(changePrice3(100, 0.8))



printHello();
printHello2();





// ternary opeartor





// const discountedPrices = prices.map((price)=>{
//     if(price >=100){
//         return price-20;
//     }else{
//         return price*0.8
//     }
// })