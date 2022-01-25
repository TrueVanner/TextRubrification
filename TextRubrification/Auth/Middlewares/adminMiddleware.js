const tokenService = require("../Services/tokenService");

module.exports = (req, res, next) => {
    try {
        if (req.user.admin == false) throw new Error("You do not have permission to do this.");
        next();
    } catch (e) {return next(e);}
}