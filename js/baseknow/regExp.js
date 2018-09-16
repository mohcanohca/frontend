/*
正则表达式
1、正则.test(字符串)
2、search()
 */
//定义正则
var reg1=new RegExp('a');//RegExp对象。参数就是我们想要制定的规则。有一种情况必须用这种方式。
var reg2=/a/;

//1、正则.test(字符串)
//在字符串中查找符合正则的内容，若查找到返回true,反之返回false
var str='374829348791';
var re=/\D/;//D表示非数字
if( re.test(str) ){   // 返回true,代表在字符串中找到了非数字。
    console.log('不全是数字');
}else{
    console.log('全是数字');
}
//全是数字

var str='nihao ha ha ha';
var re=/\s/;//匹配任何空白字符，包括空格、制表符、换页符等等
console.log(str.split(re).toString());//nihao,ha,ha,ha
console.log(str);//nihao ha ha ha  ====>split不修改源字符串

//2、字符串.search(正则)
//在字符串搜索符合正则的内容，搜索到就返回出现的位置（从0开始，如果匹配的不只是一个字母，那只会返回第一个字母的位置），
// 如果搜索失败就返回 -1
var str='abcde';
var reg=/B/i;
console.log(str.search(reg));//1

// 3、字符串.match(正则)
//在字符串中搜索符合规则的内容，搜索成功就返回内容，格式为数组，失败就返回null。
var str='haj123sdk54hask33dkhalsd879';
var re=/\d+/g;// 每次匹配至少一个数字，且全局匹配。

// 如果不是全局匹配，当找到数字123，它就会停止了。就只会弹出123
// 如果是全局匹配，就会从开始到结束一直去搜索符合规则的。
// 全局匹配下，如果没有加号，匹配的结果就是1，2，3，5，4，3，3，8，7，9；有了加号，每次匹配的数字就是至少一个了。
console.log(str.match(re));// [123，54，33，879]

//4、字符串.replace(正则,新的字符串/回调函数)（在回调函数中，第一个参数指的是每次匹配成功的字符）
//查找符合正则的字符串，就替换成对应的字符串。返回替换后的内容——新字符串。
var str = "我爱北京天安门，天安门上太阳升。";
var re = /北京|天安门/g;  //  找到北京或者天安门，全局匹配。|表示或者

var str2=str.replace(re,'*');//将符合规则的替换成*
console.log(str2);//我爱**，*上太阳升。

//几个字对应几个*
var str3=str.replace(re,function (str) {
    //函数的第一个参数表示每次搜索到的符合正则的字符
    console.log(str);//匹配到三次：北京 天安门 天安门
    var result='';
    for (var i=0;i<str.length;i++){
        result+='*';
    }
    return result;//返回的内容就是要替换成的内容
});
console.log(str3);//我爱*****，***上太阳升。

//():分组符。正则中每一个带()的项，都叫做这个正则的子项。
var str = '2013-6-7';
var reg1=/\d-+/g;//全局匹配数字，横杠，横杠数至少为1
console.log(str.match(reg1));//["3-", "6-"]

var reg2=/(\d+)-/g;//全局匹配数字、横杠，数字至少为1
console.log(str.match(reg2));//["2013-", "6-"]

var reg3=/(\d-)+/g;//全局匹配数字、横杠，数字横杠整体至少为1
console.log(str.match(reg3));//["3-6-"]

//让2013-6-7 变成 2013.6.7
var str = '2013-6-7';
var re = /(\d+)(-)/g;
str=str.replace(re,function ($0,$1,$2) {
    //replace()如果有子项
    //第一个参数：$0（匹配成功后的整体结果  2013-  6-），
    //第二个参数：$1（匹配成功后的第一个分组，这里指\d+，2013 6），
    //第三个参数：$2（匹配成功后的第二个分组，这里指-，- -），
    return $1+'.';
});
console.log(str);//2013.6.7
//整个过程就是利用子项把2013- 6- 分别替换成了2013. 6.  最终输出2013.6.7

//match()在正则不加g的时候也会返回自己的子项
var str='abcbabc';
var re=/(a)(b)(c)/;
console.log(str.match(re));//["abc", "a", "b", "c"]

//在加上g的时候match只返回匹配结果的数组
re=/(a)(b)(c)/g;
console.log(str.match(re));//["abc", "abc"]

//5、exec()方法同match方法一样，搜索符合规则的内容，并返回内容，格式为数组
//正则.exec(字符串)
var str="now test001 test002";

var re=/test(\d+)/;//只匹配一次
var r=re.exec(str);
console.log(r);//["test001","001"]，返回匹配结果，以及子项
console.log(r.length);//2 返回内容的长度
console.log(r.input);//now test001 test002   代表要匹配的字符串
console.log(r[0]);//test001 匹配结果
console.log(r[1]);//001 代表每次匹配成功字符串中的第一个子项
console.log(r.index);//4 每次匹配成功的字符串中的第一个字符的位置

//全局匹配。
str="now test001 test002";
re=new RegExp('test('+'\\d+)','g');
var result;

result=re.exec(str);
console.log(result);//匹配的第一项以及子项
//通过while循环，找到每次匹配到的字符串以及子项，每次匹配都接着上次的位置开始匹配，匹配失败返回null
while(result=re.exec(str)){
    console.log(result);//每次匹配成功的字符串以及子项
    console.log(result.input);//（1）now test001 test002（2）now test001 test002
    console.log(result[0]);//test001 test002匹配结果
    console.log(result[1]);//001 002代表每次匹配成功字符串中的第一个子项
    console.log(result.index);//4 每次匹配成功的字符串中的第一个字符的位置
    console.log(re.lastIndex);//下次从字符串的此位置开始
}
