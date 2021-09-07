class SwitchButton {
    constructor(_status,_lamp) {
        this.status = _status
        this.lamp=_lamp
    }
    //kết nối với bóng đèn
    setLamp(lamp){
        this.lamp=lamp
    }
    turnOn(){
        this.lamp.turnOn()
        this.status = true
    }
    turnOff(){
        this.lamp.turnOff()
        this.status = false
    }
}
let button = new SwitchButton(true,lamp1)