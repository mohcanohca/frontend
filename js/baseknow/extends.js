//继承的6种实现方式


// 定义一个动物类
function Animal (name) {
    // 属性
    this.name = name || 'Animal';
    this.food=[];//引用属性
    // 实例方法
    this.sleep = function(){
        console.log(this.name + '正在睡觉！');
    }
}
// 原型方法
Animal.prototype.eat = function(food) {
    console.log(this.name + '正在吃：' + food);
};


//1. 原型链继承
/*
缺点：
1. 无法实现多继承
2. 来自原型对象的引用属性为所有实例共享
3. 若要增加原型属性和方法必须在 子构造函数.prototype=new 父构造函数()  之后
4. 创建子类实例时，无法向父类构造函数传参
 */
function Cat(){
}

Cat.prototype=new Animal();
Cat.prototype.name = 'cat';
//　Test Code
var cat = new Cat();
console.log(cat.name);//cat
console.log(cat.eat('fish'));//cat正在吃：fish
console.log(cat.sleep());//cat正在睡觉！
console.log(cat instanceof Animal); //true
console.log(cat instanceof Cat); //true

cat.food.push('fishes');
new Cat().food;//["fishes"]


//2. 构造函数继承
/*
在子类的构造函数中调用父类的构造函数，
实际是将父类的实例属性给子类，
没有用到原型
优点：
1. 解决了原型链继承中，子类实例共享父类中引用属性的问题
2. 创建子类实例时，可以向父类实例传参
3. 可以实现多继承

缺点：
1. 实例只是子类的实例，不是父类的实例
2. 只能继承父类的实例属性和方法，不能继承原型属性和方法
3. 无法实现函数复用，因为每个子类构造函数中都有父类实例函数的副本

 */
function Dog(name) {
    Animal.call(this);
    this.name = name || 'dog';
}

// Test Code
var dog = new Dog();
console.log(dog.name);
console.log(dog.sleep());
console.log(dog instanceof Animal); // false
console.log(dog instanceof Dog); // true

dog.food.push('bones');
dog.food;//[ "bones" ]
new Dog().food;//[]

//3. 实例继承
/*
思想：为父类实例添加新特性，作为子类实例返回
特点：
1. 不限制调用方式，new 子类()还是子类(),返回的对象具有相同的效果

缺点：
1. 实例是父类的实例，不是子类的实例
2. 不支持多继承
 */
function Chicken(name) {
    var animal=new Animal();
    animal.name=name||'chicken';

    return animal;
}
// Test Code
var chicken = new Chicken();
console.log(chicken.name);//chicken
console.log(chicken.sleep());//chicken正在睡觉！
console.log(chicken instanceof Animal); // true
console.log(chicken instanceof Chicken); // false
chicken.food.push('coin');
chicken.food;//[ "coin" ]
new Chicken().food;//[]


//4. 拷贝继承
/*
特点：支持多继承
缺点：
1. 效率低，内存占用高，因为每次创建一个子实例都需要拷贝父类的属性，并且后续创建的子实例可能会覆盖掉之前创建的子实例的属性和方法
2. 无法获取父类的不可枚举的方法
 */
function Duck(name) {
    var animal=new Animal();
    for(var prop in animal){
        Duck.prototype[prop]=animal[prop];
    }
    Duck.prototype.name=name||"Duck";
}

// Test Code
var duck = new Duck();
console.log(duck.name);
console.log(duck.sleep());
console.log(duck instanceof Animal); // false
console.log(duck instanceof Duck); // true

var d1=new Duck("1");
var d2=new Duck("2");
d1.name;//"2"
d2.name;//"2";
d1.food.push("wahaha");
d2.food;//["wahaha"]
new Duck().food;//[]


//5. 组合继承
/*
特点：
1. 弥补了构造函数继承的缺陷，可以继承父类的实例属性和方法，也可以继承父类的原型属性和方法
2. 即是子类的实例，又是父类的实例
3. 不存在父类实例属性的引用类型属性共享问题
4. 可想父类构造函数传参
5. 可以复用函数。

缺点：
1. 调用了两次父类的构造函数，生成了两份实例（子类实例将子类构造函数原型上的那份屏蔽了）
 */
function Goat(name) {
    Animal.call(this);//构造函数继承
    this.name=name||"Goat";
}

Goat.prototype=new Animal();//原型链继承

Goat.prototype.constructor=Goat;

// Test Code
var goat = new Goat();
console.log(goat.name);
console.log(goat.sleep());
console.log(goat instanceof Animal); // true
console.log(goat instanceof Goat); // true



//6. 寄生组合继承
function Monkey(name) {
    Animal.call(this);
    this.name=name||"Monkey";
}
(function (){
    var Super=function () {

    };
    Super.prototype=Animal.prototype;

    Monkey.prototype=new Super();//只继承了Animal.prototype上的属性和方法

    Monkey.prototype.constructor=Monkey;
})();
// Test Code
var monkey = new Monkey();
console.log(monkey.name);
console.log(monkey.sleep());
console.log(monkey instanceof Animal); // true
console.log(monkey instanceof Monkey); //true
