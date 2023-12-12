"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScooterApp = void 0;
var User_1 = require("./User");
var Scooter_1 = require("./Scooter");
var ScooterApp = /** @class */ (function () {
    function ScooterApp(stations, registeredUsers) {
        if (stations === void 0) { stations = {
            "Codio": [],
            "Multiverse": [],
            "Wilson": []
        }; }
        if (registeredUsers === void 0) { registeredUsers = {}; }
        this.stations = {};
        this.registeredUsers = {};
        this.stations = stations;
        this.registeredUsers = registeredUsers;
    }
    ScooterApp.prototype.registerUser = function (username, password, age) {
        if (age < 18) {
            throw Error("Too young to register!");
        }
        if (this.registeredUsers[username]) {
            throw Error("Already Registered!");
        }
        var user = new User_1.User(username, password, age);
        this.registeredUsers[username] = user;
        console.log("User has been registered!");
        return user;
    };
    ScooterApp.prototype.loginUser = function (username, password) {
        if (this.registeredUsers[username]) {
            this.registeredUsers[username].login(password);
            console.log("User has been logged in.");
        }
        else {
            throw Error("Username or password is incorrect");
        }
    };
    ScooterApp.prototype.logoutUser = function (username) {
        if (this.registeredUsers[username]) {
            this.registeredUsers[username].logout();
            console.log("User has been logged out.");
        }
        else {
            throw Error("No such user is logged in.");
        }
    };
    ScooterApp.prototype.createScooter = function (station) {
        if (this.stations[station]) {
            var made = new Scooter_1.Scooter(station);
            this.stations[station].push(made);
            console.log("Created a new scooter.");
            console.log(this.stations);
            return made;
        }
        else {
            throw Error("No such station!");
        }
    };
    ScooterApp.prototype.dockScooter = function (scooter, station) {
        if (this.stations[station]) {
            this.stations[station].forEach(function (scoot) {
                if (scoot.serial === scooter.serial) {
                    throw new Error("Scooter is already at station!");
                }
            });
            this.stations[station].push(scooter);
            scooter.dock(station);
            console.log("Scooter is docked!");
        }
        else {
            throw Error("No such station!");
        }
    };
    ScooterApp.prototype.rentScooter = function (scooter, user) {
        for (var station in this.stations) {
            var currStation = this.stations[station];
            for (var i = 0; i < currStation.length; i++) {
                if (currStation[i].serial === scooter.serial) {
                    currStation.splice(i, 1);
                    scooter.rent(user);
                    console.log("Scooter is rented!");
                    return;
                }
            }
        }
        throw Error("Scooter already rented!");
    };
    ScooterApp.prototype.print = function () {
        console.log("Users: ".concat(Object.values(this.registeredUsers)));
        console.log("Stations: ".concat(Object.entries(this.stations)));
        return "Users: ".concat(Object.values(this.registeredUsers), "\nStations: ").concat(Object.entries(this.stations));
    };
    return ScooterApp;
}());
exports.ScooterApp = ScooterApp;
