/* jslint devel: true */
/* eslint-disable no-console */
/* eslint no-undef: "error" */
/* eslint-env node */

/* 파일을 직접 열고 데이터 쓰기 */
var fs = require('fs');


fs.open('C:/Users/ch980/brackets_nodejs/test_2/output.txt', 'w', function(err, fd) {
    if(err) throw err;
    var buf= new Buffer('안녕!\n');
    fs.write(fd, buf, 0, buf.length, null, function(err, written, buffer) {
        if(err) throw err;
        console.log(err, written, buffer);
        
        
        fs.close(fd, function() {
            console.log('파일 열고 데이터 쓰고 파일 닫기 완료.');
        });
    });
});


