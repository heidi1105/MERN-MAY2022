// import all dependencies
const express = require("express")
const app = express()

// config
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

const Routes = require("./routes/demo.routes")
Routes(app)

app.listen(8000, ()=>console.log(`Listening to port : 8000`))