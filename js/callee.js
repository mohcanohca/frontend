/**
 * Created by Lenovo on 2018/3/14.
 */

//caller与callee
//callee是arguments对象的一个属性，指向 arguments 对象的函数，即当前函数。
//caller是函数对象的一个属性，指向调用当前函数的函数。

//阶乘
function factorial(num) {
    console.log(arguments.callee.caller);//指向函数的调用者
    if(num<=1){
        return 1;
    }else{
        return num*arguments.callee(num-1);
    }
}
console.log(this);
function main(){
    factorial(4);
}
main();