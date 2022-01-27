const UserType = require("../../UserType.ts");

module.exports = (req, res, next) => {
    const data = await fetch(new Request("localhost:3000/auth/validateToken", {method:"POST", body: req.header.authorization}));
    if (data) {
        if (data.user_type == UserType.ADMIN) {
            next();
        }
        throw new Error("You don't have permission to do this.");
    }
    throw new Error("Bad token");
}