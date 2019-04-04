var mongoose = require('mongoose');

var userSchema = new mongoose.Schema(
    {userName: String,
        password: String,
        firstName: String,
        lastName: String,
        email: String,
        phone: String,
        websites: [{type: mongoose.Schema.Types.ObjectId, ref: 'Website'}],
        dateCreated: {type: Date, default: Date.now()}},
    {collection: 'Users'});

module.exports = userSchema;
