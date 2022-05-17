/* jslint devel: true */
/* eslint-disable no-console */
/* eslint no-undef: "error" */
/* eslint-env node */

/* 함수 만들어 실행하기 */
function add(a, b) {
    return a + b;
}
function sub(a1, b1) {
    return a1 - b1;
}
function div(a2, b2) {
    return a2 / b2;
}
function mul(a3, b3) {
    return a3 * b3;
}

var result1 = add(10,10);
var result2 = sub(10,10);
var result3 = div(10,10);
var result4 = mul(10,10);

console.log("더하기 (10,10) : %d", result1);
console.log("빼기 (10,10) : %d", result2);
console.log("나누기 (10,10) : %d", result3);
console.log("곱하기 (10,10) : %d", result4);