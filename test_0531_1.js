/*jslint devel: true */ //exam
/* eslint-disable no-console */
/* eslint no-undef: "error" */
/* eslint-env node */

var http = require('http');             //프로토콜
var fs = require('fs');
var server =http.createServer();        //웹서버 객체를 만듭니다
var port=3000;                          // 웹 서버를 시작하여 3000번 포트에서 대기하도록 설정합니다
server.listen(port, function(){         //listen() 메소드를 가동하면 웹서버가 가동됩니다
    console.log('웹서버가 시작되었습니다. : %d', port);
});

server.on('connection',function(socket){
    var addr = socket.address();
    console.log('클라이언트가 접속했습니다.: %s, %d', addr.address,addr.port);
});
                                       //클라이언트 요청 이벤트 처리
server.on('request',function(req,res){
    console.log('클라이언트 요청이 들어왔습니다.');
    var filename = 'music.mp3';
    fs.readFile(filename, function(err, data){
                res.writeHead(200, {"Content-Type": "audio/mp3"}); //구글 -> '유튜브 영상 다운로드' 검색 -> 유튜브 음원 링크 
                res.write(data);
                res.end();
     });
});
                                      //서버종료 이벤트 처리  
server.on('close',function(){
    console.log('서버가 종료합니다');
});