/* jslint devel: true */
/* eslint-disable no-console */
/* eslint no-undef: "error" */
/* eslint-env node */

/* 클라이언트가 요청할 때 발생하는 이벤트 처리 */

var http = require('http');
var server = http.createServer(); // 웹 서버 객체 만들기 
var port = 3000;                  // 웹 서버를 시작하여 3000번 포트에서 대기하기 
server.listen(port, function() {
    console.log('웹 서버가 시작되었습니다. : %d', port);
});
//.on클라이언트 연결 이벤트
server.on('connection', function(socket) {
    var addr= socket.address();
    console.log('클라이언트가 접속했습니다. : %s, %d', addr.address, addr.port);
});
//클라이언트 요청 이벤트 처리
server.on('request', function(req, res) {
    console.log('클라이언트 요청이 들어왔습니다.');
    
    res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
    res.write("<!DOCTYPE html>");
    res.write("<html>");
    res.write(" <head>");
    res.write(" <title>응답페이지</title>");
    res.write(" </head>");
    res.write(" <body>");
    res.write(" <h1>노드제이에스로부터의 응답 페이지</h1>");
    res.write(" </body>");
    res.write("</html>");
    res.end(); 
});
