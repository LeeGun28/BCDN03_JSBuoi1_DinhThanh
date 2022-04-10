/**
 * Khối 1: Input
 * + num (số có 2 chữ số)

 * Khối 2: Các bước xử lí
 * + ten (Hàng chục) => num/10
 * + unit (Hàng đơn vị) => num % 10
 * 
 * 
 * Khối 3: Output
 * + sum (tổng 2 chữ số)
 */


// B1:
var num = 96;
var ten = 0;
var unit = 0;
var sum = 0;

// B2:
ten = Math.floor(num/10);

unit = num % 10;

sum = ten + unit;

// B3:
console.log("Tổng 2 chữ số: " + sum);