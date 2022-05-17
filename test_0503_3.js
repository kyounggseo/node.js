/* jslint devel: true */
/* eslint-disable no-console */
/* eslint no-undef: "error" */
/* eslint-env node */

/* 더하기 함수를 실행했을 때 기록을 남겨두었다가 출력하기 */

function add(a,b, callback) {
    var result = a + b;
    callback(result);
    var history = function() {
        return a + '+' + b + '=' + result;
    };
    return history;
}

var add_history  = add(10,10, function(result){
    console.log('%d', result);
});

console.log( '결과 :' +add_history());