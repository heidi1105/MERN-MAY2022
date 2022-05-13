// const DemoController = require("./../controllers/demo.controller")
const DemoController = require("./../controllers/demo2.controller")


module.exports = (app) => {
    app.get("/api", DemoController.test)
    app.get("/api/users", DemoController.allUsers)
    app.post("/api/users", DemoController.createUser)
    app.get("/api/users/:id", DemoController.oneUser)
    app.put("/api/users/:id", DemoController.updateUser)
    app.delete("/api/users/:id", DemoController.deleteUser)
}