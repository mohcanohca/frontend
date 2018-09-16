/**
 * Created by ydz on 2018/4/23.
 */
//闭包呀闭包
/*
用处：
1、读取函数内部的变量
2、让引用的外部函数的变量的值始终保持在内存中

注意点：
1、闭包会使得函数中的变量被保存在内存中，内存消耗很大，所以不能滥用闭包，会造成网页的性能问题，IE中可能导致内存泄漏。
解决方法：在退出函数前，将不使用的局部变量全部删除。
2、闭包会在父函数外部，改变父函数内部变量的值。所以，如果把父函数当做对象使用，闭包当做它的公用方法，内部变量当做它的私有属性，此时，不要随便改变父函数内部变量的值
 */
function outer() {
    var n=2;

    //闭包
    add=function () {
        n++;
    }

    //闭包
    function inner() {
        alert(n);//保留对外部函数的变量n的引用
    }

    n=null;
    return inner;
}
/*var inner=outer();
inner();
add();
inner();*/

function foo() {
    var name='foo';
    this.getName=function () {
        alert(name);
    }
    this.setName=function (cname) {
        name=cname;
    }
}
/*
var f=new foo();
f.getName();
f.setName('aha');
f.getName();*/


var name = "The Window";

var object = {
    name : "My Object",

    getNameFunc : function(){
        console.log(this);//this==object
        return function(){
            return this.name;//this指向调用该函数的对象
        };

    }

};

alert(object.getNameFunc()());//The Window


var object2 = {
    name : "My Object",

    getNameFunc : function(){
        var that = this;
        return function(){
            return that.name;
        };

    }

};

alert(object2.getNameFunc()());//My Object