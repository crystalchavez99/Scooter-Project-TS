"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var User = /** @class */ (function () {
    function User(username, password, age) {
        this.username = username;
        this.password = password;
        this.age = age;
        this.loggedIn = false;
    }
    User.prototype.login = function (password) {
        if (this.password === password) {
            this.loggedIn = true;
        }
        else {
            throw Error("Incorrect Password!");
        }
    };
    User.prototype.logout = function () {
        this.loggedIn = false;
    };
    return User;
}());
exports.User = User;
