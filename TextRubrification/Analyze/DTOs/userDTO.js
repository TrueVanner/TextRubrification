class UserDTO{
    login;
    password;
    /*
    0 - can use miscelaneous services
    1 - can access and redact the database with some restrictions
    2 - admin or god
    */
    access_level;

    constructor(login = " ", password = " ", access_level = 0){
        this.login = login; 
        this.password = password;
        this.acces_level = access_level;
    }
}

module.exports = UserDTO;