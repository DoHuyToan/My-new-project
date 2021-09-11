class Apple {
    constructor() {
        this.weight=10;
        this.status=true;
    }
    getWeight(){
        return this.weight;
    }
    decrease(){
        if(this.status){
            this.weight--
        }
    }
    checkStatus() {
        if (this.weight===0){
            return !this.status
    }
}
let apple1 = new Apple()