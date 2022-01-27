const {Schema, model} = require('mongoose');

//String Number Date Boolean ObjectId Array 

const TopicSchema = new Schema({
    name : {type: String,require : true,unique : true},
    words : {type: [String]}
})

module.exports = model('Topics', TopicSchema)