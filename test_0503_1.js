/* jslint devel: true */
/* eslint-disable no-console */
/* eslint no-undef: "error" */
/* eslint-env node */

/* 배열에 원소 추가 pop, push, unshift */

var Users = [
    {name:'소녀시대', age:20},
    {name:'걸스데이', age:22},
    {university:'남서울대', studentnumber:20100122}
];
Users.push({name:'티아라', age:23});

/*Users.pop() 배열 Users의 값 삭제 */ 

console.log('사용자 수 : %d', Users.length); /* .length의 역할 : 배열 Users의 개수를 자동으로 계산 */
console.log('첫 번째 사용자 이름 : %s', Users[0].name);
console.log('첫 번째 사용자 나이 : %s', Users[0].age);
console.log('두 번째 사용자 이름 : %s', Users[1].name);
console.log('두 번째 사용자 나이 : %s', Users[1].age);
console.log('세 번째 사용자 학교 : %s', Users[2].university);
console.log('세 번째 사용자 학번 : %s', Users[2].studentnumber);

console.log('네 번째 사용자 이름 : %s', Users[3].name);
console.log('네 번째 사용자 나이 : %s', Users[3].age);

/* splice 사용, slice 사용하기 */

Users.splice(1, 0, {name : '애프터스쿨', age : 25});
console.log('splice()로 요소를 인덱스 1에 추가한 후');
console.dir(Users);
Users.splice(2, 1);
console.log('splice()로 인덱스 1의 요소를 1개 삭제한 후');
console.dir(Users);




