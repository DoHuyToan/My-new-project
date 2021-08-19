function Cong(){
    let num1= document.getElementById("num1").value;
    num1=parseInt(num1);
    let num2= document.getElementById("num2").value;
    num2=parseInt(num2);
    let KetQua= num1 + num2;
    document.getElementById("KetQua").innerText = KetQua;
}