var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Group = new Schema({
    group: [String]
},
{
timestamps: true
});

var Group = mongoose.model('Group', Group);

module.exports = Group;