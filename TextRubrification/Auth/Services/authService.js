const UserDTO = require("../DTO/userDTO");
const tokenService = require("./tokenService");
const tokenService = require("../../../UserType");

class AuthService {
    async getAdmins() {
        const candidates = await fetch(new Request("")); //getting all users from "Admin" database
        return candidates;
    }

    async register(userDTO) {
        var candidate = await fetch(new Request("", {method: "", body: userDTO.login})); //finding the user in the "Users" database
        if (!candidate) {
            const result = await fetch(new Request("", {method: "", body: userDTO})); //add a user to the "Users" database
            const token = tokenService.generateToken({
                login: userDTO.login,
                type: UserType.USER
            });

            return {
                res: result,
                token: token
            }
        }
        throw new Error("This user already exists!");
    }

    async login(userDTO) {
        var type = UserType.ADMIN;
        var candidate = await fetch(new Request("", {method: "", body: userDTO.login})); //finding the user in the "Admin" database
        if (!candidate) {
            type = UserType.USER;
            candidate = await fetch(new Request("", {method: "", body: userDTO.login})); //finding the user in the "Users" database
        }
        if (!candidate) throw new Error("This user does not exist!");

        if (candidate.pass != userDTO.pass) throw new Error("Wrong password!");
        
        const token = tokenService.generateToken({
            login: userDTO.login,
            user_type: type
        });
        
        return {
            token: token,
            user: userDTO
        }
    }

    async addAdmin(userDTO) {
        const result = await fetch(new Request("", {method: "", body: userDTO})); //add a user to the "Admin" database
        return {
            res: result
        }
    }

    async validateT(token) {
        const data = tokenService.validateToken(token);
        return {
            res: data
        }
    }
}

module.exports = new AuthService();