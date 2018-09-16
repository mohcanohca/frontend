//object.create(obj,propertiesObject);

function Foo() {
    this.name='foo'
}
Foo.prototype.getName=function () {
    return this.name;
};

var f1=new Foo();
f1.__proto__.sex="male";

var test=Object.create(f1,{
    //添加到实例test上的属性
    age:{
        value:20,
        configurable:true,
        enumerable:true,
        writable:false
    },
    hobby:{
        enumerable:false,
        get:function () {
          return "read" ;
        },
        set:function (str) {
            this.hobby=str;
        }
    }
});

Object.create=function (obj) {
    var f=new Function();
    f.prototype=obj;
    return f;
}

//new Foo()的实现过程
var f2=new Object();
f2.__proto__=Foo.prototype;
Foo.call(f2);