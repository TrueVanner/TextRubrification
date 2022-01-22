const authService = require("../Services/authService");
const UserDTO = require("../DTO/userDTO");

class AuthController {

    async getAll(req, res, next) {
        try {
            const result = await authService.getAll();
            return res.json({result});
        } catch (e) {next(e);}
    }

    async register(req, res, next) {
        try {
            const {login, pass, nick} = req.body;
            const payload = new UserDTO(login, pass, nick);

            const result = await authService.register(payload);

            return res.json(result);
        } catch (e) {next(e);}
    }
    async remove(req, res, next) {
        try {
            const {login} = req.body;
            const result = await authService.remove(login);

            return res.json(result);
        } catch (e) {next(e);}
    }
    async update(req, res, next) {
        try {
            const {currentLogin, login, pass, nick} = req.body;

            const result = await authService.update(currentLogin, new UserDTO(login, pass, nick));
            return res.json(result);

        } catch (e) {next(e);}
    }
}

module.exports = new AuthController();