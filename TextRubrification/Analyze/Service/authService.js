const User_DTO = require("../DTO/userDTO");
const User_model = require("../Models/usersModel");
const Token_service = require("./tokenService");


class AuthService{
    async getUsers(){
        const candidate = await userModel.find({});
        return candidate;
        
    }   

    async registration(userDTO){
        const login_candidate = await userModel.findOne({login: userDTO.login});

        if(login_candidate){
            throw new Error("Current login already exists");
        } 

        const user = await userModel.create({
            login: userDTO.login,
            password: userDTO.password
        })
    }
}