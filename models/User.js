var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');
var bcrypt = require('bcryptjs');

var User = new Schema({
    email: {
        type: String,
        unique: true
    },
    username: {
        type: String,
        unique: true
    },
    password: String,
    firstname: {
        type: String,
        default: ''
    },
    lastname: {
        type:String,
        default: ''
    },
    admin: {
        type: Boolean,
        default: false
    },
    groups: [String]
},
{
   timestamps: true
});

//User instance method
User.methods.getName = function(){
    return (this.firstname + ' ' + this.lastname);
}

User.plugin(passportLocalMongoose);

var User = mongoose.model('User', User);

module.exports = User;

/**
 * Create a new user
 * @param {*} newUser 
 * @param {*} callback 
 */
// module.exports.createUser = (newUser, callback) => {
//     bcrypt.genSalt(10, (err, salt) => {
//         bcrypt.hash(newUser.password, salt, (err, hash) => {
//             newUser.password = hash;
//             newUser.save(callback);
//         });
//     })
// }