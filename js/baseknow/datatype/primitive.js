//原始值是不能改变的。使用String的toUpperCase()方法并没有改变该string
var bar = "baz";
console.log(bar);               // baz
bar.toUpperCase()
console.log(bar);               // baz

// 使用Array的push()，改变了数组
var foo = [];
console.log(foo);               // []
foo.push("plugh");
console.log(foo);               // ["plugh"]

// 原始类型不能修改，只能通过重新赋值修改变量的值
bar = bar.toUpperCase();       // BAZ


let foo = 5;

function addTwo(foo) {
    foo = foo + 2;
}

addTwo(foo);

console.log(foo);   // 5
