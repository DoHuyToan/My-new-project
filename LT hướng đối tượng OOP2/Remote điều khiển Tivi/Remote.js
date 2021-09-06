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
        if(this.tivi){
            this.tivi.setChannel(newChannel)
        }
    }
    changeVolume(newVolume){
        this.tivi.setVolume(newVolume)
    }
    onOff(){
        this.tivi.turOnOff()
    }
}
let remote = new Remote("HPG","tv1")