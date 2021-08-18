function DoiTien(){
    let fromcur = document.getElementById("from").value;
    let tocur = document.getElementById("to").value;
    let amountmoney = parseInt(document.getElementById("amount").value);
    let DoiTien;
    if(fromcur === "VND" && tocur === "USD"){
        KetQua = amountmoney/23000
    } else if(fromcur === "USD" && tocur=== "VND"){
        KetQua = amountmoney*23000
    } else {
        KetQua = amountmoney
    }
    document.getElementById("KetQua").innerHTML = "Ket qua la" + KetQua
}





