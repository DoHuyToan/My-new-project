let product = [
    new Product("Iphone 12 Pro Max",1500, "Screen: 6,7 inch, 128gb, Ram: 6gb","image/IP12.jpg"),
    new Product("Samsung Galaxy Z",2000,"Screen: 7,6 inch, 256gb, Ram: 12gb", "image/SSZ.png"),
    new Product("Oppo Find", 1000,"Screen: 6,7 inch, 256gb, Ram: 12gb","image/OPP.jpg"),
    new Product("Xiaomi Mi", 800,"Screen: 6,8 inch, 256gb, Ram: 8gb","image/XIA.jpg"),
    new Product("Huawei Pro", 1200,"Screen: 6,7 inch, 256gb, Ram: 6gb","image/HWE.jpg"),
    new Product("Vsmart Pro", 500,"Screen: 6,9 inch, 128gb, Ram: 8gb","image/VSM.jpg")
]
//hàm hiển thị sản phẩm
function showProducts() {
    let content = ''
    for(let i=0; i<product.length; i++){
        content += '<tr>\n' +
            '        <td>' +product[i].getName()+ '</td>\n' +
            '        <td style="text-align:right">' +product[i].getPrice()+ '</td>\n' +
            '        <td>' +product[i].getDescription()+ '</td>\n' +
            '        <td>' +'<img src="'+ product[i].getPicture() + '" height="50" width="50" alt="Không có ảnh"/>'+ '</td>\n' +
            '        <td><button onclick="editProduct(' +i+ ')">Sửa</button></td>\n' +
            '        <td><button onclick="clearProduct(' +i+ ')">Xóa</button></td>\n' +
            '        <td><button onclick="sellProduct(' +i+ ')">Bán hàng</button></td>\n' +
            '    </tr>'
    }
    document.getElementById("products").innerHTML = content
}
showProducts()

//hàm thêm sp, trước tiên thêm input ở html
function addNemProduct() {
    let newName= document.getElementById("newName").value;
    let newPrice= document.getElementById("newPrice").value;
    let newDescription= document.getElementById("newDescription").value;
    let newPicture = document.getElementById("newPicture").value;
    let newProduct = new Product (newName,newPrice,newDescription,newPicture);
    product.push(newProduct);
    showProducts();
}
//xóa sản phẩm, phải có tham số truyền vào vị trí của sản phẩm
function clearProduct(index){
    product.splice(index,1);
    showProducts();
}
//sửa sản phẩm
function editProduct(index){
    let editName = prompt("Nhập tên điện thoại thay thế");
    let editPrice = prompt("Nhập giá điện thoại thay thế");
    let editDescription = prompt("Nhập mô tả điện thoại thay thế");
    let editProduct = new Product(editName,editPrice,editDescription);
    product[index] = editProduct;
    showProducts();
}
function sellProduct(index){
    let price = product[index].getPrice()
    let value = parseInt(document.getElementById("Bill").value)
    let totalPrice = value + price
    document.getElementById("Bill").value = totalPrice
}
function findProduct (){
    let find = document.getElementById("Find").value
    for(let i=0; i<product.length; i++){
        if(find===product[i].getName()){
            let name = product[i].getName()
            let price = product[i].getPrice()
            let description = product[i].getDescription()
            document.getElementById("result").innerHTML = "Thông tin sản phẩm: " + "<br>"  +name+ " " +price+ " " +description
        }
        else {
            document.getElementById("result").innerText = "Không tìm thấy"
        }
    }
}

