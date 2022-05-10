const noMondays = new Promise((resolve, reject) => {
    if (new Date().getDay() !== 1) {
        resolve("Good, it's not Monday!");  // .then
    } else {
        reject("Someone has a case of the Mondays!"); // .catch
    }
});


noMondays
    .then(res => console.log(".then -- " + res)) // refer to resolve (successful)
    .catch(err => console.log(".catch -- " + err));// refer to reject (unsuccessful)



const apiCall = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("in api Call")
        }, 2000)
    })
}


const asyncFunc = async() => {
    console.log("start")
    // apiCall() // takes 2 sec to run
    const response = await apiCall()
    console.log(response)

    console.log("end")
}
asyncFunc()
