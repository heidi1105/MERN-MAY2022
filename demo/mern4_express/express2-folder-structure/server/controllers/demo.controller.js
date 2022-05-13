const users = [
    { firstName: "Reimu",  lastName: "Hakurei"    },
    { firstName: "Marisa", lastName: "Kirisame"   },
    { firstName: "Sanae",  lastName: "Kochiya"    },
    { firstName: "Sakuya", lastName: "Izayoi"     },
    { firstName: "Momiji", lastName: "Inubashiri" }
];

// test
module.exports.test = (req, res)=>{
    res.json({message: "Hello World"})
}

// get all
module.exports.allUsers = (req, res)=>{
    res.json(users)
}

// get one
module.exports.oneUser = (req, res)=>{
    const id = req.params.id
    res.json(users[id])
}

// createUser
module.exports.createUser = (req, res)=>{
    users.push(req.body)
    res.json({status: "ok"})
}

// updateUser
module.exports.updateUser = (req, res)=>{
    const id = req.params.id
    users[id] = req.body
    res.json(users[id])
}

// deleteUser
module.exports.deleteUser = (req, res)=>{
    const id = req.params.id
    users.splice(id, 1)
    res.json({status: "ok 👌"})  
}