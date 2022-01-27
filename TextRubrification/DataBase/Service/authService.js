const UserDTO = require("../DTO/userDTO");
const userModel = require("../Models/userModel");


class AuthService{
    async addUser(userDTO){
        const loginCandidate = await userModel.findOne({login : userDTO.login})

        if(loginCandidate){
            throw new Error('|DB ERORR| USER WITH SUCH LOGIN EXISTS');
        }

        const user = await userModel.create({login: userDTO.login,password: userDTO.password});

        return {
            isAdded : true,
            user: {login: userDTO.login,password: userDTO.password,nickname: userDTO.nickname}
        };
        
    }

    
    
    async deleteUser(userDTO){

        const candidate = await userModel.findOne({login : userDTO.login,password : userDTO.password});

        if(!candidate){
            throw new Error('|DB ERORR| THERE IS NO USER TO DELETE');
        }
        
        const user = await userModel.deleteOne({login : userDTO.login,password : userDTO.password});
        
        return {
            isDeleted : true,
            user: {login: userDTO.login,password: userDTO.password,nickname: userDTO.nickname}
        };
    }

    async findUser(userDTO){
        const user =  userModel.findOne({login : userDTO.login, password : userDTO.password});

        if(!user){
            throw new Error('|DB ERORR| THERE IS NO SUCH USER');
        }

        return user;
    }

    
}

module.exports = new AuthService();