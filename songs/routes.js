import * as dao from "./dao.js";

function SongRoutes(app){
    const createSong = async (req, res) => {
        const song = await dao.createSong(req.body);
        res.json(song);
    };

    const deleteSong = async (req, res) => {
        const status = await dao.deleteSong(req.params.songId);
        res.json(status);
    };

    const findAllSongs = async (req, res) => {
        const songs = await dao.findAllSongs();
        res.json(songs);
    };

    const findSongById = async (req, res) => {
        const song = await dao.findSongById(req.params.songId);
        res.json(song);
    };

    const findSongByArtistId = async (req, res) => {
        const songs = await dao.findAllSongsByArtistId(req.params.artistId);
        res.json(songs);
    };

    const findSongByName = async (req, res) => {
        const songs = await dao.findAllSongsByName(req.params.name);
        res.json(songs);
    };

    const findSongByArtistName = async (req, res) => {
        const songs = await dao.findAllSongsByArtistName(req.params.artistName);
        res.json(songs);
    };

    const updateSong = async (req, res) => {
        const { songId } = req.params;
        const status = await dao.updateSong(songId, req.body);
        const currentSong = await dao.findSongById(songId);
        //req.session['currentSong'] = currentSong;
        res.json(status);
    };

    app.post("/api/songs", createSong);
    app.delete("/api/songs/:songId", deleteSong);
    app.get("/api/songs", findAllSongs);
    app.get("/api/songs/:songId", findSongById);
    app.get("/api/songs/artist/:artistId", findSongByArtistId);
    app.get("/api/songs/name/:name", findSongByName);
    app.get("/api/songs/artistName/:artistName", findSongByArtistName);
    app.put("/api/songs/:songId", updateSong);
}

export default SongRoutes;