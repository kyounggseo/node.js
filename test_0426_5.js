/* jslint devel: true */
/* eslint-disable no-console */
/* eslint no-undef: "error" */
/* eslint-env node */

/* 객체를 만들 떄 속성 할당하기 */

var Person = {
    age : 22,
    name : '박경서',
    add: function(a, b) {
         return a + b;
    },
    sub: function(a1,b1) {
         return a1 - b1;
    },
    mul: function(a2, b2) {
        return a2 * b2;
    },
    div: function(a3, b3) {
        return a3 / b3;
    }
};

console.log('더하기  : %d', Person.add(10, 10));
console.log('빼기  : %d', Person.sub(10, 10));
console.log('곱하기  : %d', Person.mul(10, 10));
console.log('나누기  : %d', Person.div(10, 10));