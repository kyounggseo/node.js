/* jslint devel: true */
/* eslint-disable no-console */
/* eslint no-undef: "error" */
/* eslint-env node */

/* 새 디렉터리 만들고 삭제하기 */

var fs = require('fs');

fs.mkdir('C:/Users/ch980/brackets_nodejs/test_2/docs', 0666, function(err) {
    if(err) throw err;
    console.log('새로운 docs 폴더를 만들었습니다.');
    
    fs.rmdir('C:/Users/ch980/brackets_nodejs/test_2/docs', function(err) {
        if(err) throw err;
        console.log('docs 폴더를 삭제했습니다.');
    }); 
});