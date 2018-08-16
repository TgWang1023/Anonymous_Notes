mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/anon');
mongoose.Promise = global.Promise;