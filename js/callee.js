/**
 * Created by Lenovo on 2018/3/14.
 */
//阶乘
function factorial(num) {
    if(num<=1){
        return 1;
    }else{
        return num*arguments.callee(num-1);
    }
}
