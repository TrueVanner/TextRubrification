const {Schema, model} = require("mongoose");

const UserSchema = new Schema({
    login: {type: String, require: true, unique: true},
    password: {type: String, require: true},
    access_level: {type: Integer, require: true, default: 0}
});

module.exports = model("Users", UserSchema);