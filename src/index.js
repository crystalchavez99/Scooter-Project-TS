"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User_1 = require("./User");
var Scooter_1 = require("./Scooter");
var ScooterApp_1 = require("./ScooterApp");
var createdUser = new User_1.User(":)", "shawny", 28);
createdUser.login("shawny");
console.log("Created User:", createdUser);
var newScooter = new Scooter_1.Scooter("Wilson Language");
newScooter.rent(createdUser);
console.log("just rented", newScooter);
var coolScooter = new Scooter_1.Scooter("Wilson Language");
console.log(coolScooter);
newScooter.dock("Wilson Language");
console.log("Scooter returned", newScooter);
var app = new ScooterApp_1.ScooterApp();
console.log("The app: ", app);
app.registerUser("Megatron", "decipticon!", 50);
console.log("After registering user", app);
// app.registerUser("Bowser Jr.", "kingofthekappas!", 8);
app.registerUser("MasterChief", "Cortana", 35);
app.loginUser("MasterChief", "Cortana");
console.log("Logged in user", app);
app.logoutUser("MasterChief");
var prodScooter = app.createScooter("Codio");
console.log("Proudciton Scooter", prodScooter);
var oldScooter = new Scooter_1.Scooter(null);
app.dockScooter(oldScooter, "Multiverse");
console.log("Dock at", app);
