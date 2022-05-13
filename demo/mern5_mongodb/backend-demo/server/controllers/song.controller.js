// option 1
const Song = require("./../models/song.model")

// option 2
// const { Song } = require("./../models/song.model")

// Get all
module.exports.allSongs = (req, res) =>{
    Song.find()
        .then(songs => res.json(songs))
        .catch(err=> res.json(err))
}


// Get one
module.exports.oneSong = (req, res) =>{
    // id : req.params.id
    Song.findOne({_id : req.params.id})
        .then(song=>res.json(song))
        .catch(err=>res.json(err))
}


// create
module.exports.createSong = (req, res) =>{
    const newSong = req.body
    Song.create(newSong)
        .then(song=> res.json(song))
        .catch(err=>res.json(err))
}

module.exports.createSong2 = (req, res) =>{
    const newSong = new Song(req.body)
    newSong.save()
        .then(song=> res.json(song))
        .catch(err=>res.json(err))
}

// update --  getOne + create
module.exports.updateSong = (req, res) =>{
    Song.findOneAndUpdate(
        {_id: req.params.id},// criteria
        req.body,// updated values
        {new: true, runValidators: true}// options
    )
        .then(song=> res.json(song))
        .catch(err=>res.json(err))
}

// delete
module.exports.deleteSong = (req, res) =>{
    Song.deleteOne({_id: req.params.id})
        .then(status=> res.json(status))
        .catch(err=>res.json(err))
}