const jwt = require("jsonwebtoken");

class TokenService{
    generateToken(payload){
        const accesToken = jwt.sign(payload, process.env.SECRET_ACCES_TOKEN, {expiresIn: "1h"});

        return accesToken;
    }

    validateAccesToken(token){
        try{
            const data = jwt.verify(token, process.env.SECRET_ACCES_TOKEN);
            return data;
        }catch(e){
            console.log(e);
            return null;
        }
    }
}

module.exports = new TokenService();