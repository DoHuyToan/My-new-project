function PhepCong(){
    let So1= parseInt(document.getElementById("number1").value);
    let So2= parseInt(document.getElementById("number2").value);
    let KetQua= So1+So2
    document.getElementById("KetQua").innerHTML = "Ket qua la" + KetQua
}