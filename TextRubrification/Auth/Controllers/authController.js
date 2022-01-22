const authService = require("../Services/authService.js");
const UserDTO = require("../DTOs/userDTO");
const tokenService = require("../Services/tokenService.js");

class AuthController {

    async getAdmins(req, res, next) {
        try {
            const result = await authService.getUsers();
            return res.json({result});
        } catch (e) {next(e);}
    }

    async register(req, res, next) {
        try {
            const {login, pass} = req.body;
            const payload = new UserDTO(login, pass);

            const result = await authService.register(payload);

            return res.json(result);
        } catch (e) {next(e);}
    }

    async validateT(req, res, next) {
        try {
            const {token} = req.body;
            const result = authService.validateT(token);

            return res.json(result);
        } catch (e) {next(e);}
    }

}

module.exports = new AuthController();