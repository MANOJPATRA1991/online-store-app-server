var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Item = new Schema({
    name: {
        type: String, 
        required: true
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        maxlength: 200,
        required: true
    },
    rating: {
        type: Number,
        default: 1
    },
    max_rating: {
        type: Number,
        required: true
    },
    time_limit: {
        type: Number,
        required: true
    },
    group: {
        type: [String],
        default: ['ALL']
    },
    approved: {
        type: Boolean,
        default: false
    },
    completed: {
        type: Boolean,
        default: false
    },
    shuffle_counter: {
        type: Boolean,
        default: false
    },
    shuffle_counter_time: {
        type: Date
    },
    created_by: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, 
{
   timestamps: true
});

var Item = mongoose.model('Item', Item);

module.exports = Item;