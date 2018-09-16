/*
要求：
1、给定一个字符串，字符串中含有固定格式的子字符串，对应对象中的属性
2、给出一个对象，将字符串中的变量替换成对象中的属性值
例子：
I am <%:name>. I like <%:likething>
obj={name:'ydz',likething:'apple'}
结果： I am ydz. I like apple.
 */
function replaceMode(str,obj) {
    var reg=/<%:[^(<%:)]+>/g;
    console.log(reg.test(str));
    str=str.replace(reg,function (substr) {
        var re=substr.slice(3,-1).trim();
        console.log(re);
        if(re in obj){
            console.log(obj[re]);
            return obj[re];
        }
    });
    return str;
}
var str='I am <%:name>. I like <%:likething>';
var obj={name:'ydz',likething:'apple'};
console.log(replaceMode(str,obj));
