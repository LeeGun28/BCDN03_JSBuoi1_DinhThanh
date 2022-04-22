/**
 * Khối 1: Input
 * + number1
 * + number2
 * + number3
 * + number4
 * + number5
 * 
 * Khối 2: Các bước xử lí
 * B1: tìm tới thẻ bằng id
 * B2: Tạo hàm
 *      + Lấy giá trị từ form
 *      + Lấy công thức tính toán
 *      trungbinh  = (number1 + number2 + number3 + number4 + number5) / 5
 * 
 * Khối 3: Output
 * TrungBinh
 */


var inputnum1 = document.getElementById("input1");
var inputnum2 = document.getElementById("input2");
var inputnum3 = document.getElementById("input3");
var inputnum4 = document.getElementById("input4");
var inputnum5 = document.getElementById("input5");


function TinhTrungBinh() {
    var num1 = inputnum1.value;
    var num2 = inputnum2.value;
    var num3 = inputnum3.value;
    var num4 = inputnum4.value;
    var num5 = inputnum5.value;

    console.log(typeof(num1));
    console.log(typeof(num2));

    var trungBinh  = (Number(num1) + Number(num2) + Number(num3) + Number(num4) + Number(num5)) / 5;

    document.getElementById("txtResult").innerHTML = trungBinh.toFixed(2);
    document.getElementById("txtResult").style.textAlign = "center";
    document.getElementById("txtResult").style.marginTop = "25px";
}

document.getElementById("btnCalc").onclick = TinhTrungBinh;


