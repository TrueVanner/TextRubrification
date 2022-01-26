class UserDTO {
    login;
    pass;

    constructor(login = '', pass = '') {
        this.login = login;
        this.pass = pass;
    }
}

module.exports = UserDTO;