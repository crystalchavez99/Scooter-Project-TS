import {User} from './User'
export class Scooter{
    station: string;
    user: User;
    serial: number;
    charge: number;
    isBroken: boolean;
    nextSerial: number;
    constructor(station){
        this.station = station;
        this.user = null;
        this.serial = Scooter.nextSerial;
        this.charge = 100;
        this.isBroken = false;
        Scooter.nextSerial +=1;
        
    }
    static nextSerial : number= 1;
    rent(user):void{
        if(this.charge < 20 || this.isBroken == true){
            throw Error("Scooter needs to be charged or repairs.");
        }else{
            this.user = user;
            this.station = null;
        }
    }
} 