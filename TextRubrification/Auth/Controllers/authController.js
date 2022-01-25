const authService = require("../Services/authService.js");
const UserDTO = require("../DTOs/userDTO");
const tokenService = require("../Services/tokenService.js");

class AuthController {

    async getAdmins(req, res, next) {
        try {
            const result = await authService.getAdmins();
            return res.json({result});
        } catch (e) {next(e);}
    }

    async register(req, res, next) {
        try {
            const {login, pass} = req.body;
            const result = await authService.register(new UserDTO(login, pass));
            return res.json({result});
        } catch (e) {next(e);}
    }

    async login(req, res, next) {
        try {
            const {login, pass} = req.body;
            const result = await authService.login(new UserDTO(login, pass));
            return res.json({result});
        } catch (e) {next(e);}
    }

    async addAdmin(req, res, next) {
        try {
            const {login, pass} = req.body;
            const result = await authService.getAdmins(new UserDTO(login, pass));
            return res.json({result});
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