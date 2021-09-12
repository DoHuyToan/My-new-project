class Button {
    constructor(_status,_lamp) {
        this.status=_status
        this.lamp=_lamp
    }
    turnOn(){
        this.status=true
        this.lamp.turnOn()
    }
    turnOff(){
        this.status=false
        this.lamp.turnOff()
    }
    setLamp(lamp){
        this.lamp = lamp
    }
}