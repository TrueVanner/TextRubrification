const {Schema, model} = require("mongoose");

const TopicSchema = new Schema({
    login: {type: String, require: true, unique: true},
    words: {type: Array, require: true},
});

module.exports = model("Users", UserSchema);