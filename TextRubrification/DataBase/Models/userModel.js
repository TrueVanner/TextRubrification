const {Schema, model } = require('mongoose');

//String Number Date Boolean ObjectId Array 

const UserSchema = new Schema({
    login : {type: String,require : true,unique : true},
    password : {type: String,require : true}
})

module.exports = model('other',UserSchema)