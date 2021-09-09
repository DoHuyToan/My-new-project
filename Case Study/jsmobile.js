let product = [
    new Product("Iphone 12 Pro Max","1500 $", "Screen: 6,7 inch, 128gb, Ram: 6gb"),
    new Product("Samsung Galaxy Z","2000 $","Screen: 7,6 inch, 256gb, Ram: 12gb"),
    new Product("Oppo Find", "1000 $","Screen: 6,7 inch, 256gb, Ram: 12gb"),
    new Product("Xiaomi Mi", "800 $","Screen: 6,8 inch, 256gb, Ram: 8gb"),
    new Product("Huawei Pro", "1200 $","Screen: 6,7 inch, 256gb, Ram: 6gb"),
    new Product("Vsmart Pro", "500 $","Screen: 6,9 inch, 128gb, Ram: 8gb")
]
//hàm hiển thị sản phẩm
function showProducts() {
    let content = ''
    for(let i=0; i<product.length; i++){
        content += '<tr>\n' +
            '        <td>' +product[i].getName()+ '</td>\n' +
            '        <td style="text-align:right">' +product[i].getPrice()+ '</td>\n' +
            '        <td>' +product[i].getDescription()+ '</td>\n' +
            '        <td><button onclick="editProduct(' +i+ ')">Sửa</button></td>\n' +
            '        <td><button onclick="clearProduct(' +i+ ')">Xóa</button></td>\n' +
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
    let newProduct = new Product (newName,newPrice,newDescription);
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

