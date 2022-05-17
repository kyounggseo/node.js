/* jslint devel: true */
/* eslint-disable no-console */
/* eslint no-undef: "error" */
/* eslint-env node */

/* 객체의 속성에 함수 할당 */

var Person = {};
Person["age"] = 22;
Person["name"] = '박경서';

Person.add = function(a,b) {
    return a+b;
};
Person.div = function(a,b) {
    return a / b;
};
Person.mul = function(a1,b1) {
    return a1 * b1;
};
Person.sub = function(a2,b2) {
    return a2 - b2;
};

console.log('나이 : %d', Person.age);
console.log('이름 : %s', Person.name);
console.log('더하기 : %d', Person.add(10,10));
console.log('나누기 : %d', Person.div(10,10));
console.log('곱하기 : %d', Person.mul(10,10));
console.log('빼기 : %d', Person.sub(10,10));


