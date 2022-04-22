/**
 * Khối 1: Input
 * + num (số có 2 chữ số)

 * Khối 2: Các bước xử lí
 * B1: tìm tới thẻ bằng id
 * B2: Tạo hàm
 *      + Lấy giá trị từ form
 *      + Lấy công thức tính toán:
 *      ten (Hàng chục) => num/10
 *      unit (Hàng đơn vị) => num % 10
 * B3: Gắn sự kiện click cho button
 * B4: Hiển thị kết quả lên UI
 * 
 * Khối 3: Output
 * + sum (tổng 2 chữ số)
 */


var inputSo = document.getElementById("inputSo");

function TinhTong2ChuSo() {
    var num = inputSo.value;

    var ten = Math.floor(num / 10);

    var unit = num % 10;

    var sum = ten + unit;

    document.getElementById("txtResult").innerHTML = sum;
    document.getElementById("txtResult").style.textAlign = "center";
    document.getElementById("txtResult").style.marginTop = "25px";

}

document.getElementById("btnCalc").onclick = TinhTong2ChuSo;