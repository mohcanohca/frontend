/*
场景：由于事件频繁被触发，因而频繁执行DOM操作、资源加载等重行为，导致UI停顿甚至浏览器崩溃。
1. window对象的resize、scroll事件
2. 拖拽时的mousemove事件
3. 射击游戏中的mousedown、keydown事件
4. 文字输入、自动完成的keyup事件
实际上对于window的resize事件，实际需求大多为停止改变大小n毫秒后执行后续处理；而其他事件大多的需求是以一定的频率执行后续处理。针对这两种需求就出现了debounce和throttle两种解决办法。
 */


/**
 * 函数去抖debounce：应用于停止改变一段时间后执行处理
 * @param idle {number} 空闲时间，单位毫秒
 * @param action {function}  请求关联函数，实际应用需要调用的函数
 * @return {function} 返回最终客户调用函数
 */
function debounce(idle, action) {
    var last;
    return function () {
        var ctx = this, args = arguments;
        clearTimeout(last);

        //setTimeout的回调函数会在全局环境中调用，this指向window，该函数也有arguments对象
        last = setTimeout(function () {
            action.apply(ctx, args);
        }, idle);

    }
}

/**
 * 函数节流：预设一个执行周期，当调用动作的时刻距离上次调用的时长>=执行周期，就调用
 * @param delay {number} 延迟时间，单位毫秒
 * @param action  {function} 请求关联函数，实际应用需要调用的函数
 * @returns {Function} 返回客户调用函数
 */
function throttle(delay, action) {
    var last = 0;
    return function () {
        var cur = +new Date();
        if (cur - last > delay) {
            action.apply(this, arguments);
            last = cur;
        }
    }
}