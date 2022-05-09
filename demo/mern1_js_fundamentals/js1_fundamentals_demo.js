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

const trips = ["Japan", "Spain", "France", "Norway"] // memory location
trips.push("Iceland")
trips.pop()
trips.pop()

console.log(trips)

const post = {
    title: "First day in MERN",
    viewers: 1000,
    likes: 500,
    description: "An awesome day with MERN. It just works",
    hashtags: ["excellent", "great", "fun"]
}
console.log(post)

// --------------destructuring ----------------
const titleFromPost = post.title;
const viewersfromPost = post.viewers
console.log(titleFromPost)
// object destructuring: naming matters, order doesn't matter
const {title: newTitle, viewers, likes, description} = post // search for the keys inside the post, grab the value and store it
console.log(newTitle) 
// 1. instantiate const newTitle 
// 2. find the value of title from post 
// 3. assign that value into newTitle



//const trips = ["Japan", "Spain", "France", "Norway"] 
const [firstPlace, , thirdPlace] = trips // array destructuring: naming doesn't matter, order matters
// console.log(firstPlace)
// console.log(thirdPlace)



// --------------spread/rest ----------------
// const postCopy = {...post}
// console.log(postCopy)
const tripsCopy2 = [...trips]
const tripsCopy = [...trips, "Seoul"]
console.log(tripsCopy)
const postCopy = { ...post, hashtags: [...post.hashtags] }
postCopy.hashtags.push("new hashtag")
postCopy.title = "new title"
console.log(postCopy)
console.log(post)




// --------------Arrow Functions ----------------

// normal function
function printHello(){
    console.log("Hello");
} // () => {}

// arrow function
const printHello2 = () =>{
    console.log("Hello2")
}

// change Price (normal)
function changePrice(price, discount){
    return price * discount;
}
// change Price2 (longhanded arrow function, need the keyword return)
const changePrice2 = (price, discount) =>{
    return price * discount;
}

// changePrice3: shorthanded arrow function -- with() or no {} --> implicit return statement 
const changePrice3 = (price, discount) => (price *discount)

const changePrice4 = (price, discount)=>{ // 20% off, but max of $20 discount 
     //$10 -> $8, $200 -> $20
    if(price< 100){
        return price*discount;
    }else{
        return price -20;
    }
}


console.log(changePrice(100, 0.8))
console.log(changePrice2(100, 0.8))
console.log(changePrice3(100, 0.8))
console.log(changePrice4(200, 0.8))
console.log(changePrice3(80, 0.8))


// ternary opeartor
rating = 8
if(rating>7){
    console.log("This is a good movie")
}else{
    console.log("This is a terrible movie")
}

(rating>7)? // if(rating>7)
    console.log("This is a good movie2"): //  if-condition is true, the result
    console.log("This is a terrible movie2") // else
// (condition)? (result if condition===true) : (else)



// short-circuited logical operator &&
// (condition1)&&(condition2) && (condition3) && (result to be displayed if all conditions are true)
const rating2 = 9;
rating2>7&&console.log("If statement: good movie")
rating<=7&&console.log("If statement: bad movie")


const changePrice5 = (price, discount)=>{ // 20% off, but max of $20 discount 
    return price > 100 ? 
        price - 20 : 
        price * discount
}
console.log(changePrice5(300, 0.8))


const changePrice6 = (price, discount)=>( // 20% off, but max of $20 discount 
    price > 100 ? 
        price - 20 : 
        price * discount
)
console.log(changePrice5(300, 0.8))



//price > 100 ? price - 20 : price = price - (price * discount)

// const discountedPrices = prices.map((price)=>{
//     if(price >=100){
//         return price-20;
//     }else{
//         return price*0.8
//     }
// })