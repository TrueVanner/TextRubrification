const UserDTO = require("../DTO/userDTO");
const userModel = require('../Models/usersModel');
const tokenService = require('../Service/tokenService');


class AuthService{
    async addUser(userDTO){

        const candidate = await userModel.find({login : userDTO.login});
        if(candidate){
            throw new Error('There is user with such login')
        }

        return userDTO;
    }
    
    async deleteUser(userDTO){

        const candidate = await userModel.find({login : userDTO.login});
        userModel.deleteOne({login : userDTO.login});
        
        return candidate;
    }

    async findUser(userDTO){
        return userModel.findOne({login : userDTO.login, password : userDTO.password});
    }

    
}

module.exports = new AuthService();