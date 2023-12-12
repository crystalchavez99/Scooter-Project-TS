import { User } from "./User";
import { Scooter } from "./Scooter";

export class ScooterApp {
    stations = {};
    registeredUsers = {};
    constructor(stations = {
        "Codio": [],
        "Multiverse": [],
        "Wilson": []
    }, registeredUsers = {}) {
        this.stations = stations;
        this.registeredUsers = registeredUsers;
    }

    registerUser(username: string, password: string, age: number): User{
        if(age < 18){
            throw Error("Too young to register!");
        }
        if(this.registeredUsers[username]){
            throw Error("Already Registered!");
        }
        let user: User = new User(username, password, age);
        this.registeredUsers[username] = user;
        console.log("User has been registered!")
        return user;
    }

    loginUser(username: string, password: string): void{
        
    }
}