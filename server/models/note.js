const NoteSchema = new mongoose.Schema({
    note: {type: String, required: [true, 'Note name cannot be empty!'], minlength: [4, 'Note title must be at least 4 characters long!']}},
    {timestamps: true});
mongoose.model('Note', NoteSchema);
Note = mongoose.model('Note');