let array = ['Iphone1','Iphone5','Iphone8']
// tên: showSP
// tham số: ko có
// dữ liệu trả về: ko có
// thân hàm: mỗi lần lặp + 1 <tr> --> ghi ra nội dung
function showSP(){
    let conten = ''
    for (let i=0; i<array.length; i++){
        conten += '<tr>\n' +
            '        <td>' +array[i]+ '</td>\n' +
            '        <td><button onclick="editSP('+ i +')"> Sửa</button></td>\n' +
            '        <td><button onclick="clearSP('+ i +')">Xóa</button></td>\n' +
            '    </tr>'
    }
    document.getElementById("FindSp").innerHTML = conten
}
showSP()
// Tạo mới: Tên: newSP,
// tham số: ko có
// dữ liệu trả về:
// thân hàm:
// B1: lấy dữ liệu từ prompt
// B2: push dữ liệu vào mảng
// B3: hiển thị lại danh sách
function newSP(){
    let newPro= prompt("NHập sản phẩm mới");
    array.push(newPro);
    showSP();
}
// Xóa, tên: clearSP
// tham số: index
// dữ liệu trả về:
// thân hàm:
// B1: xóa SP
// B2: hiển thị lại danh sách
function clearSP(index){
    array.splice(index,1);
    showSP()
}

// Sửa: tên: editSP
// tham số: index
// dữ liệu trả về:
// thân hàm:
// B1: lấy dữ liệu mới từ prompt
// B2: add vào
function editSP(index){
    let newSP = prompt("Nhập sản phẩm thay thế")
    array[index]= newSP
    showSP()
}









