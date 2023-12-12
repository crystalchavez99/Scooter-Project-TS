"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Scooter = void 0;
var Scooter = /** @class */ (function () {
    function Scooter(station) {
        this.station = station;
        this.user = null;
        this.serial = Scooter.nextSerial;
        this.charge = 100;
        this.isBroken = false;
        Scooter.nextSerial += 1;
    }
    Scooter.prototype.rent = function (user) {
        if (this.charge < 20 || this.isBroken == true) {
            throw Error("Scooter needs to be charged or repairs.");
        }
        else {
            this.user = user;
            this.station = null;
        }
    };
    Scooter.prototype.dock = function (station) {
        this.user = null;
        this.station = station;
        this.charge = 10;
        this.isBroken = true;
    };
    Scooter.nextSerial = 1;
    return Scooter;
}());
exports.Scooter = Scooter;
