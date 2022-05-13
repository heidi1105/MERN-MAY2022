const { allUsers } = require("./demo.controller");

const users = [
    { firstName: "Reimu",  lastName: "Hakurei"    },
    { firstName: "Marisa", lastName: "Kirisame"   },
    { firstName: "Sanae",  lastName: "Kochiya"    },
    { firstName: "Sakuya", lastName: "Izayoi"     },
    { firstName: "Momiji", lastName: "Inubashiri" }
];

module.exports ={
    test: (req, res)=>{
        res.json({message: "Hello World"})
    },
    allUsers :  (req, res)=>{
        res.json(users)
    },
    oneUser : (req, res)=>{
        const id = req.params.id
        res.json(users[id])
    },
    createUser: (req, res)=>{
        users.push(req.body)
        res.json(req.body)
    },
    updateUser : (req, res)=>{
        const id = req.params.id
        users[id] = req.body
        res.json(users[id])
    },
    deleteUser : (req, res)=>{
        const id = req.params.id
        users.splice(id, 1)
        res.json({status: "ok 👌"})  
    }
}