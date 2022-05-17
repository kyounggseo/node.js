/* jslint devel: true */
/* eslint-disable no-console */
/* eslint no-undef: "error" */
/* eslint-env node */

/* http 모듈로 웹서버 시작 */

var http = require('http');

var server = http.createServer();

var port = 3000;
server.listen(port, function() {
    console.log('웹 서버가 시작되었습니다 : %d', port);
});