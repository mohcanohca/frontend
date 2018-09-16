//继承的实现方式

//function XXX(args){}函数声明，js引擎并没有解析函数内部，实际上并不知道函数内部如何，只能获取函数的名称以及参数数量
//XXX()当函数执行时，就进入到了函数的作用域，函数中的变量、函数被声明，被初始化。
// 所有构造函数的prototype默认是Object的实例。

//1、原型链继承
//缺点：如果父类型构造函数中属性值是引用类型（数组、对象），子类型.prototype=new 父类型()后，子类型.prototype拥有父类型的实例属性。所有子类型实例对引用类型属性的修改会同步到子类型.prototype，导致其他子类型实例受到影响
function SuperType(name) {
    this.name='super';
}
//在父类的原型上添加方法。SuperType的prototype是Object的实例
SuperType.prototype.getName=function () {
    return this.name;
}

function SubType() {
    // this.name='sub';
}
//子类的原型被重写，指向了父类型
SubType.prototype=new SuperType();

var instance=new SubType();
console.log(instance.name);//super
instance.getName();//调用父类原型上的方法

//2、构造函数方式：在子类型的构造函数中调用父类型的构造方法
//缺点：所有的方法都在构造函数中定义，没有函数复用
function Super2() {
    this.color=['pink','yellow'];
    this.getColor=function () {
        return this.color;
    }
}
function Sub2() {
    //继承了Super2
    Super2.call(this);//把Super2当做普通函数，将它的代码放在Sub2中执行，将this指向将Super2的作用域
}
var instance2=new Sub2();
console.log(instance2.getColor());

//3、混合式：原型链+构造函数
function Super3(name) {
    //在构造函数中设置共享属性
    this.name=name;
}
//在原型上添加方法，所有实例共享方法
Super3.prototype.getName=function () {
    return this.name;
}

function Sub3(name,age) {
    Super3.call(this,'yyddzz');//继承父类型的实例属性，Super3中的name
    this.name=name;//覆盖了从父类型中继承的name属性
    this.age=age;
}

//原型链继承方式：继承方法。
Sub3.prototype=new Super3();//instance.prototype这个对象（Super3的实例）拥有了Super3的实例属性name。instance3.prototype中有name、constructor、_proto_三个属性

var instance3=new Sub3('ydz','22');
console.log(instance3.name);
instance3.getName();

//4、原型式继承
//5、寄生式继承
//6、寄生组合式继承

var person={
    name:'haha',
    getName:function () {
        console.log(this);
    }
};
person.getName();


