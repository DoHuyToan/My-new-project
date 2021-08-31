let array = ['iphone7','iphone8','iphoneX']

// Hàm showSP
// Tham số: ko có
// Thân:
// Đầu ra:
// Mỗi lần lặp là thêm 1 <tr>
function showSP(){
    conten=""
    for(i=0; i<array.length; i++){
        conten+="<tr>\n" +
            "        <td>" + array[i] + "</td>\n" +
            "        <td><button onclick='clearSP(" +i+ ")'>Xóa</button> </td>\n" +
            "        <td><button onclick='editSP(" +i+ ")'>Sửa</td>\n" +
            "    </tr>"
    }
    document.getElementById("findSP").innerHTML = conten
}
showSP()
// Hàm thêm sp mới: newSP
// Tham số: ko có
// Thân:
// Đầu ra:
// B1: nhập sp mới vào: prompt
// B2: add sp mới vào: push
// B3: Hiện sp mới ra
function newSP(){
    let newProduct = prompt("Nhập tên sp mới vào")
    array.push(newProduct)
    showSP()
}
// Hàm xóa sp: clearSP
// Tham số: Index
// Thân:
// Đầu ra:
// B1: Xóa sp
// B2: Hiển thị lại danh sách
function clearSP(index){
    array.splice(index,1)
    showSP()
}
// Hàm chỉnh sửa: editSP
// Tham số: Index
// Thân:
// Đầu ra:
// B1: Thêm SP thay thế
// B2: Đổi tên SP cần thay thế
// B3: Hiển thị lên
function editSP(index){
    let difSP = prompt("Nhập tên SP thay thế")
    array [index] = difSP
    showSP()
}