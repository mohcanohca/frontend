/**
 * Created by ydz on 2018/4/12.
 */
var es6Code='var sub=(x,y)=>return x-y';
var es5code=require('babel-core')
//transform方法的第一个参数是一个字符串，表示需要转换的ES6代码，第二个参数是转换的配置对象。
    .transform(es6Code,{
        presets:['es2015']
    })
    .code;
;
sub(10,5);