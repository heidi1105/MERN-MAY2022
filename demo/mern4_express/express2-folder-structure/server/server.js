// import all dependencies
const express = require("express")
const app = express()

// config
app.use( express.json() ); // enable {} 
app.use( express.urlencoded({ extended: true}) ); 
// urlencoded : enable post/put
// true:  qs library (enable nested object)
// false: querystring library (nested object will be presented in [])

const Routes = require("./routes/demo.routes")
Routes(app)

app.listen(8000, ()=>console.log(`Listening to port : 8000`))