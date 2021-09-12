class Humans1 {
    constructor(_name,_gender,_weight) {
        this.name = _name
        this.gender = _gender
        this.weight = _weight
    }
    talk(text){
        return text
    }
    checkApple(apple){
        return apple.getWeight()>0
    }
    eatApple(apple){
        if(this.checkApple(apple)){
            this.weight++
            apple.decrease()
        }
    }
}
let adam = new Humans1("Adam",true,70)
let eva = new Humans1("Eva",false,50)

