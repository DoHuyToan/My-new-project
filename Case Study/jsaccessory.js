let productA = [
    new ProductA("Tai nghe AriPods",150,"Bluetooth, Không dây, Sử dụng: 5h","picture/AIP.jpg"),
    new ProductA("Sạc dự phòng Samsung",100,"Cổng vào: MicroUSB, Cổng ra: USB 2.0, 1000 mAh","picture/SAC.jpeg"),
    new ProductA("Thẻ nhớ Toshiba",50,"Class: 10, 32 GB, 100MB/s","picture/THE.jpg"),
    new ProductA("Ốp lưng",80,"Màu: trong, Chất liệu: bao da,","picture/OP.jpg"),
    new ProductA("Dán màn hình", 20,"Màu: trong, Chất liệu: plastic","picture/DAN.jpg"),
    new ProductA("Apple Watch", 200,"Chất liệu: cao su, 8GB, 38mm","picture/WAT.jpg")
]
function showProductA(){
    let conten = ''
    for(let i=0; i<productA.length; i++){
        conten+='<tr>\n' +
            '        <td>' +productA[i].getNameA()+ '</td>\n' +
            '        <td style="text-align:right">' +productA[i].getPriceA()+ '</td>\n' +
            '        <td>' +productA[i].getDescriptionA()+ '</td>\n' +
            '        <td>' +'<img src="' +productA[i].getPictureA()+ '" height="50" width="50" alt="Không có ảnh"/>'+ '</td>\n' +
            '        <td><button onclick="editProductA(' +i+ ')">Sửa</td>\n' +
            '        <td><button onclick="clearProductA(' +i+ ')">Xóa</button></td>\n' +
            '        <td><button onclick="sellProductA(' +i+ ')">Bán hàng</button></td>\n' +
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
    let newPictureA = document.getElementById("newPictureA").value
    let newProductA = new ProductA(newNameA,newPriceA,newDescriptionA,newPictureA);
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
    let editNameA = prompt("Nhập tên phụ kiện thay thế");
    let editPriceA = prompt("Nhập giá phụ kiện thay thế");
    let editDesciptionA = prompt("Nhập mô tả phụ kiện thay thế");
    let editPictureA = prompt("Nhập ảnh phụ kiện thay thế");
    let editProductA = new ProductA(editNameA,editPriceA,editDesciptionA,editPictureA);
    productA[index] = editProductA;
    showProductA()
}
function sellProductA(index){
    let price = productA[index].getPriceA();
    let value = parseInt(document.getElementById("billA").value);
    let total = price + value;
    document.getElementById("billA").value = total;
}
function findProductA (){
    let findA = document.getElementById("FindA").value
    for(let i=0; i<productA.length; i++){
        if(findA===productA[i].getNameA()){
            let nameA = productA[i].getNameA()
            let priceA = productA[i].getPriceA()
            let descriptionA = productA[i].getDescriptionA()
            document.getElementById("resultA").innerHTML = "Thông tin sản phẩm: " + "<br>"  +nameA+ " " +priceA+ " " +descriptionA
        }
        else {
            document.getElementById("resultA").innerText = "Không tìm thấy"
        }
    }
}