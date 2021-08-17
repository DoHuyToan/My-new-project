function DoiTien(){
let FromCur = document.getElementById("from").value
    let ToCur = document.getElementById("to").value
    let AmountMoney = parseInt(document.getElementById("amount").value)

    let DoiTien;
    if (FromCur === "VND" && ToCur === ""USD){
        KetQua = AmountMoney/23000
    }else if (FromCur === "USD" && ToCur === "VND"){
        KetQua = AmountMoney*23000
    }else {
        KetQua = AmountMoney
    }
    document.getElementById("KetQua").innerHTML = "Dap an la" + KetQua
}