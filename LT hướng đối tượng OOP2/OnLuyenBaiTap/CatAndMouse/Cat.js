class Cat {
    constructor(_name,_weight,_maxSpeed,) {
        this.name = _name
        this.weight = _weight
        this.maxSpeed = _maxSpeed
    }
    say(text){
        console.log(text)
    }
    catch(mouse){
        if(this.maxSpeed>mouse.speed){
            console.log("Mèo " +this.name+ " đã bắt được chuột " +mouse.name)
        }
    }
    eat(mouse){
        console.log("Mèo "+ +this.name+ " đã ăn chuột " +mouse.name)
        mouse.status=false
        this.weight+=mouse.weight
    }
}
let cat1 = new Cat("Tom",5,12)