let productA = [
    new ProductA("Tai nghe AriPods","150$","Bluetooth, Không dây, Sử dụng: 5h"),
    new ProductA("Sạc dự phòng Samsung","100$","Cổng vào: MicroUSB, Cổng ra: USB 2.0, 1000 mAh"),
    new ProductA("Thẻ nhớ Toshiba","50$","Class: 10, 32 GB, 100MB/s"),
    new ProductA("Ốp lưng","50$","Màu: trong, Chất liệu: bao da, "),
    new ProductA("Dán màn hình", "20$","Màu: trong, Chất liệu: plastic"),
    new ProductA("Apple Watch", "200$","Chất liệu: cao su, 8GB, 38mm" )
]
function showProductA(){
    let conten = ''
    for(let i=0; i<productA.length; i++){
        conten+='<tr>\n' +
            '        <td>' +productA[i].getNameA()+ '</td>\n' +
            '        <td style="text-align:right">' +productA[i].getPriceA()+ '</td>\n' +
            '        <td>' +productA[i].getDescriptionA()+ '</td>\n' +
            '        <td><button onclick="editProductA(' +i+ ')">Sửa</td>\n' +
            '        <td><button onclick="clearProductA(' +i+ ')">Xóa</button></td>\n' +
            '    </tr>'
    }
    document.getElementById("accessory").innerHTML = conten
}
showProductA()
//thêm sản phẩm
function addNewProductA(){
    let newNameA = document.getElementById("newNameA").value;
    let newPriceA = document.getElementById("newPriceA").value;
    let newDescriptionA = document.getElementById("newDescriptionA").value;
    let newProductA = new ProductA(newNameA,newPriceA,newDescriptionA);
    productA.push(newProductA);
    showProductA();
}
//xóa sản phẩm
function clearProductA(index){
    productA.splice(index,1)
    showProductA()
}
//sửa sản phẩm
function editProductA(index){
    let editNameA = prompt("Nhập tên phụ kiện thay thế")
    let editPriceA = prompt("Nhập giá phụ kiện thay thế")
    let editDesciptionA = prompt("Nhập mô tả phụ kiện thay thế")
    let editProductA = new ProductA(editNameA,editNameA,editDesciptionA)
    productA[index] = editProductA
    showProductA()
}