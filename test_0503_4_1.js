/* jslint devel: true */
/* eslint-disable no-console */
/* eslint no-undef: "error" */
/* eslint-env node */

/* url 모듈의 주요 메서드 parse, format 사용 */

var url = require('url');
var curURL = url.parse('https://m.search.naver.com/search.naver?query=steve+jobs&where=m&sm=mtp_hty');

var curStr = url.format(curURL);

console.log('주소 문자열 : %s', curStr);
console.dir(curURL);