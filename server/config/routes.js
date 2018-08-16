const notes = require('../controllers/notes.js');
module.exports = function(app) {
    app.get('/notes', function(req, res) {
        notes.all(req, res);
    });
    app.get('/notes/:id', function(req, res) {
        notes.one(req, res);
    });
    app.post('/notes', function(req, res) {
        notes.create(req, res);
    });
    app.put('/notes/:id', function(req, res) {
        notes.update(req, res);
    });
    app.delete('/notes/:id', function(req, res) {
        notes.remove(req, res);
    });
    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve('public/dist/public/index.html'))
    });
}