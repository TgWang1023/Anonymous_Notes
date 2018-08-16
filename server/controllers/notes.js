require('../models/note.js');
module.exports = {
    all: function(req, res){
        Note.find({}).sort('-createdAt').exec(function(err, notes){
            if(err){
                console.log('Something went wrong when getting all notes');
                res.json({message: 'Error', error: err});
            }else{
                res.json({message: 'Success', data: notes});
            }
        });
    },
    one: function(req, res){
        Note.findOne({_id: req.params.id}, function(err, note){
            if(err){
                console.log('Something went wrong when getting a single note');
                res.json({message: 'Error', error: err});
            }else{
                res.json({message: 'Success', data: note});
            }
        });
    },
    create: function(req, res){
        Note.create(req.body, function(err){
            if(err){
                console.log('Something went wrong when creating a note, detail: ', err);
                res.json({message: 'Error', error: err});
            }else{
                res.redirect('/notes');
            }
        });
    },
    update: function(req, res){
        note.findByIdAndUpdate({_id: req.params.id}, {$set: req.body}, { runValidators: true }, function(err){
            if(err){
                console.log('Something went wrong when updating a note, detail: ', err);
                res.json({message: 'Error', error: err});
            }else{
                res.redirect(303, '/notes');
            }
        });
    },
    remove: function(req, res){
        Note.findOneAndRemove({_id: req.params.id}, function(err){
            if(err){
                console.log('Something went wrong when updating a note');
                res.json({message: 'Error', error: err});
            }else{
                note.find({}, function(err, notes){
                    if(err){
                        console.log('Something went wrong when getting all notes');
                        res.json({message: 'Error', error: err});
                    }else{
                        res.json({message: 'Success', data: notes});
                    }
                });
            }
        });
    }
}