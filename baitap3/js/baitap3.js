/**
 * Khối 1: Input
 * + SoTienUSD
 * + TiLeQuyDoi
 * 
 * Khối 2: các bước xử lí
 * + SoTienSauQuyDoi = SoTienUSD * TiLeQuyDoi
 * 
 * Khối 3: Output
 * + SoTienSauQuyDoi
 */


// B1:
var SoTienUSD = 2;
var TiLeQuyDoi = 23500;
var SoTienSauQuyDoi = 0;

// B2:
SoTienSauQuyDoi = SoTienUSD * TiLeQuyDoi;

// B3:
console.log("Số Tiền Sau Quy Đổi: " + SoTienSauQuyDoi.toLocaleString() + " VND");
