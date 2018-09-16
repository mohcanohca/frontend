/**
 * Created by ydz on 2018/4/12.
 */
//定义属性
var book={
    name:'javascript',
    _version:'2'
}
//定义数据属性
Object.defineProperty(book,'price',{
    configurable:true,
    enumerable:true,
    writable:true,
    value:10
});

//定义访问器属性
Object.defineProperty(book,'version',{
    // value:1000,//访问器属性不包括value值
    get:function () {
        return this._version;
    },
    set:function (newValue) {
        this._version=newValue;
    }
});

Object.defineProperties(book,{
    pages:{
        value:'200'
    },
    author:{
        get:function () {
            return this.name;
        },
        set:function (name) {
            this.name=name
        }
    }
})

var selfbook=function () {
    this.selfname='css';
    this.selfversion='3';
}

selfbook.prototype=book;

var mybook=new selfbook();
for(var i in mybook){
    if(mybook.hasOwnProperty(i)){
        console.log(i);//selfname  selfversion
    }
}

var arr=[1,2,3,4]
for(var prop in arr){
    console.log(prop);
    if(arr.hasOwnProperty(prop)){
        console.log(arr[prop]);
    }
}

