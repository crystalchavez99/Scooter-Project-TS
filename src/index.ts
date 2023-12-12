import {User} from "./User";
import { Scooter } from "./Scooter";
import { ScooterApp } from "./ScooterApp";

let createdUser = new User(":)", "shawny", 28);

createdUser.login("shawny");
console.log("Created User:", createdUser)

let newScooter = new Scooter("Wilson Language");
newScooter.rent(createdUser);
console.log(`just rented`, newScooter)
let coolScooter = new Scooter("Wilson Language");
console.log(coolScooter)
newScooter.dock("Wilson Language");
console.log(`Scooter returned`, newScooter)

let app = new ScooterApp();
console.log(`The app: `, app);
app.registerUser("Megatron", "decipticon!", 50);
console.log(`After registering user`, app);
// app.registerUser("Bowser Jr.", "kingofthekappas!", 8);
app.registerUser("MasterChief", "Cortana", 35)
app.loginUser("MasterChief", "Cortana");
console.log("Logged in user", app);
app.logoutUser("MasterChief");
let prodScooter = app.createScooter("Codio");
console.log("Proudciton Scooter", prodScooter)
let oldScooter = new Scooter(null);
app.dockScooter(oldScooter,"Multiverse");
console.log("Dock at", app)


