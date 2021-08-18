function DoiTien(){
    let from = document.getElementById("from").value;
    from=parseInt(from)
    let to = document.getElementById("to").value;
    to=parseInt(to)
    let amount = document.getElementById("amount").value;
    amount=parseInt(amount)

KetQua=amount*from/to

    document.getElementById("KetQua").innerHTML = "Ket qua la" + KetQua;
}





