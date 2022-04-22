/**
 * Khối 1: Input
 * + SoTienUSD
 * + TiLeQuyDoi
 * 
 * Khối 2: các bước xử lí
 * B1: tìm tới thẻ bằng id
 * B2: Tạo hàm
 *      + Lấy giá trị từ form
 *      + Lấy công thức tính toán
 *      SoTienSauQuyDoi = SoTienUSD * TiLeQuyDoi
 * B3: Gắn sự kiện click cho button
 * B4: Hiển thị kết quả lên UI
 * 
 * Khối 3: Output
 * + SoTienSauQuyDoi
 */


var inputUSD = document.getElementById("inputUSD");
var TiLeQuyDoi = 23500;

function QuyDoiTien() {
    var SoTienUSD = inputUSD.value;

    var SoTienSauQuyDoi = SoTienUSD * TiLeQuyDoi;

    document.getElementById("txtResult").innerHTML = SoTienSauQuyDoi.toLocaleString() + " VND";
    document.getElementById("txtResult").style.textAlign = "center";
    document.getElementById("txtResult").style.marginTop = "25px";

}

document.getElementById("btnCalc").onclick = QuyDoiTien;





