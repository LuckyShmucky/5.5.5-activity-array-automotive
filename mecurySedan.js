import Vehicle from "./vehicle.js";

class Car extends Vehicle{
    super(make, model, year, color, mileage){
        this.maxPassengers = 6; 
        this.passenger = 0; 
        this.numberOfWheels = 4; 
        this.maxSpeed = 200;
        this.fuel = 100;
        this.scheduleService = false;
    }
    loadPassenger(num){
        if (passenger < maximumPassengers){
            availableRoom == true
            console.log('More seats available')
        }
    }
    start(){
        if (fuel > 0){
            start == true
            console.log('Vehicle has started')
        }
        
    }
    scheduleService(mileage){
        if (mileage > 30000){
        console.log("time for maintenance")        
        }
    }
}

//this includes the vehicle class as a module
const VehicleModule = require("./vehicle")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)