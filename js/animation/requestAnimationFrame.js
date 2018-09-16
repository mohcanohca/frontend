/*
requestAnimationFrame是浏览器用于定时循环的操作的一个借口，类似于setTimeout，主要用于按帧对网页进行重绘。
目的：让各种网页动画效果有一个统一的刷新机制，从而节省系统资源，提高系统性能，改善视觉效果。
优势：
（1）充分利用浏览器的刷新机制，节省系统资源。显示器的固定刷新频率是60Hz或75Hz。
requestAnimationFrame的基本思想就是与这个刷新频率保持同步，利用这个刷新频率进行页面重绘
（2）当页面不处于浏览器的当前标签，就会自动停止刷新，节省了CPU、GPU和电力。

requestAnimationFrame是在主线程上完成。这意味着，如果主线程非常繁忙，requestAnimationFrame的动画效果会大打折扣。

参数：一个回调函数，在浏览器重绘之前调用。
 */

//兼容性处理
window.requestAnimFrame = (function(){
    return  window.requestAnimationFrame       ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame    ||
        window.oRequestAnimationFrame      ||
        window.msRequestAnimationFrame     ||
        function( callback ){
            //按照1秒钟60次模拟
            window.setTimeout(callback, 1000 / 60);
        };
})();

var elem=document.getElementById('test');
var cur=0;
var globalId;
function render() {
    cur%=100;
    elem.style.left=cur+'px';
    cur++;
}

function animationLoop() {
    render();
    globalId=window.requestAnimationFrame(animationLoop);
}
document.addEventListener("DOMContentLoaded",function () {
    var start=document.getElementById("start");
    var stop=document.getElementById("stop");
    start.addEventListener('click',window.requestAnimationFrame.bind(null,animationLoop));
    stop.addEventListener('click',function () {
        window.cancelAnimationFrame(globalId)
    });
})