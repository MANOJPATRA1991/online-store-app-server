var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Rating = new Schema({
    rating: {
        type: Number,
        default: 0
    },
    for_item: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Item'
    },
    posted_by: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, 
{
   timestamps: true
});

var Rating = mongoose.model('Rating', Rating);

module.exports = Rating;