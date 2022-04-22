/**
 * Khối 1: Input
 * + Luong1Ngay
 * + SoNgayLam
 * 
 * Khối 2: 
 * B1: tìm tới thẻ bằng id
 * B2: Tạo hàm
 *      + Lấy giá trị từ form
 *      + Lấy công thức tính toán:
 *      Luong = Luong1Ngay * SoNgayLam
 * B3: Gắn sự kiện click cho button
 * B4: Hiển thị kết quả lên UI
 * 
 * Khối 3: Output
 * +Lương
 * 
 */


var inputluong1Ngay = document.getElementById("inputLuong1Ngay");
var inputsoNgayLam = document.getElementById("inputSoNgayLam");

function TinhLuong() {
    var luong1Ngay =  inputLuong1Ngay.value;
    var soNgayLam =  inputSoNgayLam.value;

    var luong = luong1Ngay * soNgayLam;    

    document.getElementById("txtResult").innerHTML = luong.toLocaleString() + " VND";
    document.getElementById("txtResult").style.textAlign = "center";
    document.getElementById("txtResult").style.marginTop = "25px";
    
}

document.getElementById("btnCalc").onclick = TinhLuong;
