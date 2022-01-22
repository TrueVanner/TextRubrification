const UserDTO = require("../DTO/userDTO");
const tokenService = require("./tokenService");

const adapter = require("");

class AuthService {
    async getAdmins() {
        const candidates = await userModel.find({});
        return candidates;
    }

    async authorize(userDTO) {
        if()

        const token = tokenService.generateToken({
            login: userDTO.login,
            admin: 
        });
        
        return {
            token: token,
            user: userDTO
        }
    }

    async validateT(token) {
        const data = tokenService.validateToken(token);
        return data;
    }
}

module.exports = new AuthService();