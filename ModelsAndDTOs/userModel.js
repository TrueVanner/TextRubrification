const {Schema, model} = require("mongoose");

const UserSchema = new Schema({
    login: {type: String, require: true, unique: true},
    pass: {type: String, require: true},
});

module.exports = model("Users", UserSchema);