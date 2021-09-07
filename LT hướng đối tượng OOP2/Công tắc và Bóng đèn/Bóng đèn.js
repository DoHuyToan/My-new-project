class ElectricLamp {
    constructor(_status) {
        this.status =_status
    }
    turnOn(){
        this.status = true
        alert("Bật đèn")
    }
    turnOff(){
        this.status = false
        alert("Tắt đèn")
    }
}
let lamp1= new ElectricLamp(true)
let lamp2= new ElectricLamp(true)