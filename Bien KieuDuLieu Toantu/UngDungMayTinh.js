function PhepCong(){
    let number1= document.getElementById("number1").value
    let number2=document.getElementById("number2").value
let KetQua= number1 + number2
    document.getElementById("KetQua").innerHTML="Ket Qua La" + KetQua
}

function PhepTru(){
    let number1= document.getElementById("number1").value
    let number2=document.getElementById("number2").value
    let KetQua= number1 - number2
    document.getElementById("KetQua").innerHTML="Ket Qua La" + KetQua
}

function PhepNhan(){
    let number1= document.getElementById("number1").value
    let number2=document.getElementById("number2").value
    let KetQua= number1 * number2
    document.getElementById("KetQua").innerHTML="Ket Qua La" + KetQua
}

function PhepChia(){
    let number1= document.getElementById("number1").value
    let number2=document.getElementById("number2").value
    let KetQua= number1/number2
    document.getElementById("KetQua").innerHTML="Ket Qua La" + KetQua
}
