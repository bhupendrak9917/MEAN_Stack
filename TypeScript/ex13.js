var acc = /** @class */ (function () {
    function acc(username, password) {
        this.username = username;
        this.password = password;
    }
    acc.prototype.getPassword = function () {
        return this.password;
    };
    return acc;
}());
