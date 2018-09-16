//内存泄漏的原因

//1、全局对象
function leaks(){
    leak = 'xxxxxx';//leak 成为一个全局变量，不会被回收
}

//2、闭包引起
var leaks = (function(){
    var leak = 'xxxxxx';// 被闭包所引用，不会被回收
    return function(){
        console.log(leak);
    }
})()
leaks();