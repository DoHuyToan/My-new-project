class Product {
    //nội dung sản phẩm
    //thuộc tính sản phẩm
    constructor(_name,_price,_description) {
        this.name=_name
        this.price=_price
        this.description=_description
    }
    //phương thức sp: lấy ra các giá trị của thuộc tính
                   // gán lại(đổi) giá trị của thuộc tính
    getName(){
        return this.name
    }
    getPrice(){
        return this.price
    }
    getDescription(){
        return this.description
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
}