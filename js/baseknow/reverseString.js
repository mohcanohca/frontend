/**
 * Created by Lenovo on 2018/3/15.
 */
//逆序算法1-借助数组的reverse方法
function reverseString1(str) {
    return str.split('').reverse().join('');
}

//算法2-使用字符串charAt方法
function  reverseString2(str) {
    var result='';
    for(var i=str.length-1;i>=0;i--){
        result+=str.charAt(i);
    }
    return result;
}

/**
 * 算法3-递归实现
 * @param strIn-要转化的字符串
 * @param pos-字符索引
 * @param strOut-逆序后的字符串
 */
function reverseString3(strIn,pos,strOut) {
    if(pos<0){
        return strOut;
    }
    strOut+=strIn.charAt(pos--);
    return reverseString3(strIn,pos,strOut);
}
var strIn='absdf';
var pos=strIn.length-1;
var strOut='';

//算法4-借助call方法
function reverseString4(str) {
    //改变slice方法执行主体，得到一个数组
    var arr=Array.prototype.slice.call(str);
    return arr.reverse().join('');
}


//算法5-借助栈的先进后出方法
function Stack() {
    this.data=[];//保存栈内元素
    this.top=0;//记录栈顶位置
}
//栈的方法
Stack.prototype={
    push:function (ele) {
        this.data[this.top++]=ele;
    },
    pop:function () {
        return this.data[--this.top];
    },
    length: function () {
        return this.top;
    }
}

function reverseString5(str) {
    var s=new Stack();
    var arr=str.split('');
    var result='';
    for(var i=0;i<arr.length;i++){
        s.push(arr[i]);
    }
    while(s.length()>0){
        result+=s.pop();
    }
    return result;
}

//算法6-使用Array类型的pop方法
function reverseString6(str) {
    var arr=str.split('');
    var result='';
    while(arr.length>0){
        result+=arr.pop();
    }
    return result;
}
reverseString6('abs');