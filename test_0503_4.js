/* jslint devel: true */
/* eslint-disable no-console */
/* eslint no-undef: "error" */
/* eslint-env node */

// Person 프로토타입을 만들고 객체 생성하기

function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.walk = function(speed){
    console.log(speed + 'km 속도로 걸어갑니다.');
}

var person01 = new Person('소녀시대', 20);

console.log(person01.name);
console.log(person01.age);


