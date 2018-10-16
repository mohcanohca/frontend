// var x;
// if(x=2 ===2){import * as module2 from "./module2";}//SyntaxError: 'import' and 'export' may only appear at the top level
import * as module2 from "./module2"
import number from "./module2"
import {num} from "./module2"

function Person(name) {
    this.name = name;
    this.getName = module2.getName;
}

var p = new Person('douzi')
p.getName();
console.log(number, num);
debugger;
console.log('after after')
