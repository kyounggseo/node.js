/* jslint devel: true */
/* eslint-disable no-console */
/* eslint no-undef: "error" */
/* eslint-env node */

/* 객체 만들기 */

var Person = {};
Person["age"] = 20;
Person["name"] = '소녀시대';
Person.mobile = '010-9758-4796';

console.log('나이 : %d', Person.age);
console.log('이름 : %s', Person.name);
console.log('전화 : %s', Person["mobile"]);
