// import model
const {Song} = require("./../models/song.model")

module.exports.testAPI = (req, res)=>{
    // res.status(400).json("Wrong message")
    res.json("Backend message")
}

module.exports.allSongs = (req, res)=>{
    Song.find()
        .then(songs => res.json(songs))
        .catch(err=> res.json(err))
}