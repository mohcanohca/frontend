/**
 * Created by Lenovo on 2018/4/5.
 */
var name='global';
var age=1000;

function Person(cname) {
    alert(this)//this已经指向一个Person类型的空对象，即this={}
    alert(this instanceof Person);//true

    alert(this.name);//undefined 因为this当前指向的是空对象，还没有属性和方法

    alert(name);//undefined：在建立变量对象时，会检查上下文中的变量声明，将其添加到变量对象中，值为undefined。Person构造方法中var name='local'，会将name添加到变量对象中，此时还未执行构造函数，未赋值，所以为undefined

    var name='local';

    //给this指向的对象添加属性和方法，属于对象内的属性和方法，只有该对象能够访问
    this.name=cname;
    this.age=10;
    this.sayName=function () {
        alert(name);//local  访问的是局部变量name，如果没有局部变量name，会顺着作用域链向上查找，找到全局变量name='global'

        // alert(age);//ReferrenceError:age is not defiend; 没有定义局部变量age

        alert(this.name);//douzi 访问的是this指向的对象中的属性
    }

    //闭包
    //上sayAge执行时，压入栈中
    function sayAge() {
        console.log(this);//此时this是在全局作用域下，指向window
        alert(this.age);//undefined
    }
    sayAge();
}

var p1=new Person('douzi');//弹出undefined
// p1.sayName();
