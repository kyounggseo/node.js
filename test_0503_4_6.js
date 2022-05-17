/* jslint devel: true */
/* eslint-disable no-console */
/* eslint no-undef: "error" */
/* eslint-env node */

/* 스트림 단위로 파일 읽고 쓰기 */

var fs = require('fs');

var infile= fs.createReadStream('C:/Users/ch980/brackets_nodejs/test_2/output.txt', {flags: 'r'} );
var outfile= fs.createWriteStream('C:/Users/ch980/brackets_nodejs/test_2/output2.txt', {flags: 'w'});

infile.on('data', function(data) {
    console.log('읽어들인 데이터', data);
    outfile.write(data);
});

infile.on('end', function() {
    console.log('파일 읽기 종료.');
    outfile.end(function() {
        console.log('파일 쓰기 종료.');
    });
});