class Remote {
    constructor(_code,_tivi) {
        this.code = _code
        this.tivi = _tivi
    }
    setTivi(tivi){
        this.tivi = tivi
    }
    setCode(code){
        this.code = code
    }
    changeChannel(newChannel){
        this.tivi.setChannel(newChannel)
    }
}
let remote = new Remote("HPG","tv1")