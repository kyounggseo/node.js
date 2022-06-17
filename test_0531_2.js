/*jslint devel: true*/
/*eslint-disable no-console */
/*eslint no-undef:"error" */
/*eslint-env node*/

var calc = require('./test_0531_a1');
var calc1 = require('./test_0531_s1');
var calc2 = require('./test_0531_m1');
var calc3 = require('./test_0531_d1');

console.log('모듈로 분리한 후 - calc.add 함수 호출 결과 : %d', calc.add(100,100));
console.log('모듈로 분리한 후 - calc.sub 함수 호출 결과 : %d', calc1.sub(100,100));
console.log('모듈로 분리한 후 - calc.mul 함수 호출 결과 : %d', calc2.mul(100,100));
console.log('모듈로 분리한 후 - calc.div 함수 호출 결과 : %d', calc3.div(100,100));