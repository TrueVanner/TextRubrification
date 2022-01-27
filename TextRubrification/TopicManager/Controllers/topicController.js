const topicService = require("../Services/topicService");
const TopicDTO = require("../../../ModelsAndDTOs/userDTO");

class AuthController {

    async getTopics(req, res, next) {
        try {
            const result = await topicService.getTopics();
            return res.json({result});
        } catch (e) {next(e);}
    }

    async addTopic(req, res, next) {
        try {
            const {name, words} = req.body;

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