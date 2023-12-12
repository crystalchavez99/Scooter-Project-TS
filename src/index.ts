import {User} from "./User";
import { Scooter } from "./Scooter";

let createdUser = new User(":)", "shawny", 28);

createdUser.login("shawny");
console.log(createdUser)

let newScooter = new Scooter("Wilson Language");
newScooter.rent(createdUser);
console.log(`just rented`, newScooter)
let coolScooter = new Scooter("Wilson Language");
console.log(coolScooter)
newScooter.dock("Wilson Language");
console.log(`Scooter returned`, newScooter)