const SongController = require("./../controllers/song.controller")

module.exports = (app) =>{
    app.get("/api/test", SongController.testAPI)
    app.get("/api/songs", SongController.allSongs)
}