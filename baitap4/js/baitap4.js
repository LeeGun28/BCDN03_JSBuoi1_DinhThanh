/**
 * Khối 1: Input
 * + ChieuDai
 * + ChieuRong
 * 
 * Khối 2: các bước xử lí
 * B1: tìm tới thẻ bằng id
 * B2: Tạo hàm
 *      + Lấy giá trị từ form
 *      + Lấy công thức tính toán:
 *      DienTich = ChieuDai * ChieuRong
 *      ChuVi = (ChieuDai + ChieuRong) * 2
 * B3: Gắn sự kiện click cho button
 * B4: Hiển thị kết quả lên UI
 * 
 * Khối 3: Output
 * + DienTich
 * + ChuVi
 */

var inputchieuDai = document.getElementById("inputchieuDai");
var inputchieuRong = document.getElementById("inputchieuRong");

function TinhChuvivaDientich() {
    var ChieuDai = inputchieuDai.value;
    var ChieuRong = inputchieuRong.value;

    var DienTich = ChieuDai * ChieuRong;
    var ChuVi = (Number(ChieuDai) + Number(ChieuRong)) * 2;

    document.getElementById("txtResult").innerHTML = "Diện Tích = " + DienTich + "<br> Chu Vi = " + ChuVi;
    document.getElementById("txtResult").style.textAlign = "center";
    document.getElementById("txtResult").style.marginTop = "25px";

}

document.getElementById("btnCalc").onclick = TinhChuvivaDientich;