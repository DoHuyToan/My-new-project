class Human {
    constructor(_name, _gender, _weight) {
        this.name = _name;
        this.gender = _gender;
        this.weight = _weight;
    }

    getWeight() {
        return this.weight;
    }

    talk(text) {
        console(text);
    }

    check(apple) {
        return apple.getWeight() > 0;
    }

    eat(apple) {
        if (this.check(apple)) {
            this.weight++;
            apple.decrease();
        }
    }
}
