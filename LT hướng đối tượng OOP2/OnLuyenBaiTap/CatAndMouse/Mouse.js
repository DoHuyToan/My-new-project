class Mouse {
    constructor(_name,_weight,_speed,) {
        this.name = _name
        this.weight = _weight
        this.speed = _speed
        this.status = true
    }
    say(text){
        console.log(text)
    }
}
let mouse1 = new Mouse("Jerry",2,10)