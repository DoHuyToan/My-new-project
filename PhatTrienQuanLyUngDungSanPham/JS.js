let array = [
    new Product("Note 10", 12000, "Mo ta 1"),
    new Product("Note 8", 9000, "Mo ta 2"),
    new Product("Note 9", 11000, "Mo ta 3"),
]

function showSP(){
    let conten = ''
    for (let i=0; i<array.length; i++){
        conten += '<tr>\n' +
            '        <td>' +array[i].getName()+ '</td>\n' +
            '        <td>' +array[i].getPrice()+ '</td>\n' +
            '        <td>' +array[i].getDescription()+ '</td>\n' +
            '        <td><button onclick="editSP('+ i +')"> Sửa</button></td>\n' +
            '        <td><button onclick="clearSP('+ i +')">Xóa</button></td>\n' +
            '    </tr>'
    }
    document.getElementById("FindSp").innerHTML = conten
}
showSP()

function newSP(){
    let newName = document.getElementById("newName").value;
    let newPrice = document.getElementById("newPrice").value;
    let newDescription = document.getElementById("newDescription").value;
    let newP = new Product(newName,newPrice,newDescription)
    array.push(newP);
    showSP();
}

function clearSP(index){
    array.splice(index,1);
    showSP()
}

function editSP(index){
    let newName = prompt("Tên sản phẩm thay thế")
    let newPrice = prompt("Giá sản phẩm thay thế")
    let newDescription = prompt("Thuộc tính sản phẩm thay thế")
    let newP = new Product(newName,newPrice,newDescription)
    array[index]= newP
    showSP()
}