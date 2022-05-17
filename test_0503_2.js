/* jslint devel: true */
/* eslint-disable no-console */
/* eslint no-undef: "error" */
/* eslint-env node */

// 콜백 함수를 파라미터로 전달하기

function add(a, b, callback) {
    var resilt = a + b;
    callback(resilt);
}

add(10, 10, function(result) {
    console.log('파라미터로 전달된 콜백 함수 호출됨');
    console.log('더하기(10,10)의 결과 : %d', result);
});