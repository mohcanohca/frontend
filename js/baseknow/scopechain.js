/**
 * Created by ydz on 2018/4/25.
 */

function f1() {
    var a=10;
    return function () {
        alert(a++);
    }
}
var f2=f1();
f2();