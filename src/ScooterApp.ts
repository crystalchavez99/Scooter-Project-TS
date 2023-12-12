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
        if(this.registeredUsers[username]){
            this.registeredUsers[username].login(password);
            console.log("User has been logged in.")
        }else{
            throw Error("Username or password is incorrect");
        }
    }

    logoutUser(username: string): void{
        if(this.registeredUsers[username]){
            this.registeredUsers[username].logout();
            console.log("User has been logged out.")
        }else{
            throw Error("No such user is logged in.");
        }
    }

    createScooter(station: string): Scooter{
        if(this.stations[station]){
            let made = new Scooter(station);
            this.stations[station].push(made);
            console.log("Created a new scooter.");
            console.log(this.stations);
            return made;
        }else{
            throw Error("No such station!");
        }
    }

    dockScooter(scooter: Scooter, station: string): void{
        if(this.stations[station]){
            this.stations[station].forEach(scoot =>{
              if(scoot.serial === scooter.serial){
                throw new Error("Scooter is already at station!")
              }
            });
            this.stations[station].push(scooter);
            scooter.dock(station)
            console.log("Scooter is docked!")
          }else{
            throw Error("No such station!")
          }
    }

    rentScooter(scooter: Scooter, user: User): void{
        for(let station in this.stations){
            let currStation = this.stations[station];
            for(let i = 0; i < currStation.length; i++){
              if(currStation[i].serial === scooter.serial){
                currStation.splice(i,1);
                scooter.rent(user);
                console.log("Scooter is rented!")
                return;
              }
            }
          }
          throw Error("Scooter already rented!")
    }

    print(): string{
        console.log(`Users: ${Object.values(this.registeredUsers)}`)
        console.log(`Stations: ${Object.entries(this.stations)}`)
        return `Users: ${Object.values(this.registeredUsers)}\nStations: ${Object.entries(this.stations)}`
      }
}