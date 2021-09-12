class Product {
    //nội dung sản phẩm
    //thuộc tính sản phẩm
    constructor(_name,_price,_description,_picture) {
        this.name=_name
        this.price=_price
        this.description=_description
        this.picture=_picture
    }
    //phương thức sp: lấy ra các giá trị của thuộc tính: get
                   // gán lại(đổi) giá trị của thuộc tính: set
    getName(){
        return this.name
    }
    getPrice(){
        return this.price
    }
    getDescription(){
        return this.description
    }
    getPicture(){
        return this.picture
    }
    setName(newName){
        this.name = newName
    }
    setPrice(newPrice){
        this.price = newPrice
    }
    setDescription(newDescription){
        this.description = newDescription
    }
    setPicture(newPicture){
        this.picture = newPicture
    }
}