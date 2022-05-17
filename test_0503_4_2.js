/* jslint devel: true */
/* eslint-disable no-console */
/* eslint no-undef: "error" */
/* eslint-env node */

process.on('tick', function(count) {
    console.log('tick 이벤트 발생함 : %s', count);
});
setTimeout(Function() {
           process.emit('tick', '2');
}, 2000);