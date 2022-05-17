/* jslint devel: true */
/* eslint-disable no-console */
/* eslint no-undef: "error" */
/* eslint-env node */

/* 노드의 파일 시스템 */

var fs = require('fs');

var data = fs.readFileSync('./package.json', 'utf8');
console.log(data);
