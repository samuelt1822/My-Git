var mongoose = require('mongoose');

//this schema defines the model so that it creates a mapped collection in MongoDB

var widgetModel = new mongoose.Schema({
    pageId:{type: mongoose.Schema.ObjectId, ref:"Page"},
    type:{type: String, enum: ['HEADING', 'IMAGE', 'YOUTUBE', 'HTML', 'TEXT']},
    name: String,
    text: String,
    placeholder: String,
    description: String,
    url: String,
    width: String,
    height: String,
    rows: Number,
    size: Number,
    class: String,
    icon: String,
    deletable:Boolean,
    formatted: Boolean,
    position: Number,
    dateCreated: {type:Date, default: Date.now()}
},{collection: 'Widgets'});

module.exports = widgetModel;

