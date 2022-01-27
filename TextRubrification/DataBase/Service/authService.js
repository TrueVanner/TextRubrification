const UserDTO = require("../DTO/userDTO");
const userModel = require("../Models/userModel");


class AuthService{
    async addUser(userDTO){

        const candidate = await userModel.find({login : userDTO.login});
       
        if(candidate){
            throw new Error('There is user with such login')
        }

        return userDTO;
    }
    
    async deleteUser(userDTO){

        const candidate = await userModel.find({login : userDTO.login,password : userDTO.password});

        if(!candidate){
            throw new Error('There is no such user');
        }
        
        userModel.deleteOne({login : userDTO.login,password : userDTO.password});
        
        return {"login" : candidate.login,"password" : candidate.password};
    }

    async findUser(userDTO){
        return userModel.findOne({login : userDTO.login, password : userDTO.password});
    }

    
}

module.exports = new AuthService();